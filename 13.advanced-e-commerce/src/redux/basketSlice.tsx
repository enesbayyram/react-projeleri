import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types/Types'
import storageService from '../services/StorageService'

export interface BasketSliceState {
    basket: ProductType[],
    totalAmount: number
}
const initialState: BasketSliceState = {
    basket: [],
    totalAmount: 0
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasket: (state: BasketSliceState, action: PayloadAction<ProductType[]>) => {
            state.basket = [...action.payload];
            storageService.write("basket", state.basket);
        },
        addProductToBasket: (state: BasketSliceState, action: PayloadAction<ProductType>) => {
            if (state.basket.length == 0) {
                //sepette hiç ürün yok demektir
                state.basket = [action.payload]
            } else {
                //sepette ürün varsa;
                const findProduct = state.basket.find((product: ProductType) => product.id === action.payload.id);
                if (findProduct) {
                    //Aynı ürün sepette var
                    if (findProduct.count && action.payload.count) {
                        findProduct.count = findProduct.count + action.payload.count;

                        state.basket = [...state.basket.map((product: ProductType) => product.id === action.payload.id ? findProduct : product)]
                    }
                } else {
                    //Yeni ürün
                    state.basket = [...state.basket, action.payload];
                }
            }

            storageService.write("basket", state.basket);
        },

        removeProductFromBasket: (state: BasketSliceState, action: PayloadAction<number>) => {
            state.basket = [...state.basket.filter((product: ProductType) => product.id !== action.payload)]
            storageService.write("basket", state.basket);
        },

        calculateBasket: (state: BasketSliceState) => {
            let totalAmount = 0;
            state.basket.length > 0 && state.basket.forEach((product: ProductType) => {
                if (product.price && product.count) {
                    totalAmount += product.price * product.count;
                }
            })

            state.totalAmount = totalAmount;
        }
    }
})


export const { setBasket, addProductToBasket, removeProductFromBasket, calculateBasket } = basketSlice.actions
export default basketSlice.reducer