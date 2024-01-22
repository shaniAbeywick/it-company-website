import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-blue-100 bg-[url('/images/backgroundImg.png')]">
      <div className="container">
        <div className="grid grid-cols-2 px-4 pt-4">
          <div className='flex flex-col justify-center gap-6'>
            <h3 className='text-5xl font-bold text-white hero-title'>Lorem ipsum dolor sit amet consectetur ! </h3>
            <p className="text-white text-base font-normal hero-descript">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quod porro consectetur illo fugiat, ratione error. Nobis facere vel debitis repudiandae maiores, voluptatibus suscipit ipsam, sequi neque tempora quis at.</p>
            <div className='flex flex-row'>
              <button type="button" className="text-white bg-blue-200 border-blue-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Browse Product</button>
              <button type="button" className="text-white bg-transparent border-blue-200 border-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Video</button>

            </div>
          </div>
          <div>
            <Image src="/images/Iso-Illustration-1-1.png" alt='heroImg' width={500} height={500} />
          </div>



        </div>
      </div>



    </div>
  )
}

export default Hero
