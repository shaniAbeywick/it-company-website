'use client';
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import React from 'react'


function Nav() {

    const pathname = usePathname();

    console.log(pathname);


    useEffect(() => {
        // Initialize Flowbite after component is mounted
        initFlowbite();
    }, []);


    return (
        <>
            <nav className="bg-blue-100 border-gray-200 dark:bg-gray-900">
            <div className="lg:container p-2">
                <div className="max-w-full flex flex-wrap items-center justify-between md:p-4">
                    {/* Logo image */}
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Image src="/images/logo-light.png" alt='LogoImg' width={130} height={40} />
                    </a>
                    {/* Hamburger Icon */}
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    {/* list of nav links */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col md:justify-center md:items-center p-4 md:p-0 mt-4 border-0 rounded-lg bg-blue-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white rounded-none hover:bg-indigo-950 md:hover:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-blue-300">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-white rounded-none hover:bg-indigo-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/service" className="block py-2 px-3 text-white rounded-none hover:bg-indigo-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            {/* <li>
                                <a href="/career" className="block py-2 px-3 text-white rounded-none hover:bg-indigo-950 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Career</a>
                            </li> */}
                            <li>
                                <a href="/contact" className="block py-2 lg:px-6 px-3 text-white hover:bg-indigo-950 md:hover:bg-transparent md:hover:text-blue-300  md:hover:scale-110 md:active:scale-110 md:focus:scale-110 md:active:text-white md:focus:text-white hover:text-white active:text-white focus:text-white bg-transparent md:border-2 border-0 border-white md:rounded-sm rounded-none dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:outline-none focus:ring-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>   
            </nav>





        </>



    )
}

export default Nav
