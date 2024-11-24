import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Team2 = () => {
  return (
    <div className='w-full h-[995px] mt-[10px] gap-[80px] bg-[#F7F7F7] max-md:mt-[1700px] max-md:w-full max-md:h-[1300px]'>
      <div className='w-full h-[109px] gap-[16px] pt-[100px] max-md:w-full max-md:h-auto max-md:text-center'>
        <h1 className='font-Roboto font-bold text-[48px] ml-[550px] max-md:h-[42px] max-md:text-[32px] max-md:ml-10'>Our team</h1>
        <p className='font-Roboto font-normal text-[18px] ml-[450px] max-md:h-[54px] max-md:text-[24px] max-md:ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='w-[1280px] h-[300px] gap-[96px] mt-52 flex max-md:flex-col max-md:w-full max-md:h-[723px] max-md:items-center'>
        <div className='w-[394px] h-[209px] gap-[24px]'> 
          <Image src="/images/team1.png" alt="pic1" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-32'>James Nduku</h1>
            <p className='font-Roboto font-normal text-[18px] ml-28'>Marketing Coordinator</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
        <div className='w-[394px] h-[209px] gap-[24px] '>
          <Image src="/images/team2.png" alt="pic2" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-24'>Joseph Munyambu</h1>
            <p className='font-Roboto font-normal text-[18px] ml-28'>Nursing Assistant</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
        <div className='w-[394px] h-[209px] gap-[24px] '>
          <Image src="/images/team3.png" alt="pic3" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-24'>Joseph Ngumbau</h1>
            <p className='font-Roboto font-normal text-[18px] ml-28'>Medical Assistant</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
      </div>
      <div className='w-[1280px] h-[350px] gap-[96px] flex max-md:hidden'>
        <div className='w-[394px] h-[209px] gap-[24px]'>
          <Image src="/images/team4.png" alt="pic4" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-28'>Erick Kipkemboi</h1>
            <p className='font-Roboto font-normal text-[18px] ml-32'>Web Designer</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
        <div className='w-[394px] h-[209px] gap-[24px] max-md:hidden'>
          <Image src="/images/team5.png" alt="pic5" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-28'>Stephen Kerubo</h1>
            <p className='font-Roboto font-normal text-[18px] ml-28'>President of Sales</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
        <div className='w-[394px] h-[209px] gap-[24px] max-md:hidden '>
          <Image src="/images/team6.png" alt="pic6" width={80} height={80} className='ml-36'></Image>
          <div className='w-[394px] h-[57px] gap-[16px] mt-5'>
            <h1 className='font-Roboto font-semibold text-[20px] ml-32'>John Leboo</h1>
            <p className='font-Roboto font-normal text-[18px] ml-32'>Dog Trainer</p>
          </div>
        <div className='flex gap-5 ml-36 mt-4'>
            <FaLinkedin />
            <FaTwitter />
            <FaDribbble />
        </div>
        </div>
      </div>
      <button className='lg:hidden max-md:font-Roboto max-md:font-normal max-md:text-[16px] max-md:mt-24 max-md:rounded max-md:border-[1px] max-md:border-[#000000] max-md:p-2 max-md:w-[89px] max-md:h-[40px] max-md:ml-52'>View All</button>
    </div>
  )
}

export default Team2
