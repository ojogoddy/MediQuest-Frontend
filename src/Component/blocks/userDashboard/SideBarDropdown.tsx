import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineMedicineBox} from "react-icons/ai"
import {GrFormSchedule} from "react-icons/gr"
import {BsBookmark} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import {MdMenu} from "react-icons/md"
import {MdLogout} from "react-icons/md"


interface IProps {
    changeSideBarShow:()=> void
}

const SideBarDropDown :React.FC<IProps>= ({changeSideBarShow}) => {
  return (
    <div className='fixed pl-6  top-0 w-[230px] left-0 bottom-0 bg-[#0D3859] text-white '>
    <div onClick={changeSideBarShow} className="h-[70px] text-[25px] pt-5">
       { <MdMenu/>}
    </div>
    <div className="space-y-9 mt-10">
        <div  className="flex focus:bg-white focus-visible:bg-black items-center gap-4 cursor-pointer">
            <div className=" text-[25px]">
                {<AiOutlineHome/>}
            </div>
            <div className="">Overview</div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[25px]">
            {<AiOutlineMedicineBox/>}
            </div>
            <div  className="">Results</div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[25px]">
                {<GrFormSchedule/>}
                
            </div>
        
            <div className="">Scheduled Sessions</div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[25px]">
            {<BsBookmark/>}
            </div>
            <div className="">My Bookings</div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer ">
            <div className="text-[25px]">
            {<FiSettings/>}
            </div>
        
        <div className="flex items-center  cursor-pointer">
            <div className="text-[25px]">
                
            </div>
            <div  className="">Settings</div>
        </div>
    </div>
    <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[25px]">
                <MdLogout/>
            </div>
            <div  className="">Log Out</div>
        </div>
    </div>
 
 </div>
   
      
  )
}

export default SideBarDropDown