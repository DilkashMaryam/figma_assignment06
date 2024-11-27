import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

const Course = () => {
  return (
    <div className='w-full h-[1742px] bg-[#FFFFFF] sm:max-md:w-full sm:max-md:h-auto sm:max-md:mt-[150px]'>
      <div className='w-[768px] h-[118px] gap-[16px] ml-[550px] sm:max-md:ml-28 sm:max-md:w-full sm:max-md:h-[93px] sm:max-md:gap-[16px] sm:max-md:items-center'>
        <h1 className='font-Roboto font-bold text-[56px] leading-[67.2px] sm:max-md:h-[42px] sm:max:md-text-[32px] sm:max-md:ml-28'>Courses</h1>
        <p className='font-Roboto font-normal test-[18px] leading-[27px] mt-[5px] sm:max-md:h-[27px] sm:max-md:text-[24px] sm:max-md:pt-8 sm:max-md:ml-16'>Your Ultimate Guide to learning</p>
      </div>
      <div className='w-full h-[1340px] gap-[64px] sm:max-md:w-full sm:max-md:h-auto'>
        <div className='flex gap-[30px] ml-[500px] mt-[50px] sm:max-md:w-full sm:max-md:h-[40px] sm:max-md:ml-24'>
            <h1 className='font-Roboto font-normal text-[16px] border-b-[1px] border-black sm:max-md:w-[87px] sm:max-md:h-[40px] sm:max-md:pl-2 sm:max-md:text-[26px]'>Popular</h1>
            <h1 className='font-Roboto font-normal text-[16px] sm:max-md:text-[26px]'>Recommended</h1>
            <h1 className='font-Roboto font-normal text-[16px] sm:max-md:text-[26px]'>Best Price</h1>
        </div>
        <div className='w-full h-[534px] gap-[32px] mt-[50px] sm:max-md:w-full'>
           <div className='flex sm:max-md:flex-col'>
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] sm:max-md:w-full sm:max-md:h-[800px] sm:max-md:m-9'> 
                <Image src="/images/course1.jpeg" alt="course1" width={416} height={300} className='sm:max-md:w-full'></Image>
                    <div className='flex justify-between'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3 sm:max-md:text-[18px]'>Design</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[310px] sm:max-md:pr-5  max-md:text-[18px]'>
                    <FaStar className='text-[#D9D9D9] sm:max-md:text-[18px]' /> 5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] sm:max-md:ml-5 sm:max-md:text-[32px] sm:max-md:pt-6 ml-3'>UX/UI Design 201</h5>
                    <p className='font-Roboto font-normal text-[16px] sm:max-md:ml-5 sm:max-md:w-[350px] sm:max-md:h-[72px] sm:max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 flex sm:max-md:ml-5 '>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] sm:max-md:w-full sm:max-md:h-[800px] sm:max-md:ml-9 sm:max-md:mt-5'> 
                <Image src="/images/course2.jpeg" alt="course2" width={416} height={300} className='sm:max-md:w-full'></Image>
                   <div className='flex justify-between'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] sm:max-md:text-[18px] ml-3'>Programmimg</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[260px] sm:max-md:pr-5 sm:max-md:text-[18px]'>
                    <FaStar className='text-[#D9D9D9] sm:max-md:text-[18px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] sm:max-md:ml-5 sm:max-md:text-[32px] sm:max-md:pt-6 ml-3'>Introduction to Python</h5>
                    <p className='font-Roboto font-normal text-[16px] sm:max-md:ml-5 sm:max-md:w-[350px] sm:max-md:h-[72px] sm:max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex sm:max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] sm:max-md:w-full sm:max-md:h-[800px] sm:max-md:ml-9 sm:max-md:mt-5'> 
                <Image src="/images/course3.jpeg" alt="course3" width={416} height={300} className='sm:max-md:w-full'></Image>
                   <div className='flex justify-between'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3 sm:max-md:text-[18px]'>Business</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[290px] sm:max-md:pr-5 sm:max-md:text-[18px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[18px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] sm:max-md:ml-5 sm:max-md:text-[32px] sm:max-md:pt-6 ml-3'>Data Analysis for Beginners</h5>
                    <p className='font-Roboto font-normal text-[16px] sm:max-md:ml-5 sm:max-md:w-[350px] sm:max-md:h-[72px] sm:max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex sm:max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
           </div>
           <div className='flex mt-[10px] max-md:flex-col sm:max-md:hidden'>
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px]'> 
                <Image src="/images/course4.jpeg" alt="course4" width={416} height={300}></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3'>Art</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px]'>
                    <FaStar className='text-[#D9D9D9]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] '>Art Specialization</h5>
                    <p className='font-Roboto font-normal text-[16px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 flex '>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px]'> 
                <Image src="/images/course5.jpeg" alt="course5" width={416} height={300} ></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3'>Law</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px] '>
                    <FaStar className='text-[#D9D9D9] ' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] ml-3'>Rule of Law</h5>
                    <p className='font-Roboto font-normal text-[16px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex '>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] '> 
                <Image src="/images/course6.jpeg" alt="course6" width={416} height={300} ></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] ml-3 leading-[21px]'>Tech</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px]'>
                    <FaStar className='text-[#D9D9D9] ' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] ml-3'>Introduction to webflow</h5>
                    <p className='font-Roboto font-normal text-[16px]  ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex '>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
           </div>
           <button className='font-Roboto font-normal text-[16px] border-[1px] rounded border-[#000000] p-2 mt-[100px] ml-[570px] sm:max-md:ml-72 sm:max-md:text-[24px]'>View All Courses</button>
        </div>
      </div>
    </div>
  )
}

export default Course
