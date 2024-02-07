import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-cover min-h-screen">
      <div className="absolute inset-0 bg-black-100 opacity-50"></div> {/* Overlay */}
      <div className="lg:container pt-10 pb-10 lg:pb-0 px-10 relative z-10">
        <div className="grid grid-cols-1 lg:px-4 pt-4">
          {/* the left side content of hero section */}
          <div className='flex flex-col justify-center gap-8 lg:mt-20 sm:mt-64 mt-16'>
            <h3 className='text-5xl font-bold text-white hero-title text-left max-w-[20ch]'>Cutting-edge Software Solutions for a Brighter Future </h3>
            <p className="text-white sm:text-base text-sm font-normal hero-descript text-left max-w-[50ch]">Dedication is our hallmark; we give it our all, pouring passion and expertise into every endeavor. Our commitment to excellence ensures that we consistently deliver the finest solutions, surpassing expectations.</p>
            {/* buttons of hero section */}
            {/* <div className='flex flex-row'>
              <button type="button" className="text-white whitespace-nowrap bg-blue-200 border-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs lg:px-12 px-8 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Browse Product</button>
              <button type="button" className="text-white bg-transparent whitespace-nowrap border-blue-200 border-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs p lg:px-16 px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Video</button>

            </div> */}
          </div>
          



        </div>
      </div>



    </div>
  )
}

export default Hero
