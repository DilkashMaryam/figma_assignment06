import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='flex max-md:flex-col max-md:w-auto max-md:h-auto max-md:[780px]'>
      <div className='mt-[141px] w-[640px] max-md:w-[100%] max-md:[174px] max-md:gap-26 h-[300px] pr-[60px] pl-[80px] gap-[24px]'>
        <h3 className='leading-[67.2px] max-md:text-[42px] max-md:leading-[48px] font-Roboto text-bold max-md:text-bold text-[56px] text-[#000000] max-md:pr-8'>Learn new skills online with ease</h3>
        <p className='font-Roboto text-normal max-md:text-[22px] max-md:leading[27px] text-[18px] ml-0 leading-[27px] w-[500px] h-[54px] max-md:pr-8'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className='max-md:flex max-md:mt-4'>
        <button className='w-[178px] h-[48px] max-md:w-[178px] max-md:h-[48px] max-md:text-[18px] m-5 rounded border-[1px] bg-[#000000] text-white items-center'>Start learning now</button>
        <button className='w-[178px] h-[48px] max-md:w-[164px] max-md:h-[48px] max-md:text-[18px] mt-5 rounded border-[1px] border-[#000000] text-[#000000] items-center'>Explore Courses</button>
        </div>
      </div>
      <div className='flex ml-[200px] max-md:w-full max-md:ml-0'>
        <Image src="/images/banner.jpeg" alt="banner" width={640} height={900} className='max-md:h-auto max-md:w-full'></Image>
      </div>
    </div>
  )
}

export default Hero
