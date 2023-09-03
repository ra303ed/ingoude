import Image from 'next/image'
import React from 'react'
import { student } from '@/public'

const Hero = () => {
  return (
    <div className='w-screen h-[70vh]  custom-bg bg-cover bg-center xl:px-36 px-10 py-10'>
        <div className='flex justify-center xl:justify-between items-start sm:px-10 md:py-20'>
            <div className='flex flex-col gap-10 flex-1 items-start justify-center '>
                <h1 className='text-5xl font-bold text-black '>
                IASM Computer Accounting Institute
                </h1>
                <p className='xl:text-xl sm: text-lg '>
                Join IASM start your career in Accounting. We have 100% Placement Support, Provides you Study material, Practical knowledge in Accounting. You can Start your career as freelancer or Start your own business.
                </p>
                <div className='flex md:gap-5 md:flex-row gap-3 flex-col '>
                    <button className='rounded-full px-5 py-3 text-white bg-purple-600 hover:text-purple-600 hover:bg-white ease-in-out duration-200'>Explore Courses</button>
                    <button className='rounded-full px-5 py-3 border border-purple-600  hover:text-white hover:bg-purple-600 ease-in-out duration-200'>Start learning</button>
                </div>
            </div>
            <div className='xl:flex hidden items-center justify-center flex-1  '>
                <Image
                    src={student}
                    width={900}
                    height={300}
                    alt=''
                    className='bg-cover bg-center border-b-2 shadow-b-lg  '
                />
            </div>
        </div>

       
      
    </div>
  )
}

export default Hero
