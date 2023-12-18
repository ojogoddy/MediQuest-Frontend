import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccessAccount:React.FC = () => {
    const Navigate = useNavigate()

    const handleLabLogin= async ()=>{
          Navigate("/lab-login")
      }
    const handleLabRegister= async ()=>{
          Navigate("/lab-register")
      }
    const handleUserLogin= async ()=>{
          Navigate("/login")
      }
    const handleUserRegister= async ()=>{
          Navigate("/register")
      }
  return (
    <div className='flex'>
        <div className="flex items-center justify-center bg-your-lab bg-cover bg-center w-[100%]">
            <div className=" flex flex-col items-center justify-center h-[90vh]  text-center w-[500px] space-y-6 ">
                <div className='bg-[#003189] text-white font-bold w-fit p-1 px-4 rounded-md text-[13px]'>BUSINESS</div>
                <h1 className=' text-[35px]'>For Laboratories & Hospitals</h1>
                <p className='text-[24px] leading-7'>We are the market-leading technical interview platform to identify and hire developers with the right skills.</p>
                <div className=" flex gap-4">
                <button 
                onClick={handleLabLogin}
                className='bg-[#003189] text-white w-[200px] h-[50px] rounded-md font-medium'>Login</button>
                <button 
                onClick={handleLabRegister}
                className='bg-[#003189] text-white w-[200px] h-[50px] rounded-md font-medium'>Sign Up</button>
                </div>
                
            </div>
        </div>
        <div className=" flex items-center justify-center w-[100%]"> 
        <div className=" flex flex-col items-center justify-center h-[90vh]  text-center w-[500px] space-y-6 ">
        <div className='bg-[#003189] text-white font-bold w-fit p-1 px-4 rounded-md text-[13px]'>USER</div>
                <h1 className=' text-[35px]'>For User</h1>
                <p className='text-[24px] leading-7'>Join over 21 million developers, practice coding skills, prepare for interviews, and get hired practice coding skills.</p>
                <div className="flex gap-4">
                <button 
                onClick={handleUserLogin}
                className=' bg-[#003189] text-white border-[#003189] w-[200px] h-[50px] rounded-md font-medium'>Login</button>
                <button 
                onClick={handleUserRegister}
                className=' bg-[#003189] text-white border-[#003189] w-[200px] h-[50px] rounded-md font-medium'>Login</button>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccessAccount