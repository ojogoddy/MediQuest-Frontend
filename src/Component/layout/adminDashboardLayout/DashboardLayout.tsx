import React from 'react'
import SideBar from '../../blocks/adminDashboard/SideBar'
import NavBar from '../../blocks/adminDashboard/NavBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout:React.FC = () => {
  return (
    <div className='bg-slate-100  '>
        <SideBar/>
        <div className=''>
            <NavBar/>
                <div className=' bg-slate-100 min-h-screen pb-5 pt-[90px] ml-[230px] px-5 '>
                    <Outlet/>
                </div>
        </div>
    </div>
  )
}

export default DashboardLayout