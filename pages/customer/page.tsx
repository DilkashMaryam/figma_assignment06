import React from 'react'
import { FaArrowLeft , FaArrowRight, FaStar } from 'react-icons/fa6'
import Image from 'next/image'

const Customer = () => {
  return (
    <div className='w-full h-[900px] bg-[#F7F7F7] pl-[64px] pt-[112px] max-md:bg-[#FFFFFF] max-md:w-full max-md:h-[681.89px] max-md:mt-[50px] max-md:pl-4'>
      <div className='w-[560px] h-[109px] gap-[24px] max-md:ml-6 max-md:text-center'>
        <h1 className='lg:hidden max-md:w-full max-md:font-Roboto max-md:text-[32px]'>What Our Student Say</h1>
        <h1 className='font-Roboto font-bold text-[48px] max-md:hidden'>Customer testimonials</h1>
        <p className='font-Roboto font-normal text-[18px] pt-[15px] max-md:w-full max-md:text-[24px] max-md:text-center max-md:pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[1152x] h-[417.89px] gap-[48px] mt-32 flex max-md:w-full max-md:h-[417.89px]'>
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] max-md:w-[380px] max-md:h-[321.89px] max-md:gap-32 max-md:ml-20'>
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
                    <h1 className='max-md:w-full max-md:h-[24px] max-md:font-Roboto max-md:font-semibold max-md:text-[16px] lg:hidden'>Wade Warren</h1>
                    <h1 className='w-[110px] h-[24px] font-Roboto font-semibold text-[16px] max-md:hidden'>James Nduku</h1>
                    <p className='w-[145px] h-[24px] font-Roboto font-normal text-[16px] max-md:hidden'>Software Developer</p>
                    <p className='max-md:w-[180px] max-md:h-[24px] max-md:font-Roboto max-md:font-normal max-md:text-[16px] lg:hidden'>Position, Company name</p>
            </div>
            </div>
        </div>
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] max-md:hidden'>
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
        <div className='w-[362px] h-[321.89px] border-[1px] p-5 gap-24 border-[#000000] max-md:hidden'>
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
      <div className='w-[1152px] h-[48px] justify-between flex max-md:w-[380px] max-md:h-[48px] max-md:justify-between'>
        <div className='flex gap-2 mt-5'> <div className='w-[10px] h-[10px] rounded-[50%] bg-black'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div>
        <div className='w-[10px] h-[10px] rounded-[50%] bg-[#8D8D8D]'></div> </div>
        <div className='w-[111px] h-[48px] flex gap-5 mt-2 max-md:gap-[15px] max-md:pl-32'>
       <div className='rounded-[50%] w-[40px] h-[40px] p-2 border-[1px] border-[#000000]'> <FaArrowLeft className='text-[20px] text-thhin'/></div>
       <div className='rounded-[50%] w-[40px] h-[40px] p-2 border-[1px] border-[#000000]'><FaArrowRight className='text-[20px] text-thhin'/></div>
      </div>
      </div>
    </div>
  )
}

export default Customer
