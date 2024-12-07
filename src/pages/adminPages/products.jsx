import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import React, { useState } from 'react'
import { addProductFormData } from '@/components/common'
import Form from '@/components/form/form'
import ImageUploader from '@/components/admin/imageUploader'

const initialState = {
  image:null,
  title:"",
  description:"",
  category:"",
  brand:"",
  price:"",
  salePrice:""
}
const Products = () => {
  const [openCreateProduct,setOpenCreateProduct] = useState(false)
  const [formData,setFormData] = useState(initialState)
  const [imageFile,setImageFile] = useState(null)
  const [uploadedImage,setUploadedImage] = useState("")
  const onSubmit = (event)=>{
    event.preventDefault(); // Prevent form default submission behavior
    console.log('Form Submitted:', formData);
    console.log(imageFile,"image file")
    console.log(uploadedImage,"uploaded image")
    setFormData(initialState)
  }
  return (
    <div className='w-full'>
      <div className='w-full flex'>
        <Button onClick={()=>setOpenCreateProduct(true)}>
          Add Products
        </Button>
      </div>
      <div className='grid gap-3 md:grid-cols-3 lg:grid-cols-4'></div>
      <Sheet open={openCreateProduct} onOpenChange={()=>setOpenCreateProduct(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-center text-2xl mb-2">Add New Product</SheetTitle>
          </SheetHeader>
          <ImageUploader imageFile={imageFile} setImageFile={setImageFile} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>
          <div className='py-6'>
            <Form formControllers={addProductFormData} onSubmit={onSubmit} buttonText="Add Product" formData={formData} setFormData={setFormData} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Products
