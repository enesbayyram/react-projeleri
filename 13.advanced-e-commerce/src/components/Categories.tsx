import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import categoryService from '../services/CategoryService';
import { toast } from 'react-toastify';
import { CategoryType, ProductType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/appSlice';
import { setProducts } from '../redux/productSlice';
import productService from '../services/ProductService';

function Categories() {

    const dispatch = useDispatch();
    const [categories, setCategories] = useState<Array<CategoryType>>([])

    const handleCategory = async (category: CategoryType, e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            dispatch(setLoading(true));
            if (e.target.checked) {
                const products: ProductType[] = await categoryService.getCategoryByName(category.category);
                dispatch(setProducts(products));
            } else {
                const products: Array<ProductType> = await productService.getAllProducts();
                dispatch(setProducts(products));
            }

        } catch (error) {
            toast.error("Kategoriye göre ürünler getirilirken hata oluştu : " + error)
        }
        dispatch(setLoading(false));
    }

    useEffect(() => {
        try {
            categoryService.getAllCategories()
                .then((response: string[]) => {
                    let counter: number = 1;
                    let tempCategories: CategoryType[] = [];
                    response.forEach((category) => {
                        tempCategories.push({ id: counter, category: category });
                        counter++;
                    })
                    setCategories(tempCategories);
                })
                .catch((error: any) => toast.error("Kategori listesi alinirken hata oluştu : " + error))
        } catch (error) {
            toast.error("Kategori listesi alinirken hata oluştu : " + error)
        }
    }, [])

    console.log(categories)
    return (
        <div style={{ width: '150px', marginTop: '50px', marginLeft: '20px' }}>

            <FormGroup>
                <p style={{ textAlign: 'center', fontFamily: 'arial', fontSize: '13px', marginBottom: '15px', fontWeight: 'bold' }}>Kategori</p>
                {categories && categories.map((category: CategoryType) => (
                    <FormControlLabel key={category.id} control={<Checkbox sx={{ fontSize: '12px' }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCategory(category, e)} />} label={category.category} />
                ))}
            </FormGroup>
        </div>
    )
}

export default Categories