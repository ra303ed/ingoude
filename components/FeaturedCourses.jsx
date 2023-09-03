'use client';
import Image from 'next/image';
import { dataAnalysis, team, uxDesigner  } from '@/public';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const FeaturedCourses = () => {
  return (
    <div className='  flex flex-col items-center justify-between gap-10 py-20'>
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
            <h1 className='text-4xl font-bold text-black '>
                Featured Courses
            </h1>
            <p className='text-lg font-normal text-center w-9/12'>
                Our courses are designed in a way that student can easily learn Accounting Start their carrier in Accounting or Work as a Freelancer.
            </p>
        </div>

        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 px-10 gap-5'>

            <div className='border-[1px] rounded-lg hover:shadow-xl ease-in-out duration-300'>
                <Image
                    src={dataAnalysis}
                    width={400}
                    height={100}
                    alt='data'
                    className='w-cover rounded-t-lg '
                />
                <div className='flex flex-col gap-3 p-5 '>
                    <h3>
                        IBM Data Analyst
                    </h3>
                    <div className='flex items-center gap-2'>
                        <p className='text-white w-10 h-10 rounded-full flex items-center justify-center bg-blue-700  '>RS</p>
                        <p>
                            <span className='text-gray-400 mx-1'>By</span>
                            Rahul Singh
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStarHalfAlt size={20} className='text-yellow-500'/>
                    </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-xl'>$12,000,00</p>
                            <button className=' px-4 py-2 border border-blue-700 rounded-xl text-blue-700 hover:text-white hover:bg-blue-700 ease-in-out duration-200'>
                                Add to cart
                            </button>
                        </div>
                </div>
            </div>

            <div className='border-[1px] rounded-lg hover:shadow-xl ease-in-out duration-300'>
                <Image
                    src={team}
                    width={400}
                    height={100}
                    alt='data'
                    className='w-cover rounded-t-lg '
                />
                <div className='flex flex-col gap-3 p-5 '>
                    <h3>
                        Marketing
                    </h3>
                    <div className='flex items-center gap-2'>
                        <p className='text-white w-10 h-10 rounded-full flex items-center justify-center bg-blue-700  '>RS</p>
                        <p>
                            <span className='text-gray-400 mx-1'>By</span>
                            Rahul Singh
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStarHalfAlt size={20} className='text-yellow-500'/>
                    </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-xl'>$12,000,00</p>
                            <button className=' px-4 py-2 border border-blue-700 rounded-xl text-blue-700 hover:text-white hover:bg-blue-700 ease-in-out duration-200'>
                                Add to cart
                            </button>
                        </div>
                </div>
            </div>

            <div className='border-[1px] rounded-lg hover:shadow-xl ease-in-out duration-300'>
                <Image
                    src={uxDesigner}
                    width={400}
                    height={100}
                    alt='data'
                    className='w-cover rounded-t-lg '
                />
                <div className='flex flex-col gap-3 p-5 '>
                    <h3>
                        Ux Design
                    </h3>
                    <div className='flex items-center gap-2'>
                        <p className='text-white w-10 h-10 rounded-full flex items-center justify-center bg-blue-700  '>RS</p>
                        <p>
                            <span className='text-gray-400 mx-1'>By</span>
                            Rahul Singh
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStar size={20} className='text-yellow-500'/>
                        <FaStarHalfAlt size={20} className='text-yellow-500'/>
                    </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-xl'>$12,000,00</p>
                            <button className=' px-4 py-2 border border-blue-700 rounded-xl text-blue-700 hover:text-white hover:bg-blue-700 ease-in-out duration-200'>
                                Add to cart
                            </button>
                        </div>
                </div>
            </div>


        </div>
      
    </div>
  )
}

export default FeaturedCourses
