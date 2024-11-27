import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaTimes, FaBars } from "react-icons/fa";
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <div className='w-full h-[54px] sm:max-md:hidden px-[64px] xl:px[64px] bg-[#F7F7F7] items-center flex border-b-2 border-[#000000]'>
           <div className='text-[#000000] font-Roboto text-normal text-[14px] flex gap-2 items-center mt-4 w-[500px]'>
            <p>Phone Number: 956 742 455 678</p>
            <span>|</span>
           <p>Email:info@ddsgnr.com</p>
           </div>
           <div className='w-[150px] h-[100px] flex ml-auto items-center gap-5 cursor-pointer'>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
           </div>
        </div>
        <div className=' w-full h-[72px] mt-[20px] sm:px[64px] sm:max-md:w-full gap-[100px] bg-[#F7F7F7] px-[64px] border-[1px] border-b-[#676767] border-transparent flex justify-between items-center'>
           <div className='w-[130.6px] h-[41px] pt-[29px] pb-[29px] flex items-center '>
           <Image src="/images/Frame 1.png" alt='logo' width={32.58} height={30}></Image>
           <h1 className=' text-[25.07px] pt-3 sm:max-md:text-[25.07px] font-Inter font-bold ml-3 text-[#000000]'>Ddsgnr</h1>
           </div>
           <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
           </div>
            <div className={`${ menuOpen ? 'block' : 'hidden' } md:flex md:static md:flex-row flex-col h-[44px] m-3 gap-[32px] md:gap-8 bg-[#FFFFFF] flex `}>
                <ul className='text-normal text-[#000000] flex-col md:flex-row items-center text-[16px] gap-[30px] sm:max-md:gap-4 lg:p-0 flex'>
                    <li className='border-b-2 border-[#000000] pl-3'>Home</li>
                    <li>Courses</li>
                    <li>Services</li>
                    <li>Achievement</li>
                    <li>About Us</li>
                    <li>Testimonial</li>
                </ul>
                <button className='border-[1px] rounded-lg border-[#000000] w-[100px] flex-col sm:flex-row'>Login</button>
                <button className='bg-[#000000] w-[100px] rounded-lg text-white flex-col sm:flex-row'>Sign Up</button>
            </div>
           </div>
    </div>
  )
}

export default Header
