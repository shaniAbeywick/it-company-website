import React from 'react'
import Image from 'next/image'

function AboutUsEmployee() {
    return (
        <>
            <div className="bg-neutral-100">
                <div className='lg:container py-20 p-10'>

                    <h3 className='text-2xl font-semibold text-blue-400 text-center'>Meet The Team</h3>
                    <p className='text-base font-normal text-neutral-500 text-center mt-3'>Meet the team and know what they do and love!</p>




                </div>
            </div>
            <div className="bg-white">
                <div className='lg:container py-20 p-10'>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="flex flex-col">
                            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="">
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Sebastian Roy</h2>
                                </div>
                            </button>

                        </div>
                        <div id="default-modal" aria-hidden="true" className="hidden bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-6xl max-h-full">

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h2 className='text-white text-7xl font-bold'>Sebastian Roy</h2>
                                            <h3 className='text-white text-lg font-light italic mt-4'>Creative Lead</h3>
                                            <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.</p>
                                        </div>
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' className="object-cover w-full rounded-lg h-96 md:h-auto md:w-full " width={550} height={753} />
                                    </a>





                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col">
                            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="">
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Sebastian Roy</h2>
                                </div>
                            </button>

                        </div>
                        <div id="default-modal" aria-hidden="true" className="hidden bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-6xl max-h-full">

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h2 className='text-white text-7xl font-bold'>Sebastian Roy</h2>
                                            <h3 className='text-white text-lg font-light italic mt-4'>Creative Lead</h3>
                                            <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.</p>
                                        </div>
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' className="object-cover w-full rounded-lg h-96 md:h-auto md:w-full " width={550} height={753} />
                                    </a>





                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="">
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Sebastian Roy</h2>
                                </div>
                            </button>

                        </div>
                        <div id="default-modal" aria-hidden="true" className="hidden bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-6xl max-h-full">

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h2 className='text-white text-7xl font-bold'>Sebastian Roy</h2>
                                            <h3 className='text-white text-lg font-light italic mt-4'>Creative Lead</h3>
                                            <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.</p>
                                        </div>
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' className="object-cover w-full rounded-lg h-96 md:h-auto md:w-full " width={550} height={753} />
                                    </a>





                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="">
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Sebastian Roy</h2>
                                </div>
                            </button>

                        </div>
                        <div id="default-modal" aria-hidden="true" className="hidden bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-6xl max-h-full">

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h2 className='text-white text-7xl font-bold'>Sebastian Roy</h2>
                                            <h3 className='text-white text-lg font-light italic mt-4'>Creative Lead</h3>
                                            <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut eos quis eius repellat minus! Expedita magni inventore consectetur impedit quidem dignissimos eaque facere, minus vitae natus quaerat! Modi, nulla.</p>
                                        </div>
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' className="object-cover w-full rounded-lg h-96 md:h-auto md:w-full " width={550} height={753} />
                                    </a>





                                </div>
                            </div>
                        </div>

                        
                    </div>



                </div>




            </div>

        </>

    )
}

export default AboutUsEmployee
