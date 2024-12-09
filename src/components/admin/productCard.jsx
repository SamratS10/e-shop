import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

const ProductCard = ({product,role}) => {
    const {title,description,image,price,salePrice} = product
  return (
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
                    <Button>
                        Edit
                    </Button>
                </div>
                <div>
                    <Button>
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
  )
}

export default ProductCard
