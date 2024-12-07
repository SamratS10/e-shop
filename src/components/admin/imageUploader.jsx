import React, { useRef, useEffect } from 'react';
import { Label } from '../ui/label';
import { FileIcon, UploadCloud, XIcon } from 'lucide-react';
import { Button } from '../ui/button';

const ImageUploader = ({ imageFile, setImageFile, uploadedImage, setUploadedImage }) => {
  const inputImage = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  };

  const handleImageChange = (event) => {
    const userImage = event.target.files?.[0];
    if (userImage) setImageFile(userImage);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setUploadedImage(null);
    if (inputImage.current) {
      inputImage.current.value = '';
    }
  };

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile, setUploadedImage]);

  return (
    <div className="w-full max-w-md mx-auto mt-2">
      <Label className="text-md font-semibold block mb-2">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputImage.current?.click()}
        className="w-full mt-2 border-dashed border border-black p-4 text-center cursor-pointer"
      >
        <input
          type="file"
          id="image-upload"
          className="hidden"
          ref={inputImage}
          onChange={handleImageChange}
        />
        {!imageFile ? (
          <div className="flex flex-col items-center w-full h-20 py-1">
            <UploadCloud className="w-10 h-12" />
            <span>Drag & Drop or click here to upload an image</span>
          </div>
        ) : (
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 mr-2" />
              <p>{imageFile.name}</p>
            </div>
            <div>
              <Button variant="ghost" size="icon" className="text-sm" onClick={handleRemoveImage} >
                <XIcon className="w-4 h-4" />
                <span>Remove</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      {uploadedImage && (
        <div className="mt-4">
          <img src={uploadedImage} alt="Uploaded" className="w-full max-h-64 object-contain" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;


// import React, { useRef, useEffect } from 'react';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { FileIcon, UploadCloud, XIcon } from 'lucide-react';
// import { Button } from '../ui/button';

// const ImageUploader = ({ imageFile, setImageFile, uploadedImage, setUploadedImage }) => {
//   const inputImage = useRef(null);

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     const droppedFile = event.dataTransfer.files?.[0];
//     if (droppedFile) setImageFile(droppedFile);
//   };

//   const handleImageChange = (event) => {
//     const userImage = event.target.files?.[0];
//     if (userImage) setImageFile(userImage);
//   };

//   const handleRemoveImage = () => {
//     setImageFile(null);
//     setUploadedImage(null);
//     if (inputImage.current) {
//       inputImage.current.value = '';
//     }
//   };

//   useEffect(() => {
//     if (imageFile) {
//       const reader = new FileReader();
//       reader.onload = () => setUploadedImage(reader.result);
//       reader.readAsDataURL(imageFile);
//     }
//   }, [imageFile, setUploadedImage]);

//   return (
//     <div className="w-full max-w-md mx-auto mt-2">
//       <Label className="text-lg font-semibold block mb-2">Upload Image</Label>
//       <div
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         className="w-full mt-2 border-dashed border border-black p-4 text-center"
//       >
//         <Input
//           type="file"
//           id="image-upload"
//           className="hidden"
//           ref={inputImage}
//           onChange={handleImageChange}
//         />
//         {!imageFile ? (
//           <div className="flex flex-col items-center w-full h-20 py-1">
//             <UploadCloud className="w-10 h-10" />
//             <span>Drag & Drop or select an image</span>
//             <button onClick={() => inputImage.current?.click()} className="mt-2 underline">
//               Choose File
//             </button>
//           </div>
//         ) : (
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <FileIcon className="w-8 h-8 mr-2" />
//               <p>{imageFile.name}</p>
//             </div>
//             <Button variant="ghost" size="icon" onClick={handleRemoveImage}>
//               <XIcon className="w-4 h-4" />
//               <span>Remove</span>
//             </Button>
//           </div>
//         )}
//       </div>
//       {uploadedImage && (
//         <div className="mt-4">
//           <img src={uploadedImage} alt="Uploaded" className="w-full max-h-64 object-contain" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploader;


// import React, { useRef } from 'react'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { FileIcon, UploadCloud, XIcon } from 'lucide-react'
// import { Button } from '../ui/button'

// const ImageUploader = ({imageFile,setImageFile,uploadedImage,setUploadedImage}) => {
//   const inputImage = useRef(null)
//   const handleDrag = (event)=>{
//     event.preventDefault()
//   }
//   const handleDrop = (event)=>{
//     event.preventDefault()
//     const dropedFile = event.dataTransfer.files?.[0]
//     if(dropedFile) setImageFile(dropedFile)
//   }
//   const handleImageChange =(event)=>{
//     console.log(event.target.files)
//     const userImage = event.target.files?.[0]
//     if(userImage) setImageFile(userImage)
//   }
//   const handleRemoveImage = ()=>{
//     setImageFile(null)
//     if(inputImage.current){
//       inputImage.current.value = ""
//     }
//   }
//   return (
//     <div className='w-full max-w-md mx-auto mt-2'>
//       <Label className="text-lg fobt-semibold block mb-2">Upload Image</Label>
//       <div onDragOver={handleDrag} onDrop={handleDrop} className='w-full mt-2 border-dashed border border-black'>
//         <Input type="file" id="image-upload" className="hidden" ref={inputImage} onChange={handleImageChange}/>
//         {
//           !imageFile ?
//           <div className='flex flex-col items-center w-full h-20 py-1'>
//             <UploadCloud className='w-10 h-10'/>
//             <span>Drag&Drop or select any image</span>
//           </div> : <div className='flex items-center justify-between'>
//             <div>
//               <FileIcon className='w-8 h-8 mr-2'/>
//             </div>
//             <p>{imageFile.name}</p>
//             <Button varient="ghost" size="icon" onClick={handleRemoveImage}>
//               <XIcon className='w-4 h-4'/>
//               <span>Remove image</span>
//             </Button>
//           </div>
//         }
//       </div>
//     </div>
//   )
// }

// export default ImageUploader
