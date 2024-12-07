import './App.css'
//import { Button } from './components/ui/button'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserAuthentication from './components/userAuth'
import Login from './pages/login'
import Register from './pages/register'
import AdminLayout from './components/admin/layout'
import Dashboard from './pages/adminPages/dashboard'
import Products from './pages/adminPages/products'
import Orders from './pages/adminPages/orders'
import Features from './pages/adminPages/features'
import NotFound from './components/not-found'
import ShopLayout from './components/shop/layout'
import ShopHome from './pages/shopPages/home'
import ShopListing from './pages/shopPages/listing'
import ShopCheckout from './pages/shopPages/checkout'
import ShopAccount from './pages/shopPages/account'
import ProtectRoute from './components/protectedRoute/protectRoute'
import UnAuth from './pages/unauthPage/unauth'
import { useSelector } from 'react-redux'
//import { LogIn } from 'lucide-react'

function App() {
  // const isAuth = false
  // const user={
  //   name:"sam",
  //   role:"user"
  // }
  const{user,isAuthenticated} = useSelector((state)=>state.auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={
          <ProtectRoute isAuth={isAuthenticated} user={user}>
            <UserAuthentication/>
          </ProtectRoute>
          }>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Route>
        <Route path="/admin" element={
          <ProtectRoute isAuth={isAuthenticated} user={user}>
            <AdminLayout/>
          </ProtectRoute>
        }>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="features" element={<Features/>}/>
        </Route>
        <Route path='/shop' element={
          <ProtectRoute isAuth={isAuthenticated} user={user}>
            <ShopLayout/>
          </ProtectRoute>
        }>
            <Route path="home" element={<ShopHome/>}/>
            <Route path="listing" element={<ShopListing/>}/>
            <Route path="checkout" element={<ShopCheckout/>}/>
            <Route path="account" element={<ShopAccount/>}/>
        </Route>
        <Route path="/unauth-page" element={<UnAuth/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
