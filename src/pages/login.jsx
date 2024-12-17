import { loginFormController } from '@/components/common'
import Form from '@/components/form/form'
import { toast } from '@/hooks/use-toast'
import { loginUser } from '@/store/auth-slice'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ToastAction } from '@/components/ui/toast'
const Login = () => {
  const initialState = {
    email:"",
    password:""
  }
  const dispatch = useDispatch()
  //const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState);
  const onSubmit = (event)=>{
    event.preventDefault() 
    dispatch(loginUser(formData)).then((data)=>{
      console.log(data,"success data")
      if(data?.payload?.success){
        toast({
          title:data?.payload?.message,
          description:`Welcome ${data?.payload?.user?.name}!`
        })
        //localStorage.setItem("token",data?.payload?.token)
        // if(data?.payload?.user?.role==="user"){
        //   console.log("user")
        //   navigate("/shop/home")
        // }
        // else{
        //   console.log("admin")
        //   navigate("/admin/dashboard")
        // }
      }
      else{
        toast({
          variant: "destructive",
          title:"Login Failed..",
          description:data?.payload?.message || data?.payload,
          action: <ToastAction altText="Try again">Try again</ToastAction>
        })
      }
    }).catch((error)=>{
      console.log(error,"error from login")
      toast({
        variant:"destructive",
        title:"Server Error..",
        description:error?.payload?.message || "A server error occurred. Please try again later.",
        action: <ToastAction altText="Try again">Try again</ToastAction>
      })
    })
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6 card-shadow p-5 bg-slate-50 rounded-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign In
        </h1>
      </div>
      <Form
      formControllers={loginFormController}
      buttonText={'Login'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      />
       <p className="mt-2">
          Don`t have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
    </div>
  )
}

export default Login
