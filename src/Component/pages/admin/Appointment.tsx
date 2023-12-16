import React, {useState} from 'react'
import { FaBookMedical } from 'react-icons/fa'

const Appointment:React.FC = () => {
    const [appoint, setAppoint] = useState<boolean>(false)

    const changeAppoint = ()=>{
        setAppoint(!appoint)
    }
  return (
    <div className='bg-white shadow-md text-[#003189] p-4 rounded-lg'>
        <div className="flex items-center justify-between">
            <h1 className='font-bold text-[25px]'>Calendar</h1>
            <div onClick={changeAppoint} className="flex items-center gap-2 cursor-pointer">
            {appoint && (
              <div className='absolute top-[150px] rounded-lg p-3 right-5 bg-white shadow-md h-[70vh] w-[400px]' >
                <div>Appointment</div>
              </div>
            )}
                <p className='font-semibold'>New Appointment</p>
                <FaBookMedical/>
            </div>
        </div>
    </div>
  )
}

export default Appointment