import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');
const initialState = {
    isAuthenticated:!!token,
    user:storedUser ? JSON.parse(storedUser) : null,
    isLoading:true
}

export const registerUser = createAsyncThunk('/auth/register',
    async(formData,{ rejectWithValue })=>{
        try{
            const response = await axios.post("http://localhost:8001/api/auth/register",formData,{withCredentials:true})
            return response.data
        }
        catch(error){
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
              }
              return rejectWithValue(error.message);
        }
    }
)

export const loginUser = createAsyncThunk("/auth/login",
    async(formData,{rejectWithValue})=>{
        try{
            const response = await axios.post("http://localhost:8001/api/auth/login",formData,{withCredentials:true})
            //console.log(response.data,"redux data")
            return response.data
        }
        catch(error){
            console.log(error,"error from redux")
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
              }
              return rejectWithValue(error.message);
        }
    }
)
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false; 
            state.user = null;
            state.isAuthenticated = false
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = true 
            state.user = null;
            state.isAuthenticated = false
        })
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading = true
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false; 
            state.user = action?.payload?.user;
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload?.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = true 
            state.user = null;
            state.isAuthenticated = false
        })
    }
})

//export const {setuser} = authSlice.actions 
export const { logout } = authSlice.actions;
export default authSlice.reducer
export const loggedUser =(state)=> state.auth.user