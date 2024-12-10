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
    const {title,description,image,price,salePrice,_id,brand} = product
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
        <Card className="max-w-sm md:w-[270px] bg-card shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <div className="p-1">
        <img
          src={image}
          alt={title}
          className="w-full h-48 rounded-t-lg object-cover"
        />
      </div>
      <div className='p-2'>
        <h2 className="text-lg font-bold text-primary mb-2">{title}</h2>
        <p className="text-muted-foreground mb-2">{description}</p>
        <p className='font-medium text-primary'>Brand: <span className='gradient-text'>{brand}</span></p>
        <div className="flex justify-between items-center text-lg font-medium">
          <span className="line-through text-destructive">₹{price}</span>
          <span className="text-success">₹{salePrice}</span>
        </div>
        {role === "admin" ? (
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={() => {
                setOpenCreateProduct(true);
                setFormData(product);
                setEditProductId(_id);
                setEdit(true);
              }}
              className="bg-primary text-primary-foreground"
            >
              Edit
            </Button>
            <Button
              onClick = {()=>{handlDelete(_id)}}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </Button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <Button className="bg-accent text-accent-foreground">Add to Cart</Button>
          </div>
        )}
      </div>
    </Card>
    {/* <Card className="mx-w-[300px] min-w-[350px] shadow-md  ">
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
    </Card> */}
    </div>
  )
}

export default ProductCard
