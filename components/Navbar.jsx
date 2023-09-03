'use client';
import { logo } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className=' text-purple-600  xl:px-32 px-10 py-5 border-b-[1px]  flex justify-between items-center '>
        <div className='flex justify-between gap-40 items-center'>
            <Link href='/'>
                <Image
                src={logo}
                width={150}
                height={100}
                alt='Ingoude'
                className='w-cover '
                />
            </Link>
            <div className='xl:flex hidden justify-between 
            items-center w-full '>
                <ul  className='flex justify-between gap-10'>
                    <li>
                        <Link className='text-xl font-normal hover:underline ' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-normal hover:underline ' href='/student-registration'>Student Registration</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-normal hover:underline ' href='/about-us'>About Us</Link>
                    </li>
                    <li>
                        <Link className='text-xl font-normal hover:underline ' href='/contact-us'>Contact Us</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-5'>
                    <Link href='log-in' className='text-lg font-normal hover:underline'>Log in</Link>
                    <Link href='join-us'  className=' border rounded-full px-2 py-2 border-purple-600 hover:text-white hover:bg-purple-600 ease-in-out duration-200'>
                        Join for Free
                    </Link>
                </div>
            </div>
        </div>

         {/* ========== Mobile Button ========== */}
         <div onClick={handleNav} className='lg:block xl:hidden z-10 cursor-pointer'>
           {nav? <AiOutlineClose size={25} /> : <FiMenu size={25}/> } 
         </div>

         {/* ========== Mobile Menu ========== */}
         <div className={ nav 
         ?
         'xl:hidden absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col justify-center items-center text-center   bg-white text-purple-600 ease-in duration-300 gap-20 '
        :
        'xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 h-screen w-full flex flex-col justify-center items-center text-center   bg-white text-purple-600 ease-in duration-300 ' }>
               <Link href='/'>
                    <Image
                    src={logo}
                    width={200}
                    height={100}
                    alt='Ingoude'
                    className='w-cover '
                    />
                </Link>
            
            <ul className='flex flex-col  gap-10'>
                <li>
                    <Link className='text-xl font-normal hover:underline ' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='text-xl font-normal hover:underline ' href='/student-registration'>Student Registration</Link>
                </li>
                <li>
                    <Link className='text-xl font-normal hover:underline ' href='/about-us'>About Us</Link>
                </li>
                <li>
                    <Link className='text-xl font-normal hover:underline ' href='/contact-us'>Contact Us</Link>
                </li>
            </ul>
         </div>
      
    </nav>
  )
}

export default Navbar
