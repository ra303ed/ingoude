import React from 'react'

const Industry = () => {
  return (
    <div className='gray1 w-screen mb-20 mt-3'>
        <div className='py-20   flex flex-col items-center justify-center gap-10 px-10'>
            <h1 className='text-4xl font-bold'>
                Industry-oriented Accounts & finance courses
            </h1>
            <div className='flex flex-col md:flex-row gap-3'>
                <button className='rounded-full px-5 py-3 text-white bg-purple-600 hover:text-purple-600 hover:bg-white hover:underline hover:underline-offset-2 ease-in-out duration-200'>
                    Explore Courses
                </button>
            </div>
        </div>
    </div>
  )
}

export default Industry
