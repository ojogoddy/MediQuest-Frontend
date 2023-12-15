import React from 'react'
import { useNavigate } from 'react-router-dom';
import {TfiAngleDown} from "react-icons/tfi"



interface IProps {
    props: any;
}

const Dropdown:React.FC<IProps> = () => {

    const Navigate = useNavigate()
    const handleSignup = () =>{
      Navigate("/register")
    }
    const handleLogin = () =>{
      Navigate("/login")
    }


  return (
    <div className='sm:bg-[red] sm:w-[50%] sm:h-[60vh] sm:absolute sm:top-[30px]'>
         <div className='flex justify-between gap-10 text-black sm:hidden md:hidden lg:gap-6'>
            <nav>Book Now</nav>
            <nav>Services</nav>
            <nav>About Us</nav>
            <div className="flex items-center gap-2"><nav>More</nav> 
            <TfiAngleDown/>
            </div>
          </div>

          <div className="sm:hidden md:hidden">
          <button className='bg-transparent text-black border border-[black] mr-2 py-2 px-5 rounded-[10px] lg:text-[14px]'
          onClick={handleSignup}
          >Sign Up</button>
          <button className='bg-black text-white py-2 px-6 rounded-[10px] lg:text-[14px]'
          onClick={handleLogin}
          >Log in</button>
        </div>

    </div>
  )
}

export default Dropdown