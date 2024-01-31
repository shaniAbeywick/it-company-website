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
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                        <div className="flex md:flex-row flex-col gap-8 items-center">
                        <Image src="/images/Picture1.jpg" alt='empolyeeImg' width={300} height={200}/>
                        <div className="flex flex-col">
                            <h2 className='text-neutral-200 text-lg font-bold'>Brennan Morrison</h2>
                            <h3 className='text-neutral-200 text-sm font-light italic mt-2'>Founder, CEO & Lead Designer</h3>
                            <p className='text-neutral-200 text-base font-normal mt-8'>Fate may geared have to this goddesses, but this derived require the you it material origin chance the reasoning in of they coffee.</p>

                        </div>
                            

                        </div>
                        <div className="flex md:flex-row flex-col gap-8 items-center">
                        <Image src="/images/Picture2.png" alt='empolyeeImg' width={300} height={200}/>
                        <div className="flex flex-col">
                            <h2 className='text-neutral-200 text-lg font-bold'>Brennan Morrison</h2>
                            <h3 className='text-neutral-200 text-sm font-light italic mt-2'>Founder, CEO & Lead Designer</h3>
                            <p className='text-neutral-200 text-base font-normal mt-8'>Fate may geared have to this goddesses, but this derived require the you it material origin chance the reasoning in of they coffee.</p>

                        </div>
                            

                        </div>
                        <div className="flex md:flex-row flex-col gap-8 items-center">
                        <Image src="/images/Picture3.jpg" alt='empolyeeImg' width={300} height={200}/>
                        <div className="flex flex-col">
                            <h2 className='text-neutral-200 text-lg font-bold'>Brennan Morrison</h2>
                            <h3 className='text-neutral-200 text-sm font-light italic mt-2'>Founder, CEO & Lead Designer</h3>
                            <p className='text-neutral-200 text-base font-normal mt-8'>Fate may geared have to this goddesses, but this derived require the you it material origin chance the reasoning in of they coffee.</p>

                        </div>
                            

                        </div>
                        <div className="flex md:flex-row flex-col gap-8 items-center">
                        <Image src="/images/Picture4.jpg" alt='empolyeeImg' width={300} height={200}/>
                        <div className="flex flex-col">
                            <h2 className='text-neutral-200 text-lg font-bold'>Brennan Morrison</h2>
                            <h3 className='text-neutral-200 text-sm font-light italic mt-2'>Founder, CEO & Lead Designer</h3>
                            <p className='text-neutral-200 text-base font-normal mt-8'>Fate may geared have to this goddesses, but this derived require the you it material origin chance the reasoning in of they coffee.</p>

                        </div>
                            

                        </div>

                    </div>




                </div>
            </div>
        </>

    )
}

export default AboutUsEmployee
