import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import productService from '../services/ProductService';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import { ProductType } from '../types/Types';
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from '@mui/material';
import { addProductToBasket, setBasket } from '../redux/basketSlice';
import storageService from '../services/StorageService'


function ProductDetail() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<ProductType>();

    const [count, setCount] = useState<number>(0)

    const getProductById = async (productId: number) => {
        if (productId) {
            try {
                dispatch(setLoading(true));
                const response: ProductType = await productService.getProductById(productId);
                if (response) {
                    setProduct(response);
                }

            } catch (error) {
                toast.error("Ürün detayı getirilirken hata oluştu : " + error);
            }

            dispatch(setLoading(false));
        }
    }

    const addBasket = () => {
        if (count == 0) {
            toast.warn("En az 1 adet almalısınız!");
            return;
        }
        const payload: ProductType = {
            ...product,
            count
        }

        try {
            dispatch(addProductToBasket(payload))
            toast.success("Ürün sepete eklendi")
        } catch (error) {
            toast.error("Ürün sepete eklenirken hata oluştu : " + error)
        }
    }

    useEffect(() => {
        getProductById(Number(productId));
    }, [])

    useEffect(() => {
        const basketString = localStorage.getItem("basket");
        if (basketString) {
            const basket: ProductType[] = JSON.parse(basketString) as ProductType[];
            dispatch(setBasket(basket))
        }

    }, [])

    return (
        <Container maxWidth="xl">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '45px', boxShadow: '1px 2px 5px lightgrey' }}>
                <div className='left' style={{ marginRight: '100px' }}>
                    <img src={product?.image} alt={product?.title} width={400} height={500} />
                </div>

                <div className="right" style={{ marginTop: '30px' }}>
                    <div style={{ height: '320px' }}>
                        <h2>{product?.title}</h2>
                        <p style={{ marginTop: '20px', fontFamily: 'arial', fontSize: '17px' }}>{product?.description && product?.description.substring(1, 400)}</p>
                        <p style={{ marginTop: '20px', fontFamily: 'arial', fontSize: '17px', fontWeight: 'bold' }}>{product?.category}</p>
                        <h1 style={{ marginTop: '30px', fontFamily: 'arial', fontSize: '45px' }}>{product?.price}₺</h1>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: '25px' }}>
                            <FaPlusCircle onClick={() => setCount(count + 1)} style={{ fontSize: '25px', marginRight: '10px', cursor: 'pointer' }} /> <span style={{ fontSize: '25px' }}>{count}</span> <FaMinusCircle onClick={() => setCount(count - 1)} style={{ fontSize: '25px', marginLeft: '10px', cursor: 'pointer' }} />
                        </div>
                    </div>

                    <Button onClick={addBasket} size='small' sx={{ textTransform: 'none', marginTop: '25px' }} variant='contained'>Sepete Ekle</Button>
                </div>
            </div>
        </Container>
    )
}

export default ProductDetail