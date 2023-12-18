import React from 'react'

import  {AiOutlineMedicineBox} from "react-icons/ai"
import {FaWheelchair} from "react-icons/fa" 
import {MdOutlineToday} from "react-icons/md"
import {AiOutlineEye} from "react-icons/ai"

const Settings:React.FC = () => {
  return (
    <div className='h-full mt-0  mb-[80px] sm:mb-0 sm:h-full 2xl:mt-16'>

        <div className='flex justify-between  sm:flex sm:gap-10 sm:mb-16  md:mb-20 sm:mt-5'>
        
       <div className=''>
       
       </div>
        
        <h2 className='text-[#1F1F1F] font-bold text-2xl sm:text-[12px] sm:hidden 2xl:text-4xl'>Settings</h2>
        <div className='text-[#1F1F1F] sm:flex sm:flex-col flex gap-3 2xl:gap-0'>
            <div className='2xl:mr-96 sm:mr-10'>
            <span className='text-[8px]'>Today's Date</span>
            <h3 className='font-bold sm:text-[10px] sm:font-bold'>2023-06-06</h3>
            </div>
            <div className='sm:hidden h-[50px] bg-[#CCCCCC] sm:h-[30px] sm:w-[30px] sm:p-2 rounded-[5px] p-4 2xl:relative 2xl:right-96 '>
            {<MdOutlineToday/>}
            </div>
        </div>
        </div>

        <div className=' w-full h-[500px] bg-white p-9 pt-10 sm:mt-10 sm:h-[300px] 2xl:w-screen 2xl:h-screen 2xl:pt-60 sm:ml-'>

            <div className=' h-[100px] sm:h-[70px] sm:w-[250px] md:w-[480px] md:ml-36 bg-white border text-[#CCCCCC] mb-10  rounded-[10px] 2xl:h-[200px] 2xl:w-[80%] 2xl:ml-12 2xl:pt-8 '>
                <div className='flex gap-10 p-4'>

                    <div className='w-[50px] h-[70px] sm:w-[30px] sm:h-[30px] md:w-[30px] md:h-[30px] md:p-2 sm:p-2 p-6 pl-4 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<AiOutlineMedicineBox/>}
                    </div>

                    <div>
                        <h2 className='text-[#4EB2E4] font-semibold text-lg sm:text-[10px] md:text-[12px] 2xl:text-[24px]'>Account Settings</h2>
                        <span className='text-[#1F1F1F] sm:text-[6px] md:text-[10px] 2xl:text-[20px]'>Edit your Account Details & Change Password</span>
                    </div>
                </div>
            </div>

            <div className='h-[100px] sm:h-[70px] sm:w-[250px] md:w-[480px] md:ml-36 2xl:w-[80%] 2xl:h-[200px] 2xl:ml-12  bg-white border text-[#CCCCCC] rounded-[10px] mb-10 2xl:pt-8'>
                <div className='flex gap-10 p-4'>

                    <div className='w-[50px] h-[70px] sm:w-[30px] sm:h-[30px] sm:p-2 md:h-[30px] md:w-[30px] md:p-2 p-6 pl-4 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<AiOutlineEye/>}
                    </div>

                    <div>
                        <h2 className='text-[#4EB2E4] font-semibold text-lg sm:text-[10px] md:text-[12px] 2xl:text-[24px]'> View Account Settings</h2>
                        <span className='text-[#1F1F1F] sm:text-[6px] md:text-[10px] 2xl:text-[20px]'>View Personal Information About Your Account</span>
                    </div>
                </div>
            </div>

            <div className='h-[100px] sm:h-[70px] sm:w-[250px] md:w-[480px] md:ml-36 2xl:h-[200px] 2xl:w-[80%] 2xl:ml-12 bg-white border text-[#CCCCCC]  rounded-[10px] 2xl:pt-8'>
                <div className='flex gap-10 p-4 '>

                    <div className='w-[50px] h-[70px] sm:w-[30px] sm:h-[30px] md:h-[30px] md:w-[30px] md:p-2 p-6 pl-4 sm:p-2 rounded-[5px] bg-[#CCCCCC] text-[#4EB2E4]'>
                    {<FaWheelchair/>} 
                    </div>

                    <div>
                        <h2 className='text-[#D81515] font-semibold text-lg sm:text-[10px] md:text-[12px] 2xl:text-[24px]'>Delete Account</h2>
                        <span className='text-[#1F1F1F] sm:text-[6px] md:text-[10px] 2xl:text-[20px]'>Will Permanently Remove your Account</span>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Settings