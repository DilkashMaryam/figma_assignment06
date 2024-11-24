import React from 'react'
import Image from "next/image"

const logo = () => {
  return (
    <div className='w-full h-[228px] bg-[#F7F7F7] flex items-center max-md:w-full max-md:h-auto max-md:pt-[24px] max-md:flex-col max-md:bg-white'>
        <h5 className='w-[320px] h-[68px] max-md:hidden ml-[10px] font-Roboto text-[24px] text-bold leading-[33.6px] text-[#000000]'>Trusted by 2000+ companies worldwide [social proof to build credibility]</h5>
        <h5 className='w-[320px] h-[68px] max-md:w-[90%] max-md:text-[26px] lg:hidden max-md:mb-[16px] max-md:leading-[27px] ml-[10px] font-Roboto text-[24px] text-bold leading-[33.6px] text-[#000000]'>Trusted by the world's best companies [social proof to build credibility]</h5>
      <div className='w-[880px] h-[56px] max-md:w-full max-md:h-auto max-md:pt-[16px] pt-[8.74px] pb-[8.74px] gap-[19.12px] flex ml-[100px]'>
        <Image src="/images/logo1.png" alt='logo1' width={123.8} height={38.52}></Image>
        <Image src="/images/logo2.png" alt='logo2' width={123.8} height={38.52}></Image>
        <Image src="/images/logo3.png" alt='logo3' width={123.8} height={38.52}></Image>
        <Image src="/images/logo4.png" alt='logo4' width={123.8} height={38.52} className='max-md:hidden'></Image>
        <Image src="/images/logo5.png" alt='logo5' width={123.8} height={38.52} className='max-md:hidden'></Image>
        <Image src="/images/logo6.png" alt='logo6' width={123.8} height={38.52} className='max-md:hidden'></Image>
      </div>
    </div>
  )
}

export default logo
