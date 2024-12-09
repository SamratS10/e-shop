import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { deleteProduct, fetchProducts } from '@/store/product-slice/productSlice'
import { toast } from '@/hooks/use-toast'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"

const ProductCard = ({product,role,setFormData,setEditProductId,setOpenCreateProduct,setEdit}) => {
    const {title,description,image,price,salePrice,_id} = product
    const dispatch = useDispatch()
    //const [open,setOpen] = useState(false)
    const handlDelete = (id)=>{
        dispatch(deleteProduct(id)).then((res)=>{
            if(res.payload.success){
                toast({
                    title:res.payload.message
                  })
                dispatch(fetchProducts())
            }
        }).catch((error)=>{
            console.log("dispatch add error",error)
          })
    }
  return (
    <div>

    <Card className="mx-w-[300px] min-w-[350px] shadow-md  ">
      <div className=' p-1'>
        <img src={image} alt={title} className='w-full h-[150px] rounded-sm bg-cover'/>
      </div>
      <CardContent>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
        <p className='text-lg'>{description}</p>
        <div className='flex justify-between items-center'>
            <span className=' line-through'>
                price:{price}Rs
            </span>
            <span className=' font-semibold'>
                sale price: <span className=' text-xl'>{salePrice}Rs</span>
            </span>
        </div>
        {
            role==="admin" ? 
            <div className='flex justify-between items-center mt-3'>
                <div>
                    <Button onClick={()=>{
                        setOpenCreateProduct(true)
                        setFormData(product)
                        setEditProductId(_id)
                        setEdit(true)
                        }}>
                        Edit
                    </Button>
                </div>
                <div>
                    <Button onClick={()=>{handlDelete(_id)}}>
                        Delete
                    </Button>
                </div>
            </div> : 
            <div className=' text-center'>
                <div>
                <Button>
                    Add to cart
                </Button>
                </div>
            </div>
        }
      </CardContent>
    </Card>
    </div>
  )
}

export default ProductCard
