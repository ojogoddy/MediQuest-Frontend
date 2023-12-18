import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"



const Overview:React.FC= () => {
  return (
    <div className="">
          {/* <div className='w-full h-screen mb-6 sm:h-full sm:flex sm:flex-col md:fixed md:flex md:h-screen  md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:mb-9 xl:flex xl:flex-col xl:justify-center 2xl:h-screen 2xl:mt-32' >
      
      <div className='   flex gap-16 md:hidden md:mb-0 md:h-[70px] md:w-[500px] md:ml-28 lg:mb-0 lg:h-[60px] justify-between 2xl:mt-10 xl:h-[50px]  2xl:mb-0 '>
        <h1 className='sm:text-[15px] sm:font-bold sm:mt-10 md:text-[24px]  md:font-bold lg:mt-8 lg:text-[28px] lg:font-bold xl:font-bold   xl:text-[32px] xl:mt-4 xl:ml-4 2xl:mt-20 2xl:text-6xl 2xl:font-bold '>Overview</h1>
        <div className='sm:mr-3 sm:mt-5 flex gap-3 mt-12  md:mr-4 md:mt-6 lg:mt-3 xl:mt-0 2xl:mr-1 2xl:pt-10 '>
       <div className=''>
       <span className='sm:text-[8px] md:text-[9px] md:hidden xl:text-[10px] xl:mt-3 '>Today's date</span>
          <h3 className='font-bold sm:text-[9px] md:mt-6 2xl:mt-2 xl:text-[12px] xl:mt-3'>2023-06-06</h3>
       </div>
          <div className='2xl:w-[50px] 2xl:h-[50px] xl:w-[50px] xl:h-[50px]  2xl:text-[18px] 2xl:mt-2 sm:w-[30px] sm:h-[30px] sm:hidden bg-[#CCCCCC] rounded-[5px]  sm:p-2 p-4 md:h-[30px] md:w-[30px]  md:p-2 md:mt-4' >
            {<MdOutlineToday/>}
            </div>
         </div>
          
      </div> */}
      
      <div className='sm:flex sm:justify-center'>
      <div className='bg-white  text-[#1F1F1F]  h-[300px] mb-10 rounded-[12px] p-[20px] sm:px-4  sm:w-[200px] sm:min-h-[300px]  md:h-[250px]   md:w-[500px] md:mb-2 md:mt-2 lg:min-h-[370px] lg:mb-12 xl:min-h-[300px] 2xl:min-h-[400px] 2xl:w-full 2xl:mb-10  '>
        <h2 className='sm:text-[12px] xl:text-[10px] 2xl:text-2xl'>Welcome!</h2>
        <h1 className='font-bold mb-6 text-3xl sm:mb-2 sm:text-[15px] md:text-[15px] lg:text-[18px] 2xl:text-4xl'>Test Patient</h1>
        <p className='font-semibold text-[7px]  sm:font-bold md:text-[10px] lg:text-[14px]  xl:text-[16px] 2xl:text-2xl  '>Haven't any idea about labs? no problem lets jumping to "All Doctor" section or "sessions" 
        Track your past and future appointments history.
        Also find out the expected appointment time</p>
      
        <div className='mt-4'>
        <span className='font-bold sm:text-[10px] md:text-[12px] xl:font-extrabold xl:text-[18px] 2xl:text-2xl 2xl:font-bold'>Channel a lab here</span>
        <div className='mt-6 gap-10 flex'>
        
        <div className=' sm:flex flex-col flex justify-between'>

          <div className="absolute p-3 sm:text-[9px] sm:hidden md:text-[8px] 2xl:text-[20px] 2xl:mt-5">
          {<AiOutlineSearch/>}
          </div>

          <div className='xl:flex xl:gap-10 md:flex md:gap-6 '>
          <input className=' bg-white  sm:h-[30px] sm:w-[170px] sm:text-[6px] sm:pl-6  w-[200px]  h-[40px] text-xs pl-10 rounded-[5px] md:w-[300px] md:h-[30px] md:text-[8px] lg:w-[620px] xl:w-[500px] xl:text-sm 2xl:text-sm 2xl:h-[60px] 2xl:w-[980px] ' placeholder='Search lab and will we find the session available'/>
         
         <button className='sm:h-[30px] sm:w-[170px] sm:text-[7px] h-[40px] w-[140px] bg-[#0a95da] text-white text-xs rounded-[5px] sm:rounded-[5px] sm:ml-0 sm:mt-3  md:h-[30px]  lg:w-[200px] lg:h-[40px] lg:mt-5 lg:ml-44   2xl:h-[50px] 2xl:mt-5 2xl:ml-20'>Search</button>
          </div>
        


        </div>
    
        </div>
        </div>
        
      </div>
      </div>

            
            <div className=" flex flex-col items-center justify-center xl:mb-0 sm:mt-0 md:mt-0 md:h-[300px] lg:h-[400px]  ">
            
              <h2 className='text-[#1F1F1F] font-bold text-lg sm:text-[10px] md:text-[10px] md:ml-10 md:mt-4 sm:mr-4 sm:font-extrabold lg:font-extrabold lg:text-[24px] '>Your Upcoming Events</h2>  
            
        
            <div className='bg-white border text-[#CCCCCC] rounded-[10px] gap-10  sm:gap-8 min-h-[250px] sm:mr-2 sm:mb-4 sm:w-[200px] flex flex-col   md:w-[500px] md:h-[300px] md:mb-10  md:p-8 lg:min-h-[380px] lg:w-full lg:p-10  xl:w-full xl:h-[300px] 2xl:w-full 2xl:h-[350px] 2xl:pt-2 2xl:mr-4 '>
              <div className='flex p-6 justify-between items-center sm:flex sm:justify-evenly sm:gap-5 lg:mt-8 lg:flex lg:gap-14'>
              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px] '>
                <h3 className=''>Appointment Number</h3>
              </div>

              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px]'>
                <h3>Session</h3>
              </div>

              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px] '>
                <h3>Lab</h3>
              </div>

              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px] '>
                <h3 className=''>Scheduled data and time</h3>
              </div>
              </div>
              
              <hr className='text-[#4EB2E4]  h-5 2xl:mt-12 ' />
              <div className='flex  p-8 pr-0  justify-between items-center sm:gap-8 '>
              <h3 className='text-[#4EB2E4] font-semibold sm:text-[8px] md:text-[10px] lg:text-[12px]'>1</h3>

              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px]'>
              <h3 className=''>Test Session</h3>
              </div>

              
              <div className='text-[#1F1F1F] sm:text-[8px] md:text-[10px] lg:text-[12px]'>
              <h3 className=''>Test Lab</h3>
              </div>

              <div className='text-[#1F1F1F] sm:text-[8px] sm:mr-5 md:text-[10px] md:mr-4 lg:text-[12px] xl:mr-4 2xl:mr-6'>
              <h3>2023-01-01 <br/>18:00</h3>
              </div>

              </div>
              

            </div>
            
              
            </div>

  </div> 
      

    
    
  )
}

export default Overview

