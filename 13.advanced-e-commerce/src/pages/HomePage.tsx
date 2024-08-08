import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import storageService from '../services/StorageService'
import { setCurrentUser, setLoading } from '../redux/appSlice';
import { LoginResponse, ProductType } from '../types/Types';
import productService from '../services/ProductService';
import { toast } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import Container from '@mui/material/Container';
import BasketDetails from '../components/BasketDetails';
import Categories from '../components/Categories';
import { setProducts } from '../redux/productSlice';
import { setBasket } from '../redux/basketSlice';

function HomePage() {
    const { currentUser } = useSelector((state: RootState) => state.app)
    const { products } = useSelector((state: RootState) => state.product);

    const dispatch = useDispatch();

    useEffect(() => {
        const result: any = storageService.read("currentUser");
        if (result) {
            const payload: LoginResponse = {
                id: result.id,
                username: result.username,
                password: result.password,
                balance: result.balance
            }
            dispatch(setCurrentUser(payload))
        }

    }, [])

    useEffect(() => {
        const basket: ProductType[] = storageService.read("basket") as ProductType[];
        if (basket) {
            dispatch(setBasket(basket));
        }
    }, [])


    const getAllProducts = async () => {
        try {
            dispatch(setLoading(true));
            const products: Array<ProductType> = await productService.getAllProducts();
            dispatch(setProducts(products));
        } catch (error: any) {
            toast.error("Ürünler getirilirken hata olustu ", error);
        }
        dispatch(setLoading(false));
    }
    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Categories />
            <Container maxWidth="xl">
                <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        products && products.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </Container>

        </div>
    )
}

export default HomePage