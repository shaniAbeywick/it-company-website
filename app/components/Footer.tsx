import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className="bg-blue-400 bg-[url('/images/360_F_542404248_jlW64sl8elujM6epFZB9qRAOb7U0wRZB.png')]">
            <div className="lg:container p-10 py-28">

                {/* logo column of footer */}

                <div className='flex justify-center lg:justify-start'>
                    <a href="/">
                        <Image src="/images/logo-light.png" alt='LogoImg' width={130} height={40} />
                    </a>

                </div>

                {/* bottom section of footer */}
                <hr className='mt-10' />

                <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-10 lg:gap-0 mt-10'>
                    <div>
                        <div className="flex gap-4">
                            <a href="/service" className='text-base text-white font-normal hover:text-blue-300'>Services</a>
                            <a href="/about" className='text-base text-white font-normal hover:text-blue-300'>About Us</a>
                            <a href="/contact" className='text-base text-white font-normal hover:text-blue-300'>Contact Us</a>

                        </div>
                        <div className='text-xs text-white font-normal lg:mt-4 lg:text-left text-center mt-12'>
                            @ 2024 Ceylon Dazzling Dev Holding(Pvt) Ltd.<br />
                            All rights reserved
                        </div>
                    </div>
                    <p className='text-xs font-normal text-white text-center lg:text-left'>
                        No.355 D <br />
                        Agalawatta  Road <br />
                        Wettawa <br />
                        Mathugama <br />
                        Sri Lanka
                    </p>


                </div>

                {/* social media logos */}
                <div className="lg:hidden flex flex-row justify-center gap-10 mt-14">
                    <a href="https://web.facebook.com/people/CDAZZDEV/61554969356079/?mibextid=LQQJ4d/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' width={18} height={18} viewBox="0 0 24 24">
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg></a>
                    <a href="https://twitter.com/cdazzdev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' width={18} height={18}  viewBox="0 0 24 24">
                        <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                    </svg></a>
                    <a href="https://www.linkedin.com/company/cdazzdev/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='white' width={18} height={18} viewBox="0 0 24 24">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                        </svg>

                    </a>
                </div>

            </div>
        </div>
    )
}

export default Footer
