import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { AppSliceType, LoginResponse } from '../types/Types'
import storageService from '../services/StorageService'


const initialState: AppSliceType = {
    currentUser: null,
    loading: false,
    drawer: false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setCurrentUser: (state: AppSliceType, action: PayloadAction<LoginResponse | null>) => {
            state.currentUser = action.payload;
        },
        updateBalance: (state: AppSliceType, action: PayloadAction<number>) => {
            state.currentUser = {
                id: state.currentUser?.id,
                username: state.currentUser?.username,
                password: state.currentUser?.password,
                balance: action.payload
            }

            storageService.write("currentUser", state.currentUser);
        },
        setLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setDrawer: (state: AppSliceType, action: PayloadAction<boolean>) => {
            state.drawer = action.payload;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<AppSliceType>) => {

    }
})

export const { setCurrentUser, setLoading, setDrawer, updateBalance } = appSlice.actions
export default appSlice.reducer