
import React from 'react'
import Sidebar from '../../blocks/userDashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import NavBar from '../../blocks/userDashboard/NavBar'

const Userdashboardlayout:React.FC = () => {
  return (
  <div className='bg-white'>
     <Sidebar/>
        <div className=''>
            <NavBar/>
                <div className=' bg-slate-200 h-[100vh] pt-[90px] ml-[230px] pl-5 pr-5 '>
                    <Outlet/>
                </div>
        </div>
    </div>
    
  )
}

export default Userdashboardlayout