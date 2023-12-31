import React, { useEffect, useState } from 'react'
import { FaAngleRight} from 'react-icons/fa'
import { MdDelete, MdMan } from 'react-icons/md'

interface UserData {
	userName: string,
	role: string,
	email: string,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	address: string,
	dateOfBirth: string,
	gender: string,
	test: string,
	date: string,
	id: string
}
const AdminDashBoard:React.FC = () => {
	const [data, setData] =useState<Array<UserData>>([])
	const userDataString = localStorage.getItem("userData")
    const userData = userDataString ? JSON.parse(userDataString): []
	console.log("Current data state:", data);
	const RemoveContact = (id: string) => {
		const filtered = data.filter((el:any) => el.id !== id);
		setData(filtered);
		localStorage.setItem("userData", JSON.stringify(filtered))
	};
	

  return (
    <div>
      <div className=' flex gap-5 '>
        
        <div className="bg-white shadow-md text-[#003189] p-3 rounded-lg w-[100%]">
            <div className="flex items-center gap-3">
            <div className="bg-gray-200 h-[55px] w-[55px] rounded-lg text-[50px]">  <MdMan/></div>
                <h1 className=''>Total Doctors</h1>
            </div>
            <div className="space-y-2">
            <h1 className='font-semibold text-center text-[30px]'>300k</h1>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">30% last Month</p>
              <div className="bg-gray-200 p-[6px] rounded-full text-[18px]">
                <FaAngleRight/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md text-[#003189] p-3 rounded-lg w-[100%]">
            <div className="flex items-center gap-3">
            <div className="bg-gray-200 h-[55px] w-[55px] rounded-lg text-[50px]">  <MdMan/></div>
                <h1 className=''>Total Patients</h1>
            </div>
            <div className="space-y-2">
            <h1 className='font-semibold text-center text-[30px]'>1,200k</h1>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">25% last Month</p>
              <div className="bg-gray-200 p-[6px] rounded-full text-[18px]">
                <FaAngleRight/>
              </div>
            </div>
          </div>
        </div>
    
    
        <div className="bg-white shadow-md text-[#003189] p-3 rounded-lg w-[100%]">
            <div className="flex items-center gap-3"> 
               
                <div className="bg-gray-200 h-[55px] w-[55px] rounded-lg text-[50px]">  <MdMan/></div>
                <h1 className=''>Total Appointments</h1>
            </div>
            <div className="space-y-2">
            <h1 className='font-semibold text-center text-[30px]'>600k</h1>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">20% last Month</p>
              <div className="bg-gray-200 p-[6px] rounded-full text-[18px]">
                <FaAngleRight/>
              </div>
            </div>
          </div>
        </div>
    
    
        <div className="bg-white shadow-md text-[#003189] p-3 rounded-lg w-[100%]">
            <div className="flex items-center gap-3">
            <div className="bg-gray-200 h-[55px] w-[55px] rounded-lg text-[50px]">  <MdMan/></div>
                <h1 className=''>Total Earnings</h1>
            </div>
            <div className="space-y-2">
            <h1 className='font-semibold text-center text-[30px]'>$1,000</h1>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">40% last Month</p>
              <div className="bg-gray-200 p-[6px] rounded-full text-[18px]">
                <FaAngleRight/>
              </div>
            </div>
          </div>
        </div>
    
      </div>

      <div className=" bg-white shadow-md text-[#003189] p-3 mb-5 rounded-lg w-[100%] my-5">
        <div className="flex justify-between">
          <h1 className="font-semibold">All Patients</h1>
          <h1 className=" text-[#003189] font-semibold">See All</h1>
        </div>
        <div className=' '>
			<table className='w-full text-sm text-left text-[#003189] '>
				<thead className='text-xs border-b text-[#003189] uppercase '>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center justify-center'>
								 <p>#</p>
								
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Patient Name
						</th>
						<th scope='col' className='px-4 py-3 '>
							Gender
						</th>
						<th scope='col' className='px-4 py-3'>
							Age
						</th>
						<th scope='col' className='px-4 py-3'>
							Booked Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Type
						</th>
						<th scope='col' className='px-6 py-3'>
							Status
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{userData && (
						
        <tr 
		key={userData.id}
						className='text-[#003189] border-b'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id={`checkbox-table-search-${userData.id}`}
									type='checkbox'
									className='w-4 h-4 text-[#003189]  '
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</td>
						<th
							scope='row'
							className='px-6 py-4 font-bold  whitespace-nowrap '>
							{userData.userName}
						</th>
						<td className='px-6 py-4'>{userData.gender}</td>
						<td className='px-6 py-4 '>{userData.phoneNumber}</td>
						<td className='px-6 py-4 '>06-Dec-2023</td>
						<td className='px-6 py-4 '>{userData.test}</td>
						<td className='px-6 py-4 text-[#22c55e]'>{userData.role}</td>
						<td className='px-6 py-4 text-[20px]'>
							
							<button className='' onClick={() => {
								RemoveContact(userData.id);
							}}>
								<MdDelete/>
							</button>
							
						</td>
					</tr>
					)
}

					
    
				</tbody>
			</table>
		</div>
      </div>

    </div>
  )
}

export default AdminDashBoard