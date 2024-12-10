import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import React, { useEffect, useState } from 'react'
import { addProductFormData } from '@/components/common'
import Form from '@/components/form/form'
import ImageUploader from '@/components/admin/imageUploader'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct,list,fetchProducts,editProduct} from '@/store/product-slice/productSlice'
import { toast } from '@/hooks/use-toast'
import ProductList from '@/components/admin/productList'

const initialState = {
  image:null,
  title:"",
  description:"",
  category:"",
  brand:"",
  price:"",
  salePrice:"",
  quantity:""
}
const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(list)
  const [openCreateProduct,setOpenCreateProduct] = useState(false)
  const [formData,setFormData] = useState(initialState)
  const [imageFile,setImageFile] = useState(null)
  const [uploadedImage,setUploadedImage] = useState("")
  const [edit,setEdit] = useState(false)
  const [editProductId,setEditProductId] = useState(null)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  const onSubmit = (event)=>{
    event.preventDefault();
    //const data = {...formData,image:uploadedImage}
    if(edit){
      console.log("edit details",editProductId,formData)
      dispatch(editProduct({id:editProductId,formData})).then((res)=>{
        console.log(res)
        if(res?.payload?.success){
          toast({
            title:res.payload.message
          })
          setOpenCreateProduct(false)
          dispatch(fetchProducts());
        }
      }).catch((error)=>{
        console.log("dispatch add error",error)
      })
    }
    else{
      const data = {...formData,image:uploadedImage}
    if(!data.image || !data.price  || !data.category || !data.brand || !data.salePrice || !data.quantity || !data.description ){
      toast({
        variant:"destructive",
        title:"All Fields are required",
        description:`Please Fill all feilds below`
      })
    }
    else{
      dispatch(addProduct(data)).then((resData)=>{
        if(resData?.payload?.success){
          toast({
            title:resData.payload.message
          })
          setUploadedImage("")
          setImageFile(null)
          setFormData(initialState)
          setOpenCreateProduct(false)
          dispatch(fetchProducts());
        }
        console.log("dispatch add data",resData)
      }).catch((error)=>{
        console.log("dispatch add error",error)
      })
      //console.log('Form Submitted:', data);
      //console.log(imageFile,"image file")
      //console.log(uploadedImage,"uploaded image")
      // setUploadedImage("")
      // setImageFile(null)
      // setFormData(initialState)
      // toast({
      //   //variant:"destructive",
      //   title:"Product added successfully",
      //   description:`Product created`
      // })
      // setOpenCreateProduct(false)
    }}
  }
  //console.log("products response",products)
  return (
    <div className='w-full bg-black h-screen overflow-auto'>
      <div className='w-full flex m-3'>
        <Button variant="secondary" onClick={()=>setOpenCreateProduct(true)}>
          Add Products
        </Button>
      </div>
      {
        products.length === 0 ? 
        <div className=' mt-4 text-center'>
          <h1 className='text-2xl font-bold'>No products found Please add Products!!...</h1>
        </div> : <ProductList setFormData={setFormData} setEditProductId={setEditProductId} setOpenCreateProduct = {setOpenCreateProduct} setEdit={setEdit}/>
      }
      {/* <ProductList/> */}
      <div className='grid gap-3 md:grid-cols-3 lg:grid-cols-4'>
      </div>
      <Sheet open={openCreateProduct} onOpenChange={()=>{
        setOpenCreateProduct(false)
        setEdit(false)
        setFormData(initialState)
        setEditProductId(null)
        }}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-center text-2xl mb-2">{edit ? "Edit this Product":"Add New Product"}</SheetTitle>
          </SheetHeader>
          <ImageUploader imageFile={imageFile} setImageFile={setImageFile} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} edit={edit}/>
          <div className='py-6'>
            <Form formControllers={addProductFormData} onSubmit={onSubmit} buttonText={ edit ? "Edit Product":"Add Product"} formData={formData} setFormData={setFormData}  />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Products
