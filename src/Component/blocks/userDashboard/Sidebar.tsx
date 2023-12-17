// import React, { useState } from 'react'
// import {RxAvatar} from "react-icons/rx"
// import {AiOutlineHome} from "react-icons/ai"
// import {AiOutlineMedicineBox} from "react-icons/ai"
// import {GrFormSchedule} from "react-icons/gr"
// import {BsBookmark} from "react-icons/bs"
// import {FiSettings} from "react-icons/fi"
//  import Sidenavreuse from '../../common/Reuse/Sidenavreuse'
// import { Link } from 'react-router-dom'
// import SideBarDropDown from './SideBarDropdown'
// import { CiMenuBurger } from "react-icons/ci";


// const SideBar :React.FC= () => {
//   const [dropdownshow, setdropdownshow] = useState<boolean>(false)
//   const DropDown = ()=> {
//     setdropdownshow(!dropdownshow)
//   }

//   return (
//     <>

// <div className='sm:hidden ms:hidden md:min-h-full xl:fixed xl:top-0 md:w-[250px] md:fixed md:h-full bg-[#003189] text-white xl:pt-10  sm:bg-none  pb-0 pr-0   p-[30px]  md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:border-r text-[#CCCCCC] md:top-0 lg:w-[250px] lg:fixed lg:top-0 lg:h-full xl:w-[370px] xl:h-full 2xl:fixed 2xl:h-full 2xl:w-[389px] '>
      
//        <div className='  h-[300px] min-w-[300px] p-6 pr-0  md:mt-0'>
//         <div className='flex gap-11 md:flex md:flex-col md:ml-4 lg:flex lg:flex-col lg:ml-6'>
//         <div className='h-[70px]  w-[70px] rounded-[50px] bg-[#D9D9D9] p-[15px]  md:pl-4  lg:pl-4 '>
//           <div className='text-[#1F1F1F] text-[40px]'>{<RxAvatar/>}</div>
//         </div> 
//          <div className='' >
//          <h2 className='text-[#1F1F1F] font-bold text-2xl md:mt-0 md:text-[15px] lg:mt-0 lg:text-[18px]'>MediQuest</h2>
//          <span className='text-[rgb(31,31,31)] md:text-[10px] lg:text-[12px]'>Patient@doc.com</span>
//          </div>
//         </div>
       
//         <hr className=' mt-16 md:mt-6 md:relative right-5 md:w-[200px] lg:relative lg:w-[220px] lg:mt-7 xl:mt-20 2xl:mt-24'/>
//         </div>
        
        
         
//          <div className='  sm:hidden md:mt-0 md:pl-6 lg:pl-6 lg:mb-6 xl:pl-6 2xl:mt-32 2xl:p-6'>
//           <Link to="/">
//             <Sidenavreuse
          
//           text='OverView'
//           icon={<AiOutlineHome/>}
//           />
          
//           </Link>

//           <Link to="/results">
//             <Sidenavreuse 
          
//             text='Results'
//             icon={<AiOutlineMedicineBox/>}
//             />
          
//           </Link>
          
//            <Link to="/session">
//             <Sidenavreuse 
           
//             text='Scheduled session'
//             icon={<GrFormSchedule/>}
//             />
          
//            </Link>

//            <Link to="/bookings">
//             <Sidenavreuse 
           
//             text='My Bookings'
//             icon={<BsBookmark/>}
//             />
          
//            </Link>

//           <Link to="/settings">
//             <Sidenavreuse 
          
//             text='Settings'
//             icon={<FiSettings/>}
//             />
          

//           </Link>
//          </div>
         
         
      
//       </div>

//      <div className='block md:hidden lg:hidden xl:hidden 2xl:hidden'>

//      <div className='sm:flex  sm:absolute left-6 text-[24px] mt-4 font-extrabold  ' onClick={DropDown} >
//         {<CiMenuBurger />}
//       </div>
//       {dropdownshow ? (
//         <div>
//           <SideBarDropDown changeSideBarShow={DropDown} />
//         </div>
//       ):null}
//      </div>
    
//     </>
    
//   )
// }

// export default SideBar

import React ,{useState}from 'react'
import {MdMenu} from "react-icons/md"
import  {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineMedicineBox } from 'react-icons/ai'
import { GrFormSchedule } from 'react-icons/gr'
import {BsBookmark} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import {MdLogout} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from './SideBarDropdown'


const Sidebar:React.FC = () => {
    const [dropdownshow, setdropdownshow] = useState<boolean>(false)
  const DropDown = ()=> {
    setdropdownshow(!dropdownshow)
   }
    const Navigate = useNavigate()

    const Overview = ()=>{
        Navigate("/admin-dashboard")
    }
    const Result = ()=>{
        Navigate("/admin-dashboard/adminpatients")
    }
    const ScheduledSession = ()=>{
        Navigate("/admin-dashboard/documents")
    }
    // const Notification = ()=>{
    //     Navigate("/admin-dashboard/notification")
    // }
    // const Appoint = ()=>{
    //     Navigate("/admin-dashboard/appointment")
    // }
    const Logout = ()=>{
        Navigate("/admin-dashboard/logout")
    }
    const Bookings = ()=>{
        Navigate("/admin-dashboard/test")
    }
  return (
      <>
    <div className='fixed pl-6  top-0 w-[230px] left-0 bottom-0 bg-[#0D3859] text-white sm:hidden '>
        <div className="h-[70px] text-[25px] pt-5">
           { <MdMenu/>}
        </div>
        <div className="space-y-9 mt-10">
            <div onClick={Overview} className="flex focus:bg-white focus-visible:bg-black items-center gap-4 cursor-pointer">
                <div className=" text-[25px]">
                    {<AiOutlineHome/>}
                </div>
                <div className="">Overview</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                {<AiOutlineMedicineBox/>}
                </div>
                <div onClick={Result} className="">Results</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    {<GrFormSchedule/>}
                    
                </div>
            
                <div onClick={ScheduledSession} className="">Scheduled Sessions</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                {<BsBookmark/>}
                </div>
                <div onClick={Bookings} className="">My Bookings</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer ">
                <div className="text-[25px]">
                {<FiSettings/>}
                </div>
            
            <div className="flex items-center  cursor-pointer">
                <div className="text-[25px]">
                    
                </div>
                <div onClick={Logout} className="">Settings</div>
            </div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px] ">
                    <MdLogout/>
                </div>
                <div onClick={Logout} className="">Log Out</div>
            </div>
        </div>
        </div>

        <div className='block md:hidden lg:hidden xl:hidden 2xl:hidden'>
     <div className='sm:flex sm:text-black sm:absolute  left-6 text-[24px] mt-4 font-extrabold  ' onClick={DropDown} >
       {<MdMenu />}
     </div>
     {dropdownshow ? (
       <div >
         <SideBarDropDown changeSideBarShow={DropDown} />
       </div>
     ):null}
    
    </div>
    </>
  )
}

export default Sidebar