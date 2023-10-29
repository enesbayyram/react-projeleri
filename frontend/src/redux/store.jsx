import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'

export const store = configureStore({
  reducer: {
    post : postSlice
  },
})