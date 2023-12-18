import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaLocationPin} from 'react-icons/fa6'
import { MdDelete, MdEmail } from 'react-icons/md'
import avatar from "../../../assets/avatar.ico"

const PatientProfile:React.FC = () => {
  return (
    <div className='flex gap-5'>
       <div className="">
       <section className="">
            <div className="bg-white text-[#003189] shadow-md p-4 rounded-lg w-[330px]">
                <div className="flex items-center gap-3">
                    <img className='w-[80px]' src={avatar} alt="" />
                    <h1 className='font-semibold'>Dr Mazi Ikechukwu</h1>
                </div>
                <div className="space-y-2">
                <h1 className='font-semibold'>Contacts:</h1>
                <div className="flex items-center gap-3">
                    <FaPhoneSquareAlt/>
                    <p className='text-[14px]'>09024543855</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaLocationPin/>
                    <p className='text-[14px]'>32 old Ojo Road, 2nd School gate</p>
                </div>
                <div className="flex items-center gap-3">
                    <MdEmail/>
                    <p className='text-[14px]'>Ikechukwu@gmail.com</p>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className="bg-white shadow-md text-[#003189] p-4 rounded-lg w-[330px] mt-[20px] space-y-8">
                <div className="font-semibold flex justify-between">
                        <h1 className='font-semibold'>Physical Exam:</h1>
                        <p>...</p>
                </div>
                <div className="flex justify-between border-b border-black">
                    <div className="">
                        <p>Heart</p>
                        <p className='font-semibold'>Blockage in left actery</p>
                    </div>
                    <div className="text-end pb-2">
                        <p >TA</p>
                        <p>120min/Hg</p>
                    </div>
                </div>
                <div className="flex justify-between border-b border-black">
                    <div className="">
                        <p>Lungs</p>
                        <p className='font-semibold'>Congestion in left side of chest</p>
                    </div>
                    <div className="text-end pb-2">
                        <p >FC</p>
                        <p>72/min</p>
                    </div>
                </div>
                <div className="flex justify-between border-b border-black">
                    <div className="">
                        <p>Abdomen</p>
                        <p className='font-semibold'>Pain on right side</p>
                    </div>
                    <div className="text-end pb-2">
                        <p >Poids</p>
                        <p>71.6kg</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <p>Voliurra Status</p>
                        <p className='font-semibold'>S/P</p>
                    </div>
                    <div className="text-end pb-2">
                        <p >Poids</p>
                        <p>71.6kg</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="bg-white shadow-md text-[#003189] p-4 rounded-lg w-[330px] h-[350px] mt-[20px]">
                <div className='flex justify-between font-semibold'>
                    <p>Water</p>
                    <p>Goal: 15/56</p>
                </div>
            </div>
        </section>
       </div>
       <div className="">
       <section>
            <div className="bg-white shadow-md text-[#003189] p-4 rounded-lg w-[850px] space-y-4">
                <div className="font-semibold flex justify-between">
                    <h1>Overview</h1>
                    <p>...</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>Gender</label>
                        <h1 >Male</h1>
                    </div>
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>PhoneNumber</label>
                        <h1>+234 9012345678</h1>
                    </div>
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>Address</label>
                        <h1>Agboju, 2nd school gate</h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>Date of Birth</label>
                        <h1>23/10/2010</h1>
                    </div>
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>City</label>
                        <h1>Lagos</h1>
                    </div>
                    <div className="w-[200px]">
                        <label className='text-[12px] font-bold'>Registered Date</label>
                        <h1>22/09/2020</h1>
                    </div>
                </div>
            </div>
        </section>
       <section>
            <div className="bg-white shadow-md text-[#003189] p-4 rounded-lg w-[850px] mt-[20px] space-y-6">
                <div className="font-semibold flex justify-between">
                    <h1>Reports:</h1>
                    <p>...</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <h1 >Checkup Result</h1>
                    </div>
                    <div className="w-[200px]">
                        <h1>Date- 12 Mon, 2023</h1>
                    </div>
                    <div className="w-[200px] flex items-center gap-2  hover:text-red-500 cursor-pointer">
                        <MdDelete/>
                        <p>delete</p>
                    </div>
                </div>
                
            </div>
        </section>
       </div>
    </div>
  )
}

export default PatientProfile