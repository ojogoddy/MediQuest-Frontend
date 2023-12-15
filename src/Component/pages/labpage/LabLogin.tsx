import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { LoginMediLab } from '../../utils/ApiCalls'
import ShowToast from '../../common/ShowToast'
import pix from "../../../assets/Group-47545.png"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const LabLogin:React.FC = () => {
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
      const res = await LoginMediLab(formData)
      console.log("after API call", res);
      if(res!.status === 200){
      ShowToast(true, " Lab Login Successfull");
      Navigate("/admin-dashboard")
      }else{
        ShowToast(false, "Login failed")
      }
    }catch(error:any)
    {
      return error
    }
  }
  return (
    <div className='bg-slate-300 h-[100vh] w-screen flex justify-center items-center sm:bg-white md:bg-white' >
       <div className="bg-slate-50 flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
       <div className='bg-[#177eb1] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden'>
        <img src={pix} alt="" />
       </div>
        <div className='flex flex-col gap-4 mx-10 justify-center sm:mt-0 md:mt-0 sm:w-screen sm:mx-4 md:w-screen md:mx-6'>
            <h1 className='text-[#0D3859] text-center text-[50px] font-extrabold  sm:text-[45px]  '>MediQuest</h1>
            <h2 className='text-black text-center text-[35px] sm:text-[20px] md:text-[20px] '>Login to your account </h2>
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
            className="bg-white text-black placeholder:text-slate-400 outline-none p-4 h-[60px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='Email' />
            </div>
            <div className="mx-4 mb-2 flex items-center justify-between border-slate-400 border-[1px] rounded-[30px] outline-[#4eb2e4]">
            <input type={passwordVisible? "text": "password"}
            name="password"
            required
             onChange={onChangeForm}
            className="bg-white text-black placeholder:text-slate-400  p-4 h-[60px] rounded-[30px]  outline-none sm:h-[45px] sm:w-full md:h-[45px] md:w-full " 
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
                <button className='bg-[#177eb1] text-white rounded-[30px] h-[60px] w-[400px] text-[18px]  sm:h-[45px] sm:w-full md:h-[45px] md:w-full'>Login</button>
            </div>
            </form> 
            <div className="">
             <p className=' text-black text-center'>Dont have an account? 
                 <Link 
                    to={`/lab-register`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        transition: "ease-in 300ms"
                    }}><span className='ml-2'>Signup</span>
                 </Link> 
              </p>
            </div>
            
                 
        </div>
       </div>
    </div>
  )
}

export default LabLogin