'use client';
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
            <div className="lg:container p-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:p-4">
                    {/* Logo image */}
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 130 40" fill="none" className="sm:w-36 sm:h-40  w-28"><path fill-rule="evenodd" clip-rule="evenodd" d="M127.001 16.839C126.797 16.751 126.592 16.671 126.386 16.598C125.601 16.323 124.864 16.185 124.173 16.185C123.613 16.185 123.174 16.279 122.857 16.465C122.539 16.652 122.381 16.921 122.381 17.274C122.381 17.491 122.474 17.662 122.661 17.79C122.847 17.918 123.202 18.05 123.725 18.187L126.106 18.746C127.618 19.119 128.705 19.664 129.368 20.38C129.718 20.9 130 22.371 130 23.608C129.812 24.948 129.807 25.939 128.696 26.783C127.585 27.627 126.049 28.049 124.089 28.049C122.089 28.049 120.385 27.751 118.979 27.156C118.038 26.759 117.565 25.698 117.909 24.732C118.281 23.686 119.444 23.209 120.468 23.628C120.724 23.732 120.988 23.827 121.261 23.913C122.231 24.217 123.183 24.369 124.117 24.369C124.696 24.369 125.144 24.28 125.461 24.104C125.779 23.927 125.938 23.682 125.938 23.368C125.938 23.094 125.821 22.872 125.588 22.706C125.354 22.539 124.911 22.387 124.257 22.249L121.961 21.69C120.505 21.376 119.454 20.881 118.81 20.203C118.166 19.527 117.844 18.589 117.844 17.392C117.844 16.431 118.114 15.577 118.656 14.831C119.197 14.086 119.949 13.503 120.91 13.08C121.872 12.658 122.978 12.447 124.229 12.447C125.256 12.447 126.264 12.604 127.254 12.918C127.661 13.047 128.058 13.199 128.443 13.371C129.358 13.781 129.802 14.833 129.444 15.773C129.071 16.754 127.96 17.257 127.001 16.839ZM112.523 10.032C111.141 10.032 110.022 8.906 110.022 7.518C110.022 6.13 111.141 5.005 112.523 5.005C113.904 5.005 115.024 6.13 115.024 7.518C115.024 8.906 113.904 10.032 112.523 10.032ZM112.51 12.038C113.892 12.038 115.012 13.162 115.013 14.551L115.022 25.617C115.023 27.006 113.903 28.133 112.52 28.133C111.14 28.133 110.02 27.009 110.019 25.621L110.007 14.556C110.006 13.166 111.127 12.038 112.51 12.038ZM100.433 18.187L102.814 18.746C104.326 19.119 105.414 19.664 106.076 20.38C106.739 21.097 107.071 22.073 107.071 23.309C107.071 24.781 106.515 25.939 105.404 26.783C104.293 27.627 102.758 28.049 100.798 28.049C98.797 28.049 97.094 27.751 95.687 27.156C94.747 26.759 94.274 25.698 94.617 24.732C94.989 23.686 96.152 23.209 97.176 23.628C97.432 23.732 97.696 23.827 97.969 23.913C98.939 24.217 99.892 24.369 100.825 24.369C101.404 24.369 101.852 24.28 102.17 24.104C102.487 23.927 102.646 23.682 102.646 23.368C102.646 23.094 102.529 22.872 102.296 22.706C102.062 22.539 101.619 22.387 100.965 22.249L98.669 21.69C97.213 21.376 96.163 20.881 95.518 20.203C94.874 19.527 94.552 18.589 94.552 17.392C94.552 16.431 94.823 15.577 95.364 14.831C95.906 14.086 96.657 13.503 97.619 13.08C98.58 12.658 99.686 12.447 100.937 12.447C101.964 12.447 102.972 12.604 103.962 12.918C104.37 13.047 104.766 13.199 105.152 13.371C106.066 13.781 106.51 14.833 106.152 15.773C105.779 16.754 104.668 17.256 103.709 16.839C103.506 16.751 103.3 16.671 103.094 16.598C102.31 16.323 101.572 16.185 100.882 16.185C100.321 16.185 99.882 16.279 99.565 16.465C99.248 16.652 99.089 16.921 99.089 17.274C99.089 17.491 99.182 17.662 99.369 17.79C99.555 17.918 99.91 18.05 100.433 18.187ZM89.021 27.092C87.854 27.73 86.487 28.049 84.919 28.049C83.331 28.049 81.95 27.735 80.774 27.106C79.598 26.478 78.692 25.576 78.057 24.398C77.422 23.221 77.105 21.837 77.105 20.248C77.105 18.658 77.422 17.274 78.057 16.097C78.692 14.92 79.598 14.018 80.774 13.389C81.95 12.761 83.331 12.447 84.919 12.447C86.487 12.447 87.854 12.767 89.021 13.404C90.188 14.042 91.089 14.945 91.724 16.112C92.358 17.28 92.676 18.658 92.676 20.248C92.676 21.837 92.358 23.216 91.724 24.384C91.089 25.551 90.188 26.454 89.021 27.092ZM86.977 17.378C86.519 16.759 85.833 16.45 84.919 16.45C83.985 16.45 83.285 16.759 82.818 17.378C82.351 17.996 82.118 18.952 82.118 20.248C82.118 21.563 82.351 22.529 82.818 23.148C83.285 23.765 83.985 24.074 84.919 24.074C86.748 24.074 87.663 22.799 87.663 20.248C87.663 18.952 87.434 17.996 86.977 17.378ZM70.58 28.343C69.721 30.364 68.72 31.722 67.345 32.773C66.572 33.364 65.577 33.974 64.516 34.437C63.239 34.993 61.771 34.264 61.447 32.904C61.201 31.868 61.725 30.819 62.677 30.351C63.353 30.019 63.94 29.644 64.307 29.403C64.96 28.971 65.455 28.372 65.791 27.607L66.155 26.783L61.327 15.246C60.69 13.725 61.802 12.043 63.443 12.043C64.377 12.043 65.217 12.611 65.57 13.48L68.815 21.484L71.464 13.605C71.777 12.672 72.648 12.043 73.629 12.043C75.242 12.043 76.347 13.677 75.754 15.184L70.58 28.343ZM56.995 28.133C55.891 28.133 54.995 27.232 54.995 26.123V26.122C54.189 26.576 53.108 27.043 52.286 27.445C51.463 27.847 50.529 28.133 49.55 28.133C48.277 28.133 47.173 27.735 46.174 27.106C45.175 26.478 44.396 25.581 43.838 24.413C43.28 23.245 43 21.896 43 20.365C43 18.815 43.284 17.442 43.853 16.244C44.42 15.047 45.204 14.115 46.203 13.448C47.202 12.781 48.328 12.447 49.582 12.447C50.562 12.447 51.458 12.658 52.271 13.08C53.083 13.503 54.544 14.354 54.995 15.06V14.049C54.995 12.941 55.889 12.043 56.991 12.043C58.092 12.043 58.986 12.94 58.987 14.048L58.996 26.121C58.996 27.232 58.101 28.133 56.995 28.133ZM53.402 17.466C52.892 16.809 51.53 16.249 50.59 16.249C49.669 16.249 48.521 16.394 47.992 17.071C47.463 17.748 46.991 18.852 46.991 20.088C46.991 21.285 47.482 22.467 47.992 23.105C48.501 23.742 50.033 24.111 50.993 24.111C51.934 24.111 52.892 23.751 53.402 23.103C53.911 22.455 54.166 21.523 54.166 20.306C54.166 19.07 53.911 18.124 53.402 17.466ZM0 0H40V40H0V0ZM5 35H35V5H5V35ZM28.283 29.997C26.78 29.997 26 28.404 26 27V17.999L24 20C24.04 19.127 23.631 18.644 23 17.999L21 16L26.277 10.969C27.035 10.195 28.223 9.936 29.269 10.316C30.314 10.696 31.003 11.637 31.003 12.687V27.453C31.003 28.857 29.785 29.997 28.283 29.997ZM22 22.999C20.892 23.949 19.015 24.035 18 22.999L14 18.999V27C14 28.404 13.22 29.997 11.717 29.997C10.215 29.997 8.997 28.857 8.997 27.453V12.545C8.997 11.496 9.685 10.555 10.731 10.174C11.777 9.794 12.965 10.052 13.723 10.827L22 18.999C23.015 20.035 23.108 22.05 22 22.999Z" fill="white" /></svg>
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
                        <ul className="font-medium flex flex-col md:justify-center md:items-center p-4 md:p-0 mt-4 border-0 rounded-lg bg-indigo-950 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white rounded-none hover:bg-blue-100 md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-blue-700">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-white rounded-none hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/service" className="block py-2 px-3 text-white rounded-none hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            {/* <li>
                                <a href="/career" className="block py-2 px-3 text-white rounded-none hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Career</a>
                            </li> */}
                            <li>
                                <a href="/contact" className="block py-2 lg:px-6 px-3 text-white hover:bg-blue-100 md:hover:bg-transparent md:hover:text-white  md:hover:scale-110 md:active:scale-110 md:focus:scale-110 md:active:text-white md:focus:text-white hover:text-white active:text-white focus:text-white bg-transparent md:border-2 border-0 border-white md:rounded-sm rounded-none dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:outline-none focus:ring-0">Contact</a>
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
