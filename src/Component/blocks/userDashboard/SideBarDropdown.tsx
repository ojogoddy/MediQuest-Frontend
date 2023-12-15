import React from 'react'
import {RxAvatar} from "react-icons/rx"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineMedicineBox} from "react-icons/ai"
import {GrFormSchedule} from "react-icons/gr"
import {BsBookmark} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import Sidenavreuse from '../../common/Reuse/Sidenavreuse'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";

interface IProps {
    changeSideBarShow:()=> void
}

const SideBarDropDown :React.FC<IProps>= ({changeSideBarShow}) => {
  return (
    <div className='sm:w-[150px] sm:h-full fixed bg-white top-0 left-0 bottom-0 pb-0 pr-0   p-[30px] sm:pl-[20px]   shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-r text-[#CCCCCC] '>
       <div className='  '>
        <div className='ml-2 text-[18px] text-[#1f1f1f]' onClick={changeSideBarShow}> {<CiMenuBurger />}</div>
        <div className='flex gap-11 sm:gap-6 sm:flex sm:flex-col '>
        <div className='sm:h-[30px] sm:w-[30px] sm:rounded-[50px]  bg-[#D9D9D9] sm:pl-2 sm:pt-2 sm:pr-2 sm:ml-8 sm:mt-4'>
          <div className='text-[#1F1F1F] sm:text-[12px]'>{<RxAvatar/>}</div>
        </div>
         <div >
         <h2 className='text-[#1F1F1F] font-bold text-2xl sm:text-[10px] sm:ml-6 '>Test Patient...</h2>
         <p className='text-[#1F1F1F] sm:text-[8px] sm:ml-6 '>Patient@doc.com</p>
         </div>
        </div>
        <button className='w-[300px] h-[40px] sm:w-[80px] sm:h-[20px] mt-16  sm:mt-4 text-[#1F1F1F] sm:ml-4 sm:text-[6px] rounded-[5px]  bg-[#D8EBF8]'>Log Out</button>
        <hr className=' mt-16 sm:mt-8'/>
        </div>
        
        
         
         <div className='sm:mt-10'>
          <Link to="/">
            <Sidenavreuse 
          text="overview"
          icon={<AiOutlineHome/>}
          />
          
          </Link>

          <Link to="/results">
          <Sidenavreuse 
            text="Results"
           icon= {<AiOutlineMedicineBox/>}
           />
          </Link>

           <Link to="/session">
           <Sidenavreuse 
            text="Sheduled Session"
            icon={<GrFormSchedule/>}
            />
           </Link>

           <Link to="/bookings">
           <Sidenavreuse 
            text="My Bookings"
            icon={<BsBookmark/>}
            />
          
           </Link>

          <Link to="/settings">
            <Sidenavreuse 
            text="Settings"
          
           icon= {<FiSettings/>}
           />
          
          </Link>
         </div>
      
      
      </div>
  )
}

export default SideBarDropDown