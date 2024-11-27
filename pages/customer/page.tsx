import React from 'react'
import { FaArrowLeft , FaArrowRight, FaStar } from 'react-icons/fa6'
import Image from 'next/image'

const Customer = () => {
  return (
    <div className='w-full h-[900px] bg-[#F7F7F7] pl-[64px] pt-[112px] sm:max-md:bg-[#FFFFFF] sm:max-md:w-[428px] sm:max-md:h-[681.89px] sm:max-md:mt-[50px] sm:max-md:pl-4'>
      <div className='w-[560px] h-[109px] gap-[24px] sm:max-md:ml-6'>
        <h1 className='lg:hidden sm:max-md:w-full sm:max-md:font-Roboto sm:max-md:font-bold sm:max-md:text-[36px]'>What Our Student Say</h1>
        <h1 className='font-Roboto font-bold text-[48px] sm:max-md:hidden'>Customer testimonials</h1>
        <p className='font-Roboto font-normal text-[18px] pt-[15px] sm:max-md:w-[428px] sm:max-md:text-[22px] sm:max-md:text-center sm:max-md:pr-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[1152x] h-[417.89px] gap-[48px] mt-32 flex sm:max-md:w-full sm:max-md:h-[417.89px]'>
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] sm:max-md:w-[380px] sm:max-md:h-[321.89px] sm:max-md:gap-32 sm:max-md:ml-2'>
            <div className='flex'><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /></div>
            <div className='w-[298.67px] h-215px] gap-24 mt-5'>
                <p className='fonot-Roboto font-normal text-[18px] w-[298.67px] h-[135px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
            </div>
            <div className='w-[50px] h-[56px] gap-5 mt-10 flex'>
                <Image src="/images/team3.png" alt='pic1' width={50} height={50} className='rounded-[50%] border-transparent'></Image>
                <div className='w-[139px] h-[48px] mt-2'>
                    <h1 className='max-md:w-full sm:max-md:h-[24px] sm:max-md:font-Roboto sm:max-md:font-semibold sm:max-md:text-[16px] lg:hidden'>Wade Warren</h1>
                    <h1 className='w-[110px] h-[24px] font-Roboto font-semibold text-[16px] sm:max-md:hidden'>James Nduku</h1>
                    <p className='w-[145px] h-[24px] font-Roboto font-normal text-[16px] sm:max-md:hidden'>Software Developer</p>
                    <p className='sm:max-md:w-[180px] sm:max-md:h-[24px] sm:max-md:font-Roboto sm:max-md:font-normal sm:max-md:text-[16px] lg:hidden'>Position, Company name</p>
            </div>
            </div>
        </div>
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] sm:max-md:hidden'>
            <div className='flex'><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /></div>
            <div className='w-[298.67px] h-215px] gap-24 mt-5'>
                <p className='fonot-Roboto font-normal text-[18px] w-[298.67px] h-[135px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
            </div>
            <div className='w-[50px] h-[56px] gap-5 mt-10 flex'>
                <Image src="/images/team1.png" alt='pic2' width={50} height={50} className='rounded-[50%] border-transparent'></Image>
                <div className='w-[139px] h-[48px] mt-2'>
                    <h1 className='w-[127px] h-[24px] font-Roboto font-semibold text-[16px]'>Erick Kipkemboi</h1>
                    <p className='w-[139px] h-[24px] font-Roboto font-normal text-[16px]'>Scrum Master</p>
            </div>
            </div>
        </div>
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] sm:max-md:hidden'>
            <div className='flex'><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /></div>
            <div className='w-[298.67px] h-215px] gap-24 mt-5'>
                <p className='fonot-Roboto font-normal text-[18px] w-[298.67px] h-[135px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
            </div>
            <div className='w-[50px] h-[56px] gap-5 mt-10 flex'>
                <Image src="/images/team6.png" alt='pic3' width={50} height={50} className='rounded-[50%] border-transparent'></Image>
                <div className='w-[139px] h-[48px] mt-2'>
                    <h1 className='w-[125px] h-[24px] font-Roboto font-semibold text-[16px]'>Stephen Kerubo</h1>
                    <p className='w-[139px] h-[24px] font-Roboto font-normal text-[16px]'>UI/UX Designer</p>
            </div>
            </div>
        </div>
      </div>
      <div className='w-[1152px] h-[48px] justify-between flex sm:max-md:w-[380px] sm:max-md:h-[48px] sm:max-md:justify-between'>
        <div className='flex gap-2 mt-5'> <div className='w-[10px] h-[10px] rounded-[50%] bg-black'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div> </div>
        <div className='w-[111px] h-[48px] flex gap-5 mt-2 sm:max-md:gap-[15px]'>
       <div className='rounded-[50%] w-[40px] h-[40px] p-2 border-[1px] border-[#000000]'> <FaArrowLeft className='text-[20px] text-thhin'/></div>
       <div className='rounded-[50%] w-[40px] h-[40px] p-2 border-[1px] border-[#000000]'><FaArrowRight className='text-[20px] text-thhin'/></div>
      </div>
      </div>
    </div>
  )
}

export default Customer
