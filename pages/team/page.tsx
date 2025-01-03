import React from 'react'
import Image from 'next/image'

const team = () => {
  return (
    <div className='w-full h-[1049px] bg-[#FFFFFF] sm:max-md:w-full sm:max-md:h-auto'>
      <div className='w-[768px] h-[109px] gap-[357px] mt-[100px] ml-[300px] sm:max-md:w-full sm:max-md:ml-5'>
        <h1 className='font-Roboto font-bold text-[48px] leading-[57.6px] sm:max-md:h-[84px] sm:max-md:text-[56px] sm:max-md:text-center'>Explore Courses By Category</h1>
        <p className='font-Roboto mt-[30px] font-normal text-[18px] leading-[27px] sm:max-md:pt-4 sm:max-md:h-[54px] sm:max-md:text-[32px] sm:max-md:text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>

      <div className='w-full h-[636px] gap-[96px] bg-[#FFFFFF] mt-[100px] sm:max-md:w-[650px] sm:max-md:h-auto sm:max-md:m-10'>
        <div className='w-full h-[132px] gap-[24px] flex text-center pt-[10px] sm:max-md:flex-col  sm:max-md:pt-10'>
            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:w-full sm:max-md:h-auto sm:max-md:mt-8'>
              <Image src="/images/Frame 292.png" alt='pen' width={90} height={90} className='flex-shrink-0 sm:max-md:gap-10 '></Image>
              <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] sm:max-md:text-[28px] leading-[30px] ml-4 font-semibold'>Design & Development</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px] sm:max-md:text-[24px] sm:max-md:mt-4'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:w-full sm:max-md:h-auto sm:max-md:mt-10'>
            <Image src="/images/speaker.png" alt='speaker' width={90} height={90} className='flex-shrink-0 sm:max-md:gap-10'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] sm:max-md:text-[28px] leading-[30px] font-semibold'>Marketing</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px] sm:max-md:text-[24px] sm:max-md:mt-4'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:w-full sm:max-md:h-auto sm:max-md:mt-8'>
            <Image src="/images/arrows.png" alt='speaker' width={90} height={90} className='flex-shrink-0 sm:max-md:gap-10'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] sm:max-md:text-[28px] leading-[30px] font-semibold'>Development</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px] sm:max-md:text-[24px] sm:max-md:mt-4'>50+ Courses Available</p>
              </div>
            </div>
        </div>

        <div className='w-full h-[160px] gap-[24px] flex text-center pt-[30px] sm:max-md:hidden'>
           <div className='w-[410.67px] h-132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center'>
           <Image src="/images/mike.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
           <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Communication</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:hidden'>
            <Image src="/images/link.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Digital Marketing</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:hidden'>
            <Image src="/images/arrows2.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Self Development</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>
        </div>

        <div className='w-full h-[160px] gap-[24px] flex text-center pt-[30px] sm:max-md:hidden'>
           <div className='w-[410.67px] h-132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center'>
           <Image src="/images/bag.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
           <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Business</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:hidden'>
            <Image src="/images/book.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Finance</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>

            <div className='w-[410.67px] h-[132px] rounded p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center sm:max-md:hidden'>
            <Image src="/images/consulting.png" alt='speaker' width={90} height={90} className='flex-shrink-0'></Image>
            <div className='ml-4'>
              <h1 className='font-Roboto text-[20px] leading-[30px] font-semibold'>Consulting</h1>
              <p className='font-Roboto text-[18px] font-normal leading-[27px]'>50+ Courses Available</p>
              </div>
            </div>
        </div>
      </div>

        <button className='w-[155px] h-[48px] rounded border-[1px] gap-8 mt-[50px] ml-[550px] max-md:mt-[450px] sm:max-md:ml-60 sm:max-md:w-[200px] sm:max-md:h-[90px]'>
            <h1 className='w-[120px] h-[24px] text-[#000000] font-Roboto pl-5 text-[12px] sm:max-md:text-[24px] font-normal leading-[24px] sm:max-md:w-[200px] sm:max-md:h-[50px] sm:max-md:p-2'>View All Courses</h1>
            </button>

    </div>
  )
}

export default team
