import React from 'react'

const Logout:React.FC = () => {


  return (
    <div className=' p-4  transition-all duration-300 ease-linear '>
        <div className=' bg-slate-300 rounded-lg flex flex-col items-center m-auto justify-center w-[500px] h-[500px] space-y-10'>
            <h1 className='text-3xl font-bold'>Logout?</h1>
            <div className=" flex flex-col space-y-4">
            <button className='bg-black text-white border border-black  w-[250px] h-[50px] rounded-[20px]'>Yes</button>
            <button className='bg-transparent border border-black text-black w-[250px] h-[50px] rounded-[20px]'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Logout