import React from 'react'
import Image from "next/image"

const logo = () => {
  return (
    <div className='w-full h-[228px] bg-[#F7F7F7] flex items-center sm:max-md:w-[428px] sm:max-md:h-auto sm:max-md:pt-[24px] sm:max-md:flex-col sm:max-md:bg-white'>
        <h5 className='w-[320px] h-[68px] sm:max-md:hidden ml-[10px] font-Roboto text-[24px] font-bold leading-[33.6px] text-[#000000]'>Trusted by 2000+ companies worldwide [social proof to build credibility]</h5>
        <h5 className='w-[320px] h-[68px] sm:max-md:w-[90%] sm:max-md:text-[20px] lg:hidden sm:max-md:mb-[16px] sm:max-md:leading-[27px] ml-[10px] font-Roboto text-[24px] font-bold leading-[33.6px] text-[#000000]'>Trusted by the world's best companies [social proof to build credibility]</h5>
      <div className='w-[880px] h-[56px] sm:max-md:w-full sm:max-md:h-auto sm:max-md:ml-1 sm:max-md:pt-[16px] pt-[8.74px] pb-[8.74px] gap-[19.12px] flex ml-[100px]'>
        <Image src="/images/logo1.png" alt='logo1' width={123.8} height={38.52}></Image>
        <Image src="/images/logo2.png" alt='logo2' width={123.8} height={38.52}></Image>
        <Image src="/images/logo3.png" alt='logo3' width={123.8} height={38.52}></Image>
        <Image src="/images/logo4.png" alt='logo4' width={123.8} height={38.52} className='sm:max-md:hidden'></Image>
        <Image src="/images/logo5.png" alt='logo5' width={123.8} height={38.52} className='sm:max-md:hidden'></Image>
        <Image src="/images/logo6.png" alt='logo6' width={123.8} height={38.52} className='sm:max-md:hidden'></Image>
      </div>
    </div>
  )
}

export default logo
