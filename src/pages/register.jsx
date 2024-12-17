import { registerFormController } from '@/components/common';
import Form from '@/components/form/form';
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/auth-slice';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastAction } from "@/components/ui/toast"

const initialState = {
  name:"",
  email:"",
  password:""
}
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const {toast} = useToast()
  //console.log(formData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (event)=>{
    event.preventDefault()
    dispatch(registerUser(formData)).then((data)=>{
      if(data?.payload?.success){
        console.log(data)
        toast({
          title:data?.payload?.message
        })
        navigate("/auth/login")
      }
       else{
         console.log(data)
         toast({
           variant: "destructive",
           title:"Registration Failed..",
           description:data?.payload?.message,
           action: <ToastAction altText="Try again">Try again</ToastAction>
         })
       }
    }).catch((error)=>{
      toast({
        variant:"destructive",
        title:"Server Error..",
        description:error?.payload?.message || "A server error occurred. Please try again later.",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      })
    })

  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6  bg-slate-50 rounded-lg px-5 py-3">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
      </div>
      <Form
      formControllers={registerFormController}
      buttonText={'Creat Account'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
       <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
    </div>
  )
}

export default Register
