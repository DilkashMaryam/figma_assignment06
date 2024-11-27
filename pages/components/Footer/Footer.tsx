import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='w-full h-[800px] mt-[100px] gap-[80px] bg-[#FFFFFF] sm:max-md:w-full sm:max-md:h-[1411px] sm:max-md:mt-[100px] sm:max-md:flex-col'>
      <div className='w-[1120px] h-[82px] justify-between flex sm:max-md:w-full sm:max-md:h-[91px] sm:max-md:gap-16 sm:max-md:flex-col'>
        <div className='w-[500px] h-[51px] ml-28 mt-40 sm:max-md:w-full sm:max-md:h-[91px] sm:max-md:gap-16 sm:max-md:ml-9'>
            <h1 className='w-[500px] h-[27px] font-Roboto font-semibold text-[18px] sm:max-md:w-full sm:max-md:h-[27px] sm:max-md:text-[24px] sm:max-md:ml-56'>Subscribe to our newsletter</h1>
            <p className='w-[500px] h-[24px] font-Roboto font-normal text-[16px] sm:max-md:w-full sm:max-md:h-[48px] sm:max-md:text-center sm:max-md:pl-10 sm:max-md:text-[20px] sm:max-md:pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='w-[400px] h-[82px] mt-[150px] ml-[250px] sm:max-md:w-full sm:max-md:h-[146px] sm:max-md:gap-16 sm:max-md:ml-5'>
            <div className='w-[400px] h-[48px] sm:max-md:w-full sm:max-md:h-[112px]'>
                <input type="email" name="email" id="email" placeholder='Enter your email' 
                className='w-[265px] h-[48px] rounded border-[1px] border-[#000000] p-5 gap-8 sm:max-md:w-full sm:max-md:h-[48px]'/>
                <button className='w-[119px] h-[48px] ml-[10px] rounded border-[1px] font-Roboto font-normal text-[16px] text-[#000000] border-[#000000] sm:max-md:w-full sm:max-md:h-[48px] sm:max-md:ml-0 sm:max-md:mt-3'>Subscribe</button>
                <p className='w-[400px] h-[18px] font-Roboto font-normal text-[12px] mt-2 sm:max-md:w-full sm:max-md:h-[18px] sm:max-md:text-[12px] sm:max-md:ml-52'>By subscribing you agree to with our 
                <a href="#" className='w-[400px] h-[18px] font-Roboto font-normal text-[12px] mt-2 sm:ax-md:w-full sm:max-md:h-[18px] sm:max-md:text-[12px] underline'> Privacy Policy</a></p>
            </div>
        </div>
      </div>
      <div className='w-[1120px] h-[225px] flex gap-[40px] mt-[300px] ml-32 sm:max-md:mt-[600px] sm:max-md:flex-col sm:max-md:w-full sm:max-md:h-[811px] sm:max-md:pl-28'>
          <div className='w-[250px] h-[40px] flex sm:max-md:ml-8'>
            <Image src="/images/Frame 1.png" alt='logo' width={32.58} height={30.38}></Image>
            <h1 className='w-[90px] h-[30px] fontRoboto ml-4 font-bold text-[25.07px]'>Ddsgnr</h1>
          </div>
          <div className='w-[250px] h-[225px]'>
            <h1 className='w-[250px] h-[24px] font-Roboto font-semibold text-[16px] sm:max-md:text-center text-center'>Courses</h1>
            <ul className='w-[250px] h-[185px] pt-0 sm:max-md:text-center text-center'>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Business</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Development</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8 '>Technology</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Design</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Programming</li>
            </ul>
          </div>
          <div className='w-[250px] h-[225px] gap-[16px]'>
            <h1 className='w-[250px] h-[24px] font-Roboto font-semibold text-[16px] sm:max-md:text-center text-center'>Resources</h1>
            <ul className='w-[250px] h-[185px] pt-0 sm:max-md:text-center text-center'>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Career</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Resume</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8 '>Learning</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Interview Preparation</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Jobs</li>
            </ul>
          </div>
          <div className='w-[250px] h-[225px] gap-[16px]'>
            <h1 className='w-[250px] h-[24px] font-Roboto font-semibold text-[16px] sm:max-md:text-center text-center'>About Us</h1>
            <ul className='w-[250px] h-[185px] pt-0 sm:max-md:text-center text-center'>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Contact</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Help/Support</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8 '>FAQ</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Terms and Conditions</li>
                <li className='font-Roboto font-normal text-[14px] w-[250px] h-[21px] pt-8'>Partners</li>
            </ul>
          </div>
      </div>
      <div className="w-full bg-[#FFFFFF] mt-[100px] sm:max-md:mt-[20px] sm:max-md:w-full m:max-md:h-[147px] sm:max-md:gap-32">
  <hr className="w-[1120px] h-1 bg-[#000000] mt-20 ml-28 sm:max-md:ml-3 sm:max-md:w-full"/>
  <div className="w-full flex justify-between items-center mt-8 px-28 sm:max-md:flex-col sm:max-md:w-full sm:max-md:h-[114px]">
    <div className='flex gap-4 items-center sm:max-md:flex-col sm:max-md:gap-6'>
      <span className="font-Roboto font-normal text-[14px] sm:max-md:w-full sm:max-md:h-[21px] sm:max-md:text-[12px] sm:max-md:text-center">2023 Ddsgnr. All rights reserved.</span>
     <div className=' max-md:w-[345px] sm:max-md:h-[21px] sm:max-md:text-center'>
     <span className="font-Roboto font-normal text-[14px] underline">Privacy Policy</span>
      <span className="font-Roboto font-normal text-[14px] underline sm:max-md:ml-5 lg:ml-4">Terms of Service</span>
      <span className="font-Roboto font-normal text-[14px] underline sm:max-md:ml-5 lg:ml-4">Cookies Settings</span>
      </div>
    </div>
    <div className="flex gap-4 items-center sm:max-md:mt-5">
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
