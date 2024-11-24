import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

const Course = () => {
  return (
    <div className='w-full h-[1742px] bg-[#FFFFFF] max-md:w-full max-md:h-auto max-md:mt-[100px]'>
      <div className='w-[768px] h-[118px] gap-[16px] ml-[550px] max-md:ml-28 max-md:w-auto max-md:h-[93px] max-md:gap-[16px] max-md:items-center'>
        <h1 className='font-Roboto font-bold text-[56px] leading-[67.2px] max-md:h-[42px] max:md-text-[32px] max-md:ml-[22px]'>Courses</h1>
        <p className='font-Roboto font-normal test-[18px] leading-[27px] mt-[5px] max-md:h-[27px] max-md:text-[16px] max-md:pt-8 max-md:ml-8'>Your Ultimate Guide to learning</p>
      </div>
      <div className='w-full h-[1340px] gap-[64px] max-md:w-full max-md:h-auto'>
        <div className='flex gap-[30px] ml-[500px] mt-[50px] max-md:w-full max-md:h-[40px] max-md:ml-20'>
            <h1 className='font-Roboto font-normal text-[16px] border-b-[1px] border-black max-md:w-[87px] max-md:h-[40px] max-md:pl-4'>Popular</h1>
            <h1 className='font-Roboto font-normal text-[16px]'>Recommended</h1>
            <h1 className='font-Roboto font-normal text-[16px]'>Best Price</h1>
        </div>
        <div className='w-full h-[534px] gap-[32px] mt-[50px] max-md:w-full'>
           <div className='flex max-md:flex-col'>
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] max-md:w-full max-md:h-[650px] max-md:ml-6'> 
                <Image src="/images/course1.jpeg" alt="course1" width={416} height={300} className='max-md:w-auto'></Image>
                    <div className='flex justify-between'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3'>Design</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[310px] max-md:ml-[270px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>UX/UI Design 201</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 flex max-md:ml-5 '>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] max-md:w-full max-md:h-[650px] max-md:ml-6 max-md:mt-5'> 
                <Image src="/images/course2.jpeg" alt="course2" width={416} height={300} className='max-md:w-auto'></Image>
                   <div className='flex justify-between'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] max-md:ml-5 ml-3'>Programmimg</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[260px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>Introduction to Python</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] max-md:w-full max-md:h-[650px] max-md:mt-5'> 
                <Image src="/images/course3.jpeg" alt="course3" width={416} height={300} className='max-md:w-full'></Image>
                   <div className='flex justify-center'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] ml-3 max-md:mr-32'>Business</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[290px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>Data Analysis for Beginners</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
           </div>
           <div className='flex mt-[10px] max-md:flex-col max-md:hidden'>
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] max-md:w-[380px] max-md:h-[550px] max-md:ml-6 max-md:mt-5'> 
                <Image src="/images/course4.jpeg" alt="course4" width={416} height={300} className='max-md:w-[380px]'></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] max-md:ml-5 ml-3'>Art</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px] max-md:ml-[290px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>Art Specialization</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 flex max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] max-md:w-[380px] max-md:h-[550px] max-md:ml-6 max-md:mt-5'> 
                <Image src="/images/course5.jpeg" alt="course5" width={416} height={300} className='max-md:w-[380px]'></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] leading-[21px] max-md:ml-5 ml-3'>Law</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px] max-md:ml-[290px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>Rule of Law</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
                <div className='bg-[#F7F7F7] w-[416px] h-[534px] rounded gap-[24px] ml-[30px] max-md:w-[380px] max-md:h-[550px] max-md:ml-6 max-md:mt-5'> 
                <Image src="/images/course6.jpeg" alt="course6" width={416} height={300} className='max-md:w-[380px]'></Image>
                   <div className='flex'>
                    <span className='font-Roboto font-semibold text-[14px] mt-[10px] ml-3 leading-[21px] max-md:ml-5'>Tech</span>
                    <span className='font-Roboto font-semibold text-[16px] align-right flex mt-[10px] ml-[330px] max-md:ml-[290px] max-md:text-[14px]'>
                    <FaStar className='text-[#D9D9D9] max-md:text-[16px]' />5.0</span>
                    </div>
                    <h5 className='Font-Roboto font-bold text-[24px] max-md:ml-5 max-md:text-[24px] max-md:pt-6 ml-3'>Introduction to webflow</h5>
                    <p className='font-Roboto font-normal text-[16px] max-md:ml-5 max-md:w-[326px] max-md:h-[72px] max-md:text-[18px] ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <div className='w-[382px] h-[40px] gap-[16px] mt-10 ml-[10px] flex max-md:ml-5'>
                    <button className='font-Roboto font-normal text-[16px] border-2 rounded-md border-[#000000] p-2'>Enroll Now</button>
                    <span className='font-Roboto font-medium text-[16px] p-2'>$400</span>
                </div>
                </div> 
           </div>
           <button className='font-Roboto font-normal text-[16px] border-[1px] rounded border-[#000000] p-2 mt-[100px] ml-[570px] max-md:ml-48'>View All Courses</button>
        </div>
      </div>
    </div>
  )
}

export default Course
