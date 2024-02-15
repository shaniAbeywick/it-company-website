import React from 'react'
import Image from 'next/image'

function RecentWorks() {
    return (
        <div className='bg-neutral-100' id='RecentWorks'>
            <div className='lg:container p-10 py-28'>
                {/* recent works section title */}
                <h3 className='sm:text-5xl text-3xl font-bold text-center text-black mb-16'>
                
                    <span className='text-black-100'>
                    Our Most 
                    </span>{' '}
                    <span className='text-blue-300'>
                    Recent Work
                    </span>

              
                   
                </h3>
                {/* recent works section sub heading */}
                {/* <p className='sm:text-base text-sm font-normal text-gray-500 text-center mx-auto max-w-[60ch] mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore obcaecati Laudantium dolore obcaecati.</p> */}
                {/* cards of recent work section */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 justify-items-center">
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard2 hover:border-blue-300 hover:border-4">
                        <a href="https://slcfd.lk/">
                        <Image src="/images/nsehitech.com_.png" alt='recentWorkImg' width={744} height={400} className="absolute object-cover recentWorkImg2" />
                        </a>
                    </div>
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard1 hover:border-blue-300 hover:border-4">
                        <a href=" https://www.infogate.lk/">
                        <Image src="/images/nsehitech.com_.png" alt='recentWorkImg' width={744} height={400} className="absolute object-cover recentWorkImg1" />
                        </a>
                    </div>
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard hover:border-blue-300 hover:border-4">
                        <a href="https://nsehitech.com/">
                        <Image src="/images/nsehitech.com_.png" alt='heroImg' width={744} height={400} className="absolute object-cover recentWorkImg" />
                        </a>
                    </div>
                </div>
                {/* view more button */}
                {/* <div className='flex justify-center mt-20'>
                <button type="button" className="text-white bg-blue-300 text-base font-medium hover:bg-blue-100 focus:ring-4 focus:ring-blue-300  rounded-sm  px-16 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View More</button>
                </div> */}
               
            </div>
        </div>
    )
}

export default RecentWorks
