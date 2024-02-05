'use client';
import React from 'react'
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'


function Contact() {


    return (
        <div className="bg-neutral-100">
            <div className="lg:container p-10 py-28">
                <div className="flex flex-col justify-center items-center">
                    {/* contact section title */}
                    <h1 className='lg:text-6xl text-4xl text-black text-center font-bold'>Get in Touch</h1>
                    {/* contact section sub heading */}
                    <h2 className='lg:text-2xl text-xl text-gray-500 text-center font-medium text-opacity-65 mt-3 mb-6'>If you have any questions, we’re here to help!</h2>
                    {/* contact section button */}
                    <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xl px-5 py-4 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send us a Message</button>
                    {/*  contact form modal */}
                    <div id="default-modal" aria-hidden="true" className="hidden bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-2xl max-h-full">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="p-4 md:p-5 border-0 rounded-t dark:border-gray-600">
                                    <div className='flex items-center justify-between'>
                                        {/*  Main Title of contact form  */}
                                        <h3 className="text-4xl font-bold dark:text-white text-black-100">
                                            Get in Touch
                                        </h3>
                                        {/*  closing button of contact form  */}
                                        <button type="button" className="end-2.5 text-white bg-blue-300 hover:bg-blue-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/*  sub heading of contact form  */}
                                    <p className='font-normal text-base text-neutral-50'>Please enter your details and we’ll contact you soon.</p>


                                </div>

                                
                                <div className="p-4 md:p-5">
                                    <form className="space-y-4" action="#">
                                        {/*  input fields of contact form  */}
                                        <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Full Name*</label>
                                            <input type="text" name="name" id="name" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Smith" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email*</label>
                                            <input type="email" name="email" id="email" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tel. No: with Country Code</label>
                                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+94 123456789" required />

                                        </div>
                                        <div>

                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Your Requirement</label>
                                            <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message here..."></textarea>

                                        </div>


                                        <p className="mt-2 text-xs text-black dark:text-gray-400">Please note that all fields marked with an asterisk (*) are required.</p>
                                        
                                        {/* google recaptcha  */}
                                        <ReCAPTCHA sitekey="6Ldy_l8pAAAAAEOKj5VylpP6dNrhPx6_KP63VwMx" />
                                        <button type="submit" className="w-full text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                        
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Contact
