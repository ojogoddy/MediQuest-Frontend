import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer:React.FC = () => {
  return (
    <div className='text-black px-[90px] py-[40px] sm:px-[16px] md:px-[30px] lg:px-[60px] '>
      <div className="flex justify-between items-center border-b-2 pb-5 sm:flex-col sm:items-start md:flex-col md:items-start ">
        <div className=''>
          <h1 className=' w-[50%] text-[70px] text-[#0D3859] font-extrabold sm:text-[55px] md:mb-1'>MediQuest</h1>
          <div className='flex gap-5 text-[20px] text-[#0D3859] md:mb-12'>
            <FaFacebook/>
            <FaXTwitter/>
            <FaLinkedin/>
            <FaInstagram/>
            <FaYoutube/>
          </div>
        </div>
        <div className="w-[50%] md:w-[100%]">
          <ul className='flex gap-24 sm:flex-col sm:gap-10 sm:mt-10 md:flex md:justify-between lg:gap-6 lg:justify-between'>
            <div className="">
              <li className='text-sm font-semibold text-[#0D3859] cursor-pointer uppercase sm:text-[16px]'>Company</li>
                <div className='text-[14px] mt-6 space-y-4'>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Home</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Book Now</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Services</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>About us</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>More</li>
              </div>
            </div>
            <div className="">
              <li className='text-sm font-semibold text-[#0D3859] uppercase cursor-pointer sm:text-[16px]'>Contact Us</li>
                <div className='text-[14px] mt-6 space-y-4'>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>090 12345678</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>info@mediquest.com</li>
                </div>
            </div>

            <div className="">
              <li className='text-sm font-semibold text-[#0D3859] uppercase cursor-pointer sm:text-[16px]'>Help</li>
                <div className='text-[14px] mt-6 space-y-4'>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Customer Support</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Terms & Conditions</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Privacy Policy</li>
                  <li className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Blog</li>
                </div>
            </div>
           
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-between pt-5 sm:flex-col sm:gap-1'>
        <div className="">
          <p className='text-[12px]'>© 2023 MediQuest. All rights reserved</p>
        </div>
        <div className="flex items-center justify-between text-[12px] gap-4">
          <p className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Privacy Policy</p>
          <p className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Terms of Service</p>
          <p className='hover:text-[#177eb1] focus:text-[#177eb1] cursor-pointer'>Cookie Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Footer