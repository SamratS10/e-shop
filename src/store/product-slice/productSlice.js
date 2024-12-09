import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    eshopProducts:[],
    isLoading:true,
    // error: null,
    // successMessage: null,
}
const baseUrl = "http://localhost:8001"
// const token = localStorage.getItem('token');
//console.log("token",token)

export const addProduct = createAsyncThunk("product/add",async(data,{rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.post(`${baseUrl}/api/product/create-product`,data,{
            withCredentials:true,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        //const responseData = await response.json()
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const fetchProducts = createAsyncThunk("product/get",async(_,{rejectWithValue})=>{
    try{
        const response = await axios.get(`${baseUrl}/api/product/get-products`,{
            withCredentials:true,
            // headers:{
            //     Authorization:`Bearer ${token}`
            // }
        })
        //const responseData = await response
        return response?.data
    }
    catch(error){
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const editProduct = createAsyncThunk("product/edit",async({id,formData},{rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        //console.log(formData)
        const response = await axios.put(`${baseUrl}/api/product/edit-product/${id}`,formData,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        //const responseData = await response.json()
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const deleteProduct = createAsyncThunk("product/delete",async(id,{rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${baseUrl}/api/product/delete-product/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        //const responseData = await response.json()
        return response.data
    }
    catch(error){
        return rejectWithValue(error.response?.data || error.message)
    }
})


const productSlice = createSlice({
    name:"eshopProductList",
    initialState,
    reducers:{
        // clearMessages: (state) => {
        //     state.error = null;
        //     state.successMessage = null;
        // },
    },
    extraReducers:(builder)=>{
        // builder.addCase(addProduct.pending, (state) => {
        //     state.isLoading = true;
        //     state.error = null;
        // });
        // builder.addCase(addProduct.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.successMessage = "Product added successfully";
        //     state.eshopProducts.push(action.payload.data.createdProduct);
        // });
        // builder.addCase(addProduct.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });

        // Fetch Products
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            //state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            //console.log("fetch success",action.payload)
            state.eshopProducts = action.payload.products;
            //console.log("eshopProducts",state.eshopProducts)
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.eshopProducts = []
            //console.log("fetch rejected",action.payload)
            //state.error = action.payload.data.error;
        });

        // Edit Product
        // builder.addCase(editProduct.pending, (state) => {
        //     state.isLoading = true;
        //     state.error = null;
        // });
        // builder.addCase(editProduct.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.successMessage = "Product edited successfully";
        //     const updatedProduct = action.payload;
        //     state.eshopProducts = state.eshopProducts.map((product) =>
        //         product._id === updatedProduct._id ? updatedProduct : product
        //     );
        // });
        // builder.addCase(editProduct.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });

        // Delete Product
        // builder.addCase(deleteProduct.pending, (state) => {
        //     state.isLoading = true;
        //     state.error = null;
        // });
        // builder.addCase(deleteProduct.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.successMessage = "Product deleted successfully";
        //     state.eshopProducts = state.eshopProducts.filter(
        //         (product) => product._id !== action.payload.id
        //     );
        // });
        // builder.addCase(deleteProduct.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
})

export const { clearMessages } = productSlice.actions;
export default productSlice.reducer;
export const list = (state)=>state.eshopProductList.eshopProducts