import React from 'react'
import SideBar from '../../blocks/adminDashboard/SideBar'
import NavBar from '../../blocks/adminDashboard/NavBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout:React.FC = () => {
  return (
    <div className='bg-white  '>
        <SideBar/>
        <div className=''>
            <NavBar/>
                <div className=' bg-slate-200 h-[100vh] pt-[90px] ml-[230px] pl-5 pr-5 '>
                    <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default DashboardLayout