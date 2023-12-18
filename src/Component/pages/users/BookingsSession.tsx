import React from 'react'

const BookingsSession:React.FC = () => {
  return (
    <div>
        
        <div className='w-full h-[650px]   bg-white flex flex-col items-center '>
       <div className='mt-10  relative  right-[22%]' >
       <h2 className='text-[#0D3859] ml-6 font-bold'>Test Booking Form</h2>
        <p className='text-[14px] text-[#0D3859] font-medium ml-8'>Please fill out the form below to book for a test</p>
       </div>
        <div className='w-[800px] min-h-[450px] rounded-2xl  border text-[#0D3859] mt-10'>
            <div className='text-[#0D3859]  p-8'>
                <label className=''>FirstName</label>
                
                <input className='w-[280px] shadow-md ml-2 h-[40px] text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="text" placeholder='enter firstname' />
                <label className='ml-6'>LastName</label>
                <input className='w-[280px] h-[40px] shadow-md ml-1 text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="text" placeholder='enter lastname' />
            </div>

            <div className='pt-0 text-[#0D3859] p-8  '>
                <label className=''>Email</label>
                
                <input className='w-[280px] shadow-md ml-4 h-[40px] text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="email" placeholder='example@gmail.com' />
                <label className='ml-6'>PhoneNumber</label>
                <input className='w-[280px] shadow-md h-[40px] ml-1 text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="phonenumber" placeholder='enter a valid phonenumber' />
            </div>
              
            <span className='p-8'>Preferred Appointment Date And Time</span>
            <div className='pt-2 text-[#0D3859] p-8  '>
                <label className=''>Date</label>
                
                <input className='w-[280px] ml-4  shadow-md h-[40px] text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="date" placeholder='example@gmail.com' />
                <label className='ml-6'>Time</label>
                <input className='w-[200px] h-[40px]  shadow-md ml-1 text-[10px] px-6 rounded-[5px] border text-[#0D3859] ' type="time" placeholder='enter a valid phonenumber' />
            </div>


            
            <div className='p-8 pt-0'>
            <span className=''>Test Type</span>
            <select className='w-full shadow-md h-[40px] ml-1 text-[10px] px-6 rounded-[5px] border text-[#0D3859]' >
                <option selected disabled>please select</option>
                <option value="">Malaria Test</option>
                <option value="">Complete Blood Count</option>
                <option value="">Widal Test</option>
                <option value="">Liver Function Test</option>
                <option value="">Hiv/Aids</option>
                <option value="">Hepatitis B</option>
            </select>
            </div>

           <div className='p-8 pt-2'>
           <button className='bg-[#0D3859] h-[34px] text-[10px] text-white w-full rounded-2xl'>Book Now</button>
           </div>

            

        </div>
        
        </div>
    </div>
  )
}

export default BookingsSession