import React, {useState} from 'react'
import { FaHeart, FaPlus, FaShare, FaUser } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { MdNotifications } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const NavBar:React.FC = () => {
  const Navigate = useNavigate()
  const [appoint, setAppoint] = useState<boolean>(false)

    const changeAppoint = ()=>{
        setAppoint(!appoint)
    }

  const AddNewuser = () =>{
    Navigate("/admin-dashboard/addnewuser")
  }

  const Notify =()=>{
    Navigate("/admin-dashboard/notification")
  }
  return (
    <div className='bg-[#003189] h-[70px] fixed top-0 right-0 left-[230px] px-6'>
        <div className="flex justify-between items-center h-[70px]">
        <div className=''>
            <h1 className="text-white font-medium text-[30px]">MediQuest</h1>
        </div>
        <div className=" flex items-center">
            <input 
            className='rounded-[20px] px-4 py-1 shadow-md outline-none border-none text-black'
            type="text" placeholder='Search' />
            <div 
            onClick={AddNewuser}
            className='text-white bg-[#177eb1] rounded-full p-[6px] ml-3'>
                <FaPlus/>
            </div>
            <div onClick={changeAppoint} className='text-white ml-3 text-[25px] relative cursor-pointer'>
            {appoint && (
              <div className='absolute text-black top-[48px] right-[-5px] rounded-lg p-4 bg-white shadow-xl h-[50vh] w-[300px]' >
                <div className='space-y-3'>
                  <div className="flex items-center justify-between text-[20px]">
                    <p>Notifications</p>
                    <p className='text-red-500 text-[15px]'> Clear All</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-200 rounded-full p-2">
                      <FaHeart/>
                    </div>
                    <div className="text-[14px]">
                      <p>Sara Crouch liked your photo</p>
                      <p className='text-[10px]'>17 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-200 rounded-full p-2">
                      <FaUser/>
                    </div>
                    <div className="text-[14px]">
                      <p>New user registered</p>
                      <p className='text-[10px]'>23 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-200 rounded-full p-2">
                      <FaShare/>
                    </div>
                    <div className="text-[14px]">
                      <p>Amanda Lie shared your post</p>
                      <p className='text-[10px]'>25 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-200 rounded-full p-2">
                      <FaUser/>
                    </div>
                    <div className="text-[14px]">
                      <p>New user registered</p>
                      <p className='text-[10px]'>32 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-200 rounded-full p-2">
                      <FaMessage/>
                    </div>
                    <div className="text-[14px]">
                      <p>You have a new message</p>
                      <p className='text-[10px]'>58 minutes ago</p>
                    </div>
                  </div>
                  <button onClick={Notify} className='text-white rounded-md px-3 mx-auto flex items-center justify-center py-1 text-[16px] font-semibold w-[250px] bg-[#0D3859]'>
                    <p>View all notifications</p>
                  </button>
                </div>
              </div>
            )}
              <MdNotifications/>
              <div className='absolute top-0 left-3 text-white bg-red-600 text-[12px] p-1 rounded-full h-4 w-4 flex items-center justify-center animate-ping '>
                <p>0</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar