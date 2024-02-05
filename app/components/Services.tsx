import React from 'react'
import Link from 'next/link'

function Services() {
    return (
        <div className='bg-neutral-100' id='Service'>
            <div className='lg:container p-10 py-28'>

                 {/* service section title */}
                <h3 className='sm:text-5xl text-3xl font-bold text-center mb-16'>
                    <span className='text-black-100'>
                        Our
                    </span>{' '}
                    <span className='text-blue-300'>
                        Services
                    </span>

                </h3>
                {/* service section sub heading */}
                {/* <p className='sm:text-base text-sm font-normal text-gray-500 text-center mx-auto max-w-[60ch] mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore obcaecati Laudantium dolore obcaecati.</p> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 sm:px-0 justify-items-center">
                    {/* card of services */}
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Web App Development</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Unlock the full potential of your online presence with our cutting-edge Web App Development services. At Designveloper, we specialize in creating dynamic and responsive web applications that cater to your unique business needs. Some of our notable creations include</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Mobile App Development</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Take your business on the go with our Mobile App Development services. From conceptualization to deployment, we ensure your app stands out in the competitive mobile landscape.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Cyber Security</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Safeguard your digital assets with our state-of-the-art Cyber Security solutions. We prioritize the confidentiality and integrity of your data, providing robust security measures tailored to your business needs.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">AI Development</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Embark on the journey of artificial intelligence with our AI Development services. Leverage the power of machine learning and data analysis to gain valuable insights and automate processes for enhanced efficiency.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Graphic Design</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, necessitatibus. Velit dolore aliquam adipisci assumenda, molestiae repellendus.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#01BBDD" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Graphic Design</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, necessitatibus. Velit dolore aliquam adipisci assumenda, molestiae repellendus.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                        <a href="/service"> 
                        <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button> 
                        </a>
                        
                        </div>
                        

                    </div>
                </div>
                {/* view more button */}
                {/* <div className='flex justify-center mt-20'>
                    <Link href="/service">
                        <button type="button" className="text-white bg-blue-300 text-base font-medium hover:bg-blue-100 focus:ring-4 focus:ring-blue-300  rounded-sm  px-16 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View More</button>
                    </Link>
                </div> */}

            </div>

        </div>

    )
}

export default Services
