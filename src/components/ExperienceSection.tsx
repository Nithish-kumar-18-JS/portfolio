'use client'

import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
   <div className='flex items-center justify-center flex-col'>
     <h1 className='text-[#ffffff] text-[40px]'>Experience</h1>
     {/* Experience Timeline using gsap*/}
     <div className='mt-10 w-full h-[700px] relative '>
        {/* starting time line 1 */}
        <div className='absolute bottom-0 left-0 w-[300] text-[18px] pl-30'>
            <div className='w-[12px] h-[12px]'></div>
            <p>2020 - 2021 - Started Learning MERN Stack Completed Udemy Course</p>
        </div>
     </div>
   </div>
  );
}

export default ExperienceSection;