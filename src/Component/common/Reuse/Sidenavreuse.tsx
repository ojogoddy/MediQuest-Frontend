import React from 'react'

interface Iprops{
    text:string,
    icon:any
}

const Sidenavreuse:React.FC<Iprops> = ({text,icon}) => {
  return (
    <div>
         <div className='flex sm:gap-6 md:gap-10 lg:gap-12 mb-9  sm:mb-6  xl:gap-14 xl:mb-14 2xl:gap-20 2xl:mb-40'>
        <div className='text-[#1F1F1F] 2xl:text-xs sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[24px] 2xl:text-[20px]'>{icon}</div>
        <div className='text-[#1F1F1F] 2xl:font-semibold sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-sm xl:font-bold 2xl:text-[20px]'>{text}</div>

    </div>
    </div>
  )
}

export default Sidenavreuse