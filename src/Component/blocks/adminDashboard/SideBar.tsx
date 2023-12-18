import React from 'react'
import { FaHome } from 'react-icons/fa'
import {  MdAnalytics, MdLogout, MdMenu,  MdReport, MdSettings, MdSupportAgent } from 'react-icons/md'
import { RiCalendarLine, RiTestTubeFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const SideBar:React.FC = () => {
    const Navigate = useNavigate()

    const Dashboard = ()=>{
        Navigate("/admin-dashboard")
    }
    const Patient = ()=>{
        Navigate("/admin-dashboard/adminpatients")
    }
    const Document = ()=>{
        Navigate("/admin-dashboard/documents")
    }
    const Notification = ()=>{
        Navigate("/admin-dashboard/notification")
    }
    const Appoint = ()=>{
        Navigate("/admin-dashboard/appointment")
    }
    const Logout = ()=>{
        Navigate("/admin-dashboard/logout")
    }
    const Test = ()=>{
        Navigate("/admin-dashboard/test")
    }
  return (
    <div className='fixed pl-6  top-0 w-[230px] left-0 bottom-0 bg-[#003189] text-white'>
        <div className="h-[70px] text-[25px] pt-5">
            <MdMenu/>
        </div>
        <div className="space-y-9 ">
            <div onClick={Dashboard} className="flex focus:bg-white focus-visible:bg-black items-center gap-4 cursor-pointer">
                <div className=" text-[25px]">
                    <FaHome/>
                </div>
                <div className="">Dashboard</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdSupportAgent/>
                </div>
                <div onClick={Patient} className="">Patients</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdReport/>
                </div>
                <div onClick={Notification} className="">Notification</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdAnalytics/>
                </div>
                <div onClick={Document} className="">Document</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <RiTestTubeFill/>
                </div>
                <div onClick={Test} className="">Test</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer ">
                <div className="text-[25px]">
                    <RiCalendarLine/>
                </div>
                <div onClick={Appoint} className="">Appointment</div>
            </div>
           
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdSettings/>
                </div>
                <div className="">Settings</div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
                <div className="text-[25px]">
                    <MdLogout/>
                </div>
                <div onClick={Logout} className="">Log Out</div>
            </div>
        </div>
    </div>
  )
}

export default SideBar