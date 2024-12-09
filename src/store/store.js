import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import productSlice from "./product-slice/productSlice"
const store = configureStore({
    reducer:{
        auth:authReducer,
        eshopProductList:productSlice
    }
})

export default store