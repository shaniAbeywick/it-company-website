import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-blue-100 bg-[url('/images/360_F_542404248_jlW64sl8elujM6epFZB9qRAOb7U0wRZB.png')]">
      <div className="lg:container pt-10 pb-10 lg:pb-0 px-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-4 pt-4">
          {/* the left side content of hero section */}
          <div className='flex flex-col justify-start gap-8 lg:mt-20 mt-0'>
            <h3 className='sm:text-5xl text-3xl font-bold text-white sm:hero-title'>Cutting-edge Software Solutions for a Brighter Future </h3>
            <p className="text-white sm:text-base text-sm font-normal hero-descript">Dedication is our hallmark; we give it our all, pouring passion and expertise into every endeavor. Our commitment to excellence ensures that we consistently deliver the finest solutions, surpassing expectations.</p>
            {/* buttons of hero section */}
            {/* <div className='flex flex-row'>
              <button type="button" className="text-white whitespace-nowrap bg-blue-200 border-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs lg:px-12 px-8 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Browse Product</button>
              <button type="button" className="text-white bg-transparent whitespace-nowrap border-blue-200 border-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs p lg:px-16 px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Video</button>

            </div> */}
          </div>
          {/* the image in right side of hero section */}
          <div className='lg:block hidden'>
            <Image src="/images/1_90X1x3i2tkHRZBIyj0bG9w.png" alt='heroImg' width={744} height={719} />
          </div>



        </div>
      </div>



    </div>
  )
}

export default Hero
