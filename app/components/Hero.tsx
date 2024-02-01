import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-blue-100 bg-[url('/images/backgroundImg.png')]">
      <div className="lg:container pt-10 pb-10 lg:pb-0 px-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-4 pt-4">
          {/* the left side content of hero section */}
          <div className='flex flex-col justify-center gap-6'>
            <h3 className='sm:text-5xl text-3xl font-bold text-white sm:hero-title'>Lorem ipsum dolor sit amet consectetur! </h3>
            <p className="text-white sm:text-base text-sm font-normal hero-descript">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quod porro consectetur illo fugiat, ratione error. Nobis facere vel debitis repudiandae maiores, voluptatibus suscipit ipsam, sequi neque tempora quis at.</p>
            {/* buttons of hero section */}
            <div className='flex flex-row'>
              <button type="button" className="text-white whitespace-nowrap bg-blue-200 border-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs px-12 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Browse Product</button>
              <button type="button" className="text-white bg-transparent whitespace-nowrap border-blue-200 border-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm sm:text-base text-xs p px-16 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Video</button>

            </div>
          </div>
          {/* the image in right side of hero section */}
          <div className='lg:block hidden'>
            <Image src="/images/Iso-Illustration-1-1.png" alt='heroImg' width={744} height={719} />
          </div>



        </div>
      </div>



    </div>
  )
}

export default Hero
