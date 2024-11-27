import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='flex sm:max-md:flex-col sm:max-md:w-[428px] sm:max-md:h-auto sm:max-md:[780px]'>
      <div className='mt-[141px] w-[640px] sm:max-md:w-[428px] sm:max-md:h-[250px] sm:max-md:gap-26 h-[300px] pr-[60px] pl-[80px] gap-[24px] sm:max-md:pl-6'>
        <h3 className='leading-[67.2px] sm:max-md:text-[32px] sm:max-md:leading-[48px] font-Roboto font-bold sm:max-md:font-bold text-[56px] text-[#000000] '>Learn new skills online with ease</h3>
        <p className='font-Roboto font-normal sm:max-md:text-[22px] sm:max-md:leading[27px] text-[18px] ml-0 leading-[27px] w-[500px] h-[54px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className='sm:max-md:flex sm:max-md:mt-4'>
        <button className='w-[178px] h-[48px] sm:max-md:w-[300px] sm:max-md:h-[48px] sm:max-md:p-1 sm:max-md:text-[16px] m-5 rounded border-[1px] bg-[#000000] text-white items-center'>Start learning now</button>
        <button className='w-[178px] h-[48px] sm:max-md:w-[300px] sm:max-md:h-[48px] sm:max-md:p-3 sm:max-md:text-[16px] mt-5 rounded border-[1px] border-[#000000] text-[#000000] items-center'>Explore Courses</button>
        </div>
      </div>
      <div className='flex ml-[200px] sm:max-md:w-full sm:max-md:ml-0'>
        <Image src="/images/banner.jpeg" alt="banner" width={640} height={900} className='sm:max-md:h-auto sm:max-md:w-full'></Image>
      </div>
    </div>
  )
}

export default Hero
