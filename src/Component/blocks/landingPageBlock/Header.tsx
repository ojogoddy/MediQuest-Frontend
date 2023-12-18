import React,{useState} from 'react'
import {TfiAngleDown} from "react-icons/tfi"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import MenuDrop from './MenuDrop';


const Header:React.FC = () => {
  const Navigate = useNavigate()
  const [showmenu, setShowmenu] =useState<boolean>(false)
  const handleSignup = () =>{
    Navigate("/access-account")
  }
  const handleLogin = () =>{
    Navigate("/access-account")
  }
  const changeMenuShow = ()=>{
    setShowmenu(!showmenu)
  }
  const handleHome = () =>{
    Navigate("/")
  }
  return (
    <div className='bg-white px-[90px] sm:px-[16px] md:px-[30px] lg:px-[60px]'>
      <div className='flex items-center justify-between bg-white h-[70px]'>
        <div className="flex items-center justify-between ">
          <div onClick={handleHome} className='mr-28 sm:mr-0 lg:mr-10'>
            <h1 className='text-[#003189] font-bold text-[30px]'>MediQuest</h1>
            
          </div>
          <div className='flex justify-between gap-10 text-[#003189] sm:hidden md:hidden lg:gap-6'>
            <nav>Book Now</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
            <div className="flex items-center gap-2"><nav>More</nav> <TfiAngleDown/></div>
          </div>
        </div>
        <div className="sm:hidden md:hidden">
          <button className='bg-transparent text-[#003189] border border-[#003189] mr-2 py-2 px-5 rounded-[10px] lg:text-[14px]'
          onClick={handleSignup}
          >Sign Up</button>
          <button className='bg-[#003189] text-white py-2 px-6 rounded-[10px] lg:text-[14px]'
          onClick={handleLogin}
          >Log in</button>
        </div>
        <div className="text-[#003189] text-[30px]  hidden sm:block sm:duration-1000 md:block lg:hidden">
          <div className=""
          onClick={changeMenuShow}
          >
            {showmenu?<AiOutlineClose/>: <AiOutlineMenu/>}
            {showmenu && (
              <div  >
                <MenuDrop/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header