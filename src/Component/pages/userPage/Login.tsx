import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { LoginMediUser } from '../../utils/ApiCalls'
import ShowToast from '../../common/ShowToast'
import pix from "../../../assets/login1.png"
import pix2 from "../../../assets/login2.png"
import pix3 from "../../../assets/login3.svg"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { useGoogleLogin } from '@react-oauth/google';




const Login:React.FC = () => {
  const Navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const togglePassword = ()=>{
    setPasswordVisible(!passwordVisible)
  }
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

  const LoginUserSubmit = async ()=>{
    try{
      const res = await LoginMediUser(formData)
      // console.log("formData", formData)
      console.log("after API call", res);
      if(res!.status === 201){
      ShowToast(true, "Login Successfull");
      Navigate("/admin-dashboard")
      }else{
        ShowToast(false, "Login failed")
      }
    }catch(error:any)
    {
      return error
    }
  }

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  return (
    <div className='bg-slate-200 h-[100vh] w-screen flex justify-center items-center sm:bg-white md:bg-white' >
       <div className="bg-white shadow-md flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
       <div className='bg-[#003189] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden relative'>
        <img src={pix} alt="" className=' h-auto w-full text-black' />
        <img src={pix2} alt="" className=' absolute top-0' />
        
       </div>
        <div className='flex flex-col gap-4 mx-10 justify-center sm:mt-0 md:mt-0 sm:w-screen sm:mx-4 md:w-screen md:mx-6'>
            <h1 className='text-[#003189] text-center text-[50px] font-extrabold  sm:text-[45px]  '>MediQuest</h1>
            <h2 className='text-[#003189] text-center text-[32px] font-medium sm:text-[20px] md:text-[20px] '>Login  </h2>
            <form 
            onSubmit={(e)=>{
              e.preventDefault()
              LoginUserSubmit()
            }}>
            <div className="mx-4 mb-2">
            <input type="email"
             onChange={onChangeForm}
             name="email"
             required
            className="bg-white text-black placeholder:text-slate-400 outline-none p-4 h-[45px] w-[400px] border-slate-400 border-[1px] rounded-[12px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='Email' />
            </div>
            <div className="mx-4 mb-2 flex items-center justify-between border-slate-400 border-[1px] rounded-[12px] outline-[#4eb2e4]">
            <input type={passwordVisible? "text": "password"}
            name="password"
            required
             onChange={onChangeForm}
            className="bg-white text-black placeholder:text-slate-400  p-4 h-[45px] rounded-[12px]  outline-none sm:h-[45px] sm:w-full md:h-[45px] md:w-full " 
            placeholder='Password' />
              <div className="pr-4"onClick={togglePassword}>
                {passwordVisible?<div className='text-black'>
                  <MdVisibility/>
                </div> :
                <div className='text-black'>
                  <MdVisibilityOff/>
                </div>}
              </div>
            </div>
            
            <div className=" flex justify-between sm:text-[14px]">
              <div className="mx-6 flex text-[#177eb1] ">
                <input type="checkbox" name="" id="" className='bg-transparent mr-2' />
                <p className=''>Remember me</p>
              </div>  
            <div className="mx-6">
                <Link 
                    to={`/forgotpassword`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        transition: "all ease-in 300ms"
                    }}
                    >
                <p className=''>Forgot password?</p>
                </Link>
            </div>
            </div>
            <div className="mx-4 mt-8  ">
                <button className='bg-[#003189] text-white rounded-[30px] h-[45px] w-[400px]   sm:h-[45px] sm:w-full md:h-[45px] md:w-full'>Login</button>
            </div>
            </form> 
            <div className="flex justify-between items-center">
             <p className=' text-black text-center'>Dont have an account? 
                 <Link 
                    to={`/register`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        transition: "ease-in 300ms"
                    }}><span className='ml-2'>Signup</span>
                 </Link> 
              </p>
              <div className=' '>
            
                  <button onClick={() => login()}><img src={pix3} alt="" /></button>
              </div>
            </div>
            
                 
        </div>
       </div>
    </div>
  )
}

export default Login