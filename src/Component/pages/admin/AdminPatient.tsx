import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import avatar from "../../../assets/avatar.ico"

const AdminPatient = () => {
    const Navigate = useNavigate()

    const arrow =()=>{
        Navigate("/admin-dashboard/patientprofile")
    }
    const userDataString = sessionStorage.getItem("userData")
    const userData = userDataString?JSON.parse(userDataString): null
  return (
    <div className="">
        <div className="flex gap-5">
        <div className="flex gap-5">
            <div className="mb-5">
                    <div className="bg-slate-300 p-4 rounded-lg space-y-5 w-[220px]">  
                    <div className="space-y-4 flex justify-between items-center ">
                    <h1 className='font-semibold text-center text-[30px]'>1,500k</h1>
                    <div className=" px-[4px] text-green-700 bg-green-100 rounded-full text-[14px]">
                        <p>+15%</p>
                    </div>
                </div>
                <p className="text-[14px]">Total Patients</p>
                </div>
                    <div className="bg-slate-300 p-4 rounded-lg w-[220px] mt-5 space-y-5">  
                    <div className="space-y-4 flex justify-between items-center ">
                    <h1 className='font-semibold text-center text-[30px]'>600k</h1>
                    <div className="text-green-700 bg-green-100 p-[2px] rounded-full text-[14px]">
                        <p>+15%</p>
                    </div>
                </div>
                <p className="text-[14px]">Active Appointments</p>
                </div>
            </div>
            <div className="mb-5 ">
                    <div className="bg-slate-300 p-4 rounded-lg w-[220px] space-y-5">  
                    <div className="space-y-4 flex justify-between items-center ">
                    <h1 className='font-semibold text-center text-[30px]'>1,000k</h1>
                    <div className="bg-orange-100 text-orange-700 p-[2px] rounded-full text-[14px]">
                        <p>+15%</p>
                    </div>
                </div>
                <p className="text-[14px]">Active Patients</p>
                </div>
                    <div className="bg-slate-300 p-4 rounded-lg w-[220px] mt-5 space-y-5">  
                    <div className="space-y-4 flex justify-between items-center ">
                    <h1 className='font-semibold text-center text-[30px]'>300k</h1>
                    <div className="bg-red-100 text-red-700 p-[2px] rounded-full text-[14px]">
                        <p>+15%</p>
                    </div>
                </div>
                <p className="text-[14px]">Inactive Patients</p>
                </div>
            </div>
            
        </div>
        
        <div className="bg-slate-300 p-4 rounded-lg mb-5 w-[100%]"></div>
        </div>

        <div className="flex gap-5">
        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className=" " />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2 ">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div 
        onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>
    {/* <div>
      <h2>Welcome to the Admin Dashboard</h2>
      {userData && (
        <div>
          <h3>User Data:</h3>
          <ul>
            <li>Address: {userData.address}</li>
            <li>Email: {userData.email}</li>
            <li>Role: {userData.role}</li>
            <li>UserName: {userData.userName}</li>
            <li>Test: {userData.test}</li>
            <li>Date: {Date()}</li> */}
            
            {/* Add other properties as needed */}
          {/* </ul>
        </div> */}
      {/* )} */}
      {/* Rest of your component code */}
    {/* </div> */}
        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className=" " />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>

        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className="" />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>

        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className=" " />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium text-[14px] space-y-2 ">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>MP/Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>
   
    </div>
        <div className="flex gap-5 mt-5">
        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className="" />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2 ">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div 
        onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>

        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className="" />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>

        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className="" />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium space-y-2">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>

        <div className='bg-slate-300 p-4 rounded-lg w-[100%] space-y-2'>
        <div className=" flex items-center gap-3">
            <div className="">
                <img src={avatar} alt="" className=" " />
            </div>
            <div className="">
                <h2 className='font-semibold'>Mazi Ikechukwu</h2>
                <p className=' font-light text-[13px]'>dianneMazi Ikechukwu@example.com</p>
            </div>
        </div>
        <div className="font-medium text-[14px] space-y-2 ">
            <div className="flex justify-between items-center">
                <h1>Admitted Date: </h1>
                <h1>22/11/2023</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Type: </h1>
                <h1>MP/Pregnancy Test</h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Status: </h1>
                <h1 className=' text-green-600 bg-green-100  rounded-md  p-1'>Active</h1>
            </div>
        </div>
        <div onClick={arrow}
        className="bg-[#0D3859] p-2 rounded-full w-8 text-white m-auto">
            <FaArrowDown/>
        </div>
    </div>
   
    </div>
    </div>
  )
}

export default AdminPatient