import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const ImageUploader = () => {
  return (
    <div className='w-full max-w-md mx-auto'>
      <Label className="text-lg fobt-semibold block mb-2">Upload Image</Label>
      <div>
        <Input type="file" id="image-upload" className="hidden"/>
      </div>
    </div>
  )
}

export default ImageUploader
