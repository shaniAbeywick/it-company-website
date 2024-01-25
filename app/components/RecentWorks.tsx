import React from 'react'
import Image from 'next/image'

function RecentWorks() {
    return (
        <div className='bg-neutral-100' id='Service'>
            <div className='lg:container p-10 py-28'>

                <h3 className='sm:text-5xl text-3xl font-bold text-center text-black'>
                    Our Most Recent Work
                </h3>
                <p className='sm:text-base text-sm font-normal text-gray-500 text-center mx-auto max-w-[60ch] mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore obcaecati Laudantium dolore obcaecati.</p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 justify-items-center">
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard hover:border-blue-300 hover:border-4">
                        <a href="https://www.bookeeapp.com/">
                        <Image src="https://assets-global.website-files.com/61a8d339c610875946b12eee/6560a7b92d4104b1c8ee537c_bookee_home.webp" alt='heroImg' width={744} height={400} className="absolute object-cover recentWorkImg" />
                        </a>
                    </div>
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard hover:border-blue-300 hover:border-4">
                        <a href="https://www.bookeeapp.com/">
                        <Image src="https://assets-global.website-files.com/61a8d339c610875946b12eee/6560a7b92d4104b1c8ee537c_bookee_home.webp" alt='heroImg' width={744} height={400} className="absolute object-cover recentWorkImg" />
                        </a>
                    </div>
                    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden recentWorksCard hover:border-blue-300 hover:border-4">
                        <a href="https://www.bookeeapp.com/">
                        <Image src="https://assets-global.website-files.com/61a8d339c610875946b12eee/6560a7b92d4104b1c8ee537c_bookee_home.webp" alt='heroImg' width={744} height={400} className="absolute object-cover recentWorkImg" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                <button type="button" className="text-white bg-blue-300 text-base font-medium hover:bg-blue-100 focus:ring-4 focus:ring-blue-300  rounded-sm  px-16 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View More</button>
                </div>
               
            </div>
        </div>
    )
}

export default RecentWorks
