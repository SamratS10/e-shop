import { useSelector } from "react-redux"
import {list} from '@/store/product-slice/productSlice'
import ProductCard from "./productCard"
import { loggedUser } from "@/store/auth-slice"
const ProductList = ({setFormData,setEditProductId,setOpenCreateProduct,setEdit})=>{
    const products = useSelector(list)
    const user = useSelector(loggedUser)
    const {role} = user
    //nsole.log(user)
    return(
        <div className="flex items-center justify-center md:justify-start lg:justify-center flex-wrap gap-3 mt-3">
            {
                products.map((each)=><ProductCard key={each._id} product={each} role={role} setFormData={setFormData} setEditProductId={setEditProductId} setOpenCreateProduct = {setOpenCreateProduct} setEdit = {setEdit}/>)
            }
        </div>
    )
}

export default ProductList