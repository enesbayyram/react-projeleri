import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { AppSliceType, LoginResponse, ProductType } from '../types/Types'


export interface ProductSliceState {
    products: ProductType[]
}

const initialState: ProductSliceState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state: ProductSliceState, action: PayloadAction<ProductType[]>) => {
            state.products = [...action.payload];
        },

        filterProducts: (state: ProductSliceState, action: PayloadAction<string>) => {
            const tempList: ProductType[] = [];
            console.log("value ", action.payload)
            state.products.map((product: ProductType) => {
                if (product.title?.toLowerCase().includes(action.payload.toLowerCase())) {
                    console.log(product.title)
                    tempList.push(product);
                }
            })
            state.products = [...tempList];
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<ProductSliceState>) => {

    }
})

export const { setProducts, filterProducts } = productSlice.actions
export default productSlice.reducer