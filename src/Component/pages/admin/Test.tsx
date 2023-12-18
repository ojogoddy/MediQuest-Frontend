import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"

const Test:React.FC = () => {
  return (
    <div className="bg-white text-[#003189] shadow-md p-3 rounded-lg w-[100%]">
       <div className="flex items-center justify-between">
        <div className="text-[20px] font-semibold">Test List</div>
            <div className="flex items-center gap-2 font-medium">
                <p className='bg-[#003189] text-white px-4 py-1 rounded-md cursor-pointer'>Add Test</p>
                <p className='bg-[#003189] text-white px-4 py-1 rounded-md cursor-pointer'>Edit Test</p>
            </div>
       </div>
       <div className=' mt-4'>
			<table className='w-full text-sm text-left  '>
				<thead className='text-xs  uppercase '>
					<tr className='border-b border-gray-300'>
						<th scope='col' className='p-4'>
							<div className='flex items-center justify-center'>
								 <p>#</p>
								
							</div>
						</th>
						<th scope='col' className='px-6 py-3 '>
							Test Name
						</th>
						<th scope='col' className='px-4 py-3 '>
							Department
						</th>
						<th scope='col' className='px-4 py-3 '>
							Description
						</th>
						<th scope='col' className='px-4 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3 '>
							Action
						</th>
						<th scope='col' className='px-6 py-3 '>
							Status
						</th>
					</tr>
				</thead>
				<tbody>			
        <tr 
		className='border-b border-gray-300 '>
						<td className='w-4 p-4 '>
							<div className='flex items-center'>
								<input
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 
                                    rounded  '
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</td>
						<td scope='row'className='px-6 py-4'>Pregnancy</td>
						<td className='px-6 py-4'>Cardiology</td>
						<td className='px-6 py-4 '>Pregnancy</td>
						<td className='px-6 py-4 '>Pregnancy</td>
						<td className='px-6 py-4 '>test</td>
						<td className='px-6 py-4 text-[#00DBDE]'>
                            <button className=' w-full h-7 bg-[#E5FBF9]'>Active</button>
                        </td>
                        <td className='px-6 py-4 '> 
                            <div className="bg-gray-200 py-1 w-8 flex items-center justify-center text-[20px] rounded-md hover:text-blue-400 hover:animate-pulse ">
                                <BsThreeDotsVertical/>
                            </div>
                        </td>
						
					</tr>

					<tr className=' border-b border-gray-300'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                    rounded '/>
							</div>
						</td>
						<td scope='row' className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4'>Cardiology</td>
						<td className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4 '>07/05/2023</td>
						<td className='px-6 py-4 '>ECG</td>
						<td className='px-6 py-4 text-[#FF01A2]'>
                        <button className=' w-full h-7 bg-[#FFE5F6] rounded-md text-center'>Inactive</button>
                        </td>
						<td className='px-6 py-4'>
                        <div className="bg-gray-200 py-1 w-8 flex items-center justify-center text-[20px] rounded-md hover:text-blue-400 hover:animate-pulse">
                                <BsThreeDotsVertical/>
                            </div>
                        </td>
					</tr>
					<tr className=' border-b border-gray-300'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                    rounded '/>
							</div>
						</td>
						<td scope='row' className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4'>Cardiology</td>
						<td className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4 '>07/05/2023</td>
						<td className='px-6 py-4 '>ECG</td>
						<td className='px-6 py-4 text-[#FF01A2]'>
                        <button className=' w-full h-7 bg-[#FFE5F6] rounded-md text-center'>Inactive</button>
                        </td>
						<td className='px-6 py-4'>
                        <div className="bg-gray-200 py-1 w-8 flex items-center justify-center text-[20px] rounded-md hover:text-blue-400 hover:animate-pulse">
                                <BsThreeDotsVertical/>
                            </div>
                        </td>
					</tr>
					<tr className=' border-b border-gray-300'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                    rounded '/>
							</div>
						</td>
						<td scope='row' className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4'>Cardiology</td>
						<td className='px-6 py-4 '>Mp/Widal</td>
						<td className='px-6 py-4 '>07/05/2023</td>
						<td className='px-6 py-4 '>ECG</td>
						<td className='px-6 py-4 text-[#FF01A2]'>
                        <button className=' w-full h-7 bg-[#FFE5F6] rounded-md text-center'>Inactive</button>
                        </td>
						<td className='px-6 py-4'>
                        <div className="bg-gray-200 py-1 w-8 flex items-center justify-center text-[20px] rounded-md hover:text-blue-400 hover:animate-pulse">
                                <BsThreeDotsVertical/>
                            </div>
                        </td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
  )
}

export default Test