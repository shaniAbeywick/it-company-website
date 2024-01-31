
'use client';
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactUsMainContent() {
    return (
        <div className='bg-neutral-100'>
            <div className='lg:container py-28 p-10'>
                <div className="flex lg:flex-row flex-col gap-40">
                    
                    {/* left side contact us form */}
                    <div className="w-full max-w-3xl p-4 bg-slate-50 border border-gray-200 rounded-lg shadow-slate-400 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h3 className="text-4xl font-bold dark:text-white text-black-100">
                            Questions & Help
                            </h3>
                            <p className='font-normal text-base text-neutral-50'>Please enter your details and we’ll contact you soon.</p>
                            <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Full Name*</label>
                                            <input type="text" name="name" id="name" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Smith" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Work Email*</label>
                                            <input type="email" name="email" id="email" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tel. No: with Country Code</label>
                                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+94 123456789" required />

                                        </div>
                                        <div>

                                            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tell us about your requirements</label>
                                            <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message here..."></textarea>

                                        </div>
                                        <p className="mt-2 text-xs text-black dark:text-gray-400">Please note that all fields marked with an asterisk (*) are required.</p>
                                        
                                       
                                        <ReCAPTCHA sitekey="6Ldy_l8pAAAAAEOKj5VylpP6dNrhPx6_KP63VwMx" />
                                       
                                        
                                        <button type="submit" className="w-full text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


                            

                        </form>
                    </div>
                    {/* right side the company address */}
                    <div className="flex flex-col gap-8">
                    <div>
                        <h3 className='text-3xl font-bold text-black-100'>Sri Lanka</h3>
                        <p className='text-lg font-medium text-black-100 text-opacity-70 mt-2'>
                           ReapDigital (Private) Limited<br/>
                           2nd Floor, Bernards Business Park,<br/>
                           106 Dutugemunu Street,<br/>
                           Dehiwela 10350,<br/>
                           Sri Lanka
                        </p>
                    </div>
                    <div>
                    <h3 className='text-3xl font-bold text-black-100'>Emil Us</h3>
                    <a href="mailto:info@cdazzdev.com" className='text-lg font-medium text-black-100 text-opacity-70 mt-2 underline decoration-slate-600 decoration-2 underline-offset-2'>
                    info@cdazzdev.com
                    </a>

                    </div>
                    </div>
                    



                </div>

            </div>
        </div>
    )
}

export default ContactUsMainContent
