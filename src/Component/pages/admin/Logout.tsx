import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoutMediLab } from '../../utils/ApiCalls'
import ShowToast from '../../common/ShowToast'

const Logout:React.FC = () => {
const navigate = useNavigate()

const handleNo = ()=>{
    navigate("/admin-dashboard")
}
const logoutLab = async ()=>{
  try{
    const res = await LogoutMediLab()
    if(res!.status === 201){
      ShowToast(true, ` Logout Successfull`);
      navigate("/lab-login");
      console.log("response", res)
    }
    return res
  }catch(error:any)
  {
    return error
  }
}

  return (
    <div className=' p-4  transition-all duration-300 ease-linear '>
        <div className=' bg-white rounded-lg flex flex-col items-center m-auto justify-center w-[500px] h-[500px] space-y-10'>
            <h1 className='text-3xl text-[#003189] font-bold'>Logout?</h1>
            <div className=" flex flex-col space-y-4">
            <button onClick={logoutLab} className='bg-[#003189] text-white border border-white  w-[250px] h-[50px] rounded-[20px]'>Yes</button>
            <button onClick={handleNo} className='bg-transparent border border-[#003189] text-[#003189] w-[250px] h-[50px] rounded-[20px]'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Logout