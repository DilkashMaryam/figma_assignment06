import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Team2 = () => {
  return (
    <div className='w-full h-[995px] mt-[10px] gap-[80px] bg-[#F7F7F7] sm:max-md:mt-[2200px] sm:max-md:w-full sm:max-md:h-[1300px]'>
      <div className='w-full h-[109px] gap-[16px] pt-[100px] sm:max-md:w-full sm:max-md:h-auto'>
        <h1 className='font-Roboto font-bold text-[48px] ml-[550px] sm:max-md:h-[42px] sm:max-md:text-[40px] sm:max-md:ml-10 sm:max-md:text-center'>Our team</h1>
        <p className='font-Roboto font-normal text-[18px] ml-[450px] sm:max-md:h-[54px] sm:max-md:text-[22px] sm:max-md:ml-10 sm:max-md:mt-6 sm:max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='w-[1280px] h-[300px] gap-[96px] mt-52 flex sm:max-md:flex-col sm:max-md:w-full sm:max-md:h-[723px] sm:max-md:items-center'>
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
      <div className='w-[1280px] h-[350px] gap-[96px] flex sm:max-md:hidden'>
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
        <div className='w-[394px] h-[209px] gap-[24px] sm:max-md:hidden'>
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
        <div className='w-[394px] h-[209px] gap-[24px] sm:max-md:hidden '>
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
      <button className='lg:hidden sm:max-md:font-Roboto sm:max-md:font-normal sm:max-md:text-[20px] sm:max-md:mt-24 sm:max-md:rounded sm:max-md:border-[1px] sm:max-md:border-[#000000] sm:max-md:p-2 sm:max-md:w-[89px] sm:max-md:h-[40px] sm:max-md:ml-72'>View All</button>
    </div>
  )
}

export default Team2
