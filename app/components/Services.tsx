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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0 justify-items-center">
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
                            <a href="/service#web__app_development">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#01BBDD" className="w-10 h-10" version="1.1" id="Capa_1" viewBox="0 0 548.367 548.367">
                                    <g>
                                        <g>
                                            <path d="M406.304,0H142.084c-16.449,0-29.931,13.486-29.931,29.909v488.548    c0,16.423,13.486,29.909,29.931,29.909h264.219c16.423,0,29.909-13.46,29.909-29.909V29.909C436.213,13.486,422.753,0,406.304,0z     M274.173,518.414c-15.13,0-27.417-12.283-27.417-27.417c0-15.134,12.283-27.417,27.417-27.417    c15.13,0,27.417,12.283,27.417,27.417C301.59,506.131,289.302,518.414,274.173,518.414z M401.925,433.697H146.463V67.277h255.463    V433.697z M254.829,176.136h-80.386v-65.443h80.386V176.136z M363.264,176.136h-80.408v-65.443h80.408V176.136z M254.829,281.655    h-80.386v-65.417h80.386V281.655z M363.264,281.655h-80.408v-65.417h80.408V281.655z M254.829,389.221h-80.386v-65.417h80.386    V389.221z M363.264,389.221h-80.408v-65.417h80.408V389.221z" />
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Mobile App Development</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Take your business on the go with our Mobile App Development services. From conceptualization to deployment, we ensure your app stands out in the competitive mobile landscape.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#mobile_app_developmet">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#01BBDD" className="w-10 h-10" viewBox="0 0 512 512">

                                    <g id="Cyber_security">

                                        <path d="M80.9175,377.0605H202V439.16H139a9.8965,9.8965,0,1,0,0,19.7929H373a9.8965,9.8965,0,1,0,0-19.7929H310V377.0605H431.0869A49.9019,49.9019,0,0,0,480.64,332.9351H31.36A49.9094,49.9094,0,0,0,80.9175,377.0605Z" />

                                        <path d="M431.0869,53.0474H80.9175A49.9181,49.9181,0,0,0,31,102.9637V313.1421H481V102.9637A49.9144,49.9144,0,0,0,431.0869,53.0474ZM337,179.5835a83.01,83.01,0,0,1-43.1807,72.8317L256,273.0947l-37.8149-20.6795A83.0054,83.0054,0,0,1,175,179.5835V118.9324l81-25.8377,81,25.8377Z" />

                                        <path d="M223.6035,165.0991a32.3247,32.3247,0,0,0,22.5,30.6881V223.59a9.8965,9.8965,0,1,0,19.793,0V195.7872a32.3292,32.3292,0,1,0-42.293-30.6881Z" />

                                    </g>

                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Cyber Security</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Safeguard your digital assets with our state-of-the-art Cyber Security solutions. We prioritize the confidentiality and integrity of your data, providing robust security measures tailored to your business needs.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#cyber_security">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="3" fill="#01BBDD" className="w-10 h-10" stroke="#01BBDD"><circle cx="34.52" cy="11.43" r="5.82" /><circle cx="53.63" cy="31.6" r="5.82" /><circle cx="34.52" cy="50.57" r="5.82" /><circle cx="15.16" cy="42.03" r="5.82" /><circle cx="15.16" cy="19.27" r="5.82" /><circle cx="34.51" cy="29.27" r="4.7" /><line x1="20.17" y1="16.3" x2="28.9" y2="12.93" /><line x1="38.6" y1="15.59" x2="49.48" y2="27.52" /><line x1="50.07" y1="36.2" x2="38.67" y2="46.49" /><line x1="18.36" y1="24.13" x2="30.91" y2="46.01" /><line x1="20.31" y1="44.74" x2="28.7" y2="48.63" /><line x1="17.34" y1="36.63" x2="31.37" y2="16.32" /><line x1="20.52" y1="21.55" x2="30.34" y2="27.1" /><line x1="39.22" y1="29.8" x2="47.81" y2="30.45" /><line x1="34.51" y1="33.98" x2="34.52" y2="44.74" /></svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">AI Development</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Embark on the journey of artificial intelligence with our AI Development services. Leverage the power of machine learning and data analysis to gain valuable insights and automate processes for enhanced efficiency.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#Ai_developmet">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="_x32_" fill="#01BBDD" className="w-10 h-10" viewBox="0 0 512 512">
                                    <style type="text/css">

                                    </style>
                                    <g>
                                        <path className="st0" d="M256.008,411.524c54.5,0,91.968-7.079,92.54-13.881c2.373-28.421-34.508-43.262-49.381-48.834   c-7.976-2.984-19.588-11.69-19.588-17.103c0-3.587,0-8.071,0-14.214c4.611-5.119,8.095-15.532,10.183-27.317   c4.857-1.738,7.627-4.524,11.095-16.65c3.69-12.93-5.548-12.5-5.548-12.5c7.468-24.715-2.357-47.944-18.825-46.246   c-11.358-19.857-49.397,4.54-61.31,2.841c0,6.818,2.834,11.92,2.834,11.92c-4.143,7.882-2.548,23.564-1.389,31.485   c-0.667,0-9.016,0.079-5.468,12.5c3.452,12.126,6.23,14.912,11.088,16.65c2.079,11.786,5.571,22.198,10.198,27.317   c0,6.143,0,10.627,0,14.214c0,5.413-12.35,14.548-19.611,17.103c-14.953,5.262-51.746,20.413-49.373,48.834   C164.024,404.444,201.491,411.524,256.008,411.524z" />
                                        <path className="st0" d="M404.976,56.889h-75.833v16.254c0,31.365-25.524,56.889-56.889,56.889h-32.508   c-31.366,0-56.889-25.524-56.889-56.889V56.889h-75.834c-25.444,0-46.071,20.627-46.071,46.071v362.969   c0,25.444,20.627,46.071,46.071,46.071h297.952c25.445,0,46.072-20.627,46.072-46.071V102.96   C451.048,77.516,430.421,56.889,404.976,56.889z M402.286,463.238H109.714V150.349h292.572V463.238z" />
                                        <path className="st0" d="M239.746,113.778h32.508c22.405,0,40.635-18.23,40.635-40.635V40.635C312.889,18.23,294.659,0,272.254,0   h-32.508c-22.406,0-40.635,18.23-40.635,40.635v32.508C199.111,95.547,217.341,113.778,239.746,113.778z M231.619,40.635   c0-4.492,3.634-8.127,8.127-8.127h32.508c4.492,0,8.127,3.635,8.127,8.127v16.254c0,4.492-3.635,8.127-8.127,8.127h-32.508   c-4.493,0-8.127-3.635-8.127-8.127V40.635z" />
                                    </g>
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Employee Outsource</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">
                            We provide IT staffing at a high quality and a very much affordable cost. You can gain complete satisfaction from our expert resources. Our IT staff can work on designing, developing, supporting and maintaining issues so as to help you save on expenses.
                            Make a choice to outsource now and get our pool of devoted IT professionals to fulfill your quick-time period undertaking requirements on an offshore/onshore basis.
                        </p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#empolyee_outsource">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#01BBDD" className="w-10 h-10 icon" viewBox="0 0 1024 1024" version="1.1"><path d="M88.614 128.242c-4.42 0-8.076-3.576-8.076-7.998s3.5-7.998 7.904-7.998h0.172c4.404 0 7.998 3.576 7.998 7.998s-3.594 7.998-7.998 7.998zM120.604 128.242c-4.42 0-8.076-3.576-8.076-7.998s3.5-7.998 7.904-7.998h0.172c4.404 0 7.998 3.576 7.998 7.998s-3.594 7.998-7.998 7.998zM152.594 128.242c-4.42 0-8.076-3.576-8.076-7.998s3.5-7.998 7.904-7.998h0.172c4.404 0 7.998 3.576 7.998 7.998s-3.592 7.998-7.998 7.998zM856.378 336.18c-4.422 0-8.074-3.578-8.074-7.998s3.496-7.998 7.902-7.998h0.172a8 8 0 0 1 0 15.996zM1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.636 0-31.99-14.34-31.99-31.99s14.354-31.99 31.99-31.99 31.992 14.34 31.992 31.99-14.356 31.99-31.992 31.99z m0-47.984c-8.826 0-15.996 7.184-15.996 15.994s7.17 15.994 15.996 15.994c8.824 0 15.996-7.184 15.996-15.994s-7.172-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.81-9.73l31.99-143.956a8.008 8.008 0 0 1 9.544-6.078 8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8.004 8.004 0 0 1-7.812 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a7.998 7.998 0 1 1 15.616-3.466l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z" fill="" /><path d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 640.086H56.14a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998z m-903.722-15.996h895.726V112.248H64.138v511.842z" fill="" /><path d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.056 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.932 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z" fill="" /><path d="M967.86 831.778H56.14c-31.396 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.558 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982zM967.86 144.238H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM104.124 608.096a7.994 7.994 0 0 1-7.998-7.998V168.23c0-4.42 3.576-7.998 7.998-7.998s7.998 3.578 7.998 7.998v431.868a7.992 7.992 0 0 1-7.998 7.998z" fill="" /><path d="M823.906 640.086c-4.422 0-8-3.578-8-7.998V136.24a7.994 7.994 0 0 1 8-7.998 7.994 7.994 0 0 1 7.996 7.998v495.848a7.994 7.994 0 0 1-7.996 7.998z" fill="" /><path d="M967.86 272.2h-143.954c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h143.954c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM104.124 224.212H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM104.124 272.2H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h47.986c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-8 7.998zM104.124 320.184H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM104.124 368.17H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998zM104.124 416.154H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-8 7.998zM104.124 464.14H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998zM104.124 512.124H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-8 7.998zM104.124 560.11H56.14a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h47.986a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-8 7.996zM104.124 608.096H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h47.986a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-8 7.998zM104.124 176.228H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h47.986c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-8 7.998zM935.872 192.222h-79.976c-4.422 0-7.996-3.576-7.996-7.998s3.574-7.998 7.996-7.998h79.976c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998zM935.872 224.212h-79.976c-4.422 0-7.996-3.576-7.996-7.998s3.574-7.998 7.996-7.998h79.976c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998zM935.872 336.18h-47.984c-4.422 0-8-3.578-8-7.998a7.994 7.994 0 0 1 8-7.998h47.984a7.994 7.994 0 0 1 7.996 7.998 7.994 7.994 0 0 1-7.996 7.998zM856.378 384.164c-4.422 0-8.074-3.576-8.074-7.998s3.496-7.998 7.902-7.998h0.172a8 8 0 0 1 0 15.996zM935.872 384.164h-47.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h47.984c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998zM856.378 432.15c-4.422 0-8.074-3.578-8.074-7.998s3.496-7.998 7.902-7.998h0.172a8 8 0 0 1 0 15.996zM935.872 432.15h-47.984c-4.422 0-8-3.578-8-7.998a7.994 7.994 0 0 1 8-7.998h47.984a7.994 7.994 0 0 1 7.996 7.998 7.994 7.994 0 0 1-7.996 7.998z" fill="" /><path d="M856.378 480.134c-4.422 0-8.074-3.576-8.074-7.998 0-4.42 3.496-7.998 7.902-7.998h0.172a7.998 7.998 0 1 1 0 15.996z" fill="" /><path d="M935.872 480.134h-47.984c-4.422 0-8-3.576-8-7.998a7.994 7.994 0 0 1 8-7.998h47.984a7.994 7.994 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.998z" fill="" /><path d="M856.378 528.122c-4.422 0-8.074-3.578-8.074-7.998s3.496-7.998 7.902-7.998h0.172a8 8 0 0 1 0 15.996z" fill="" /><path d="M935.872 528.122h-47.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h47.984c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998z" fill="" /><path d="M856.378 576.106c-4.422 0-8.074-3.578-8.074-7.998s3.496-7.998 7.902-7.998h0.172a8 8 0 0 1 0 15.996z" fill="" /><path d="M935.872 576.106h-47.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h47.984c4.418 0 7.996 3.578 7.996 7.998s-3.578 7.998-7.996 7.998z" fill="" /><path d="M471.216 384.164a8.012 8.012 0 0 1-7.952-7.208c-7.684-77.96-72.696-136.746-151.204-136.746-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998c86.77 0 158.624 64.988 167.136 151.166a8.014 8.014 0 0 1-7.98 8.784zM312.452 560.11a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998c78.506 0 143.534-58.788 151.218-136.74 0.454-4.398 4.484-7.466 8.748-7.17a8.016 8.016 0 0 1 7.186 8.748c-8.514 86.17-80.382 151.156-167.152 151.156zM567.984 448.144a7.968 7.968 0 0 1-4.796-1.602l-63.98-47.984a7.994 7.994 0 0 1 0-12.792l63.98-47.986a7.968 7.968 0 0 1 6.36-1.444l79.972 15.994a7.996 7.996 0 0 1 6.438 7.842v63.98a7.998 7.998 0 0 1-6.438 7.842l-79.972 15.994a8.132 8.132 0 0 1-1.564 0.156z m-50.656-55.982l52.594 39.442 70.04-14.004v-50.876l-70.04-14.004-52.594 39.442z" fill="" /><path d="M647.958 448.144a7.992 7.992 0 0 1-7.996-7.998v-95.97a7.994 7.994 0 0 1 7.996-7.998c4.422 0 8 3.576 8 7.998v95.97a7.994 7.994 0 0 1-8 7.998zM583.976 400.16h-79.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h79.974c4.422 0 8 3.578 8 7.998a7.994 7.994 0 0 1-8 7.998zM472.012 384.054a7.994 7.994 0 0 1-7.998-7.998V264.2a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v111.856a7.994 7.994 0 0 1-7.998 7.998z" fill="" /><path d="M472.012 272.2c-13.23 0-23.994-10.762-23.994-23.994s10.762-23.994 23.994-23.994 23.992 10.762 23.992 23.994-10.76 23.994-23.992 23.994z m0-31.992c-4.406 0-7.998 3.584-7.998 7.998s3.592 7.998 7.998 7.998c4.404 0 7.998-3.584 7.998-7.998s-3.594-7.998-7.998-7.998zM472.012 528.074a7.994 7.994 0 0 1-7.998-7.998v-111.858a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v111.858a7.994 7.994 0 0 1-7.998 7.998z" fill="" /><path d="M472.012 560.062c-13.23 0-23.994-10.762-23.994-23.992s10.762-23.992 23.994-23.992 23.992 10.762 23.992 23.992-10.76 23.992-23.992 23.992z m0-31.988a8 8 0 0 0-7.998 7.996 8.002 8.002 0 0 0 7.998 7.998 8.004 8.004 0 0 0 7.998-7.998 8.002 8.002 0 0 0-7.998-7.996zM679.95 432.15h-31.992a7.994 7.994 0 0 1-7.996-7.998v-63.98a7.994 7.994 0 0 1 7.996-7.998h31.992a7.992 7.992 0 0 1 7.996 7.998v63.98a7.992 7.992 0 0 1-7.996 7.998z m-23.992-15.996h15.996v-47.984h-15.996v47.984zM312.062 256.204h-31.99a7.994 7.994 0 0 1-7.998-7.998v-31.99a7.994 7.994 0 0 1 7.998-7.998h31.99a7.994 7.994 0 0 1 7.998 7.998v31.99a7.994 7.994 0 0 1-7.998 7.998z m-23.992-15.996h15.994v-15.996h-15.994v15.996zM312.062 576.106h-31.99a7.994 7.994 0 0 1-7.998-7.998v-31.99a7.992 7.992 0 0 1 7.998-7.996h31.99a7.992 7.992 0 0 1 7.998 7.996v31.99a7.994 7.994 0 0 1-7.998 7.998z m-23.992-15.996h15.994v-15.994h-15.994v15.994zM488.006 416.154h-31.99a7.994 7.994 0 0 1-7.998-7.998v-31.99a7.994 7.994 0 0 1 7.998-7.998h31.99a7.992 7.992 0 0 1 7.998 7.998v31.99a7.992 7.992 0 0 1-7.998 7.998z m-23.992-15.994h15.996v-15.996h-15.996v15.996z" fill="" /></svg>
                            </div>
                        </div>
                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Graphic Design</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Graphic design is a sought-after skill that can help produce high-end designs to promote brands at a national and international scale. Adding graphics to your design can help you showcase your creative skills and make a good impression on your clients.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#graphic_design">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#01BBDD" className="w-10 h-10" viewBox="0 0 512 512" version="1.1">
                                    <title>ai</title>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="icon" fill="#01BBDD" transform="translate(64.000000, 64.000000)">
                                            <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape">

                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Scylla AI</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Scylla is a modern modular AI-powered physical threat detection system that enhances operational activities of security teams. Our solutions work in real time so that your surveillance is proactive rather than reactive in high-impact scenarios.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#scylla_ai">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                    <div className="relative transition-transform ease-in duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 service-card">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center bg-neutral-100 rounded-full w-12 h-12 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#01BBDD" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V6C22 7.04349 21.4672 7.96254 20.6589 8.5C21.4672 9.03746 22 9.95651 22 11V13C22 14.0435 21.4672 14.9625 20.6589 15.5C21.4672 16.0375 22 16.9565 22 18V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V18C2 16.9565 2.53276 16.0375 3.34111 15.5C2.53276 14.9625 2 14.0435 2 13V11C2 9.95651 2.53275 9.03746 3.3411 8.5C2.53275 7.96254 2 7.04349 2 6V4ZM5 3C4.44772 3 4 3.44772 4 4V6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6V4C20 3.44772 19.5523 3 19 3H5ZM5 10C4.44772 10 4 10.4477 4 11V13C4 13.5523 4.44772 14 5 14H19C19.5523 14 20 13.5523 20 13V11C20 10.4477 19.5523 10 19 10H5ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V18ZM16.5 20.25C17.1904 20.25 17.75 19.6904 17.75 19C17.75 18.3096 17.1904 17.75 16.5 17.75C15.8096 17.75 15.25 18.3096 15.25 19C15.25 19.6904 15.8096 20.25 16.5 20.25ZM16.5 13.25C17.1904 13.25 17.75 12.6904 17.75 12C17.75 11.3096 17.1904 10.75 16.5 10.75C15.8096 10.75 15.25 11.3096 15.25 12C15.25 12.6904 15.8096 13.25 16.5 13.25ZM16.5 6.25C17.1904 6.25 17.75 5.69036 17.75 5C17.75 4.30964 17.1904 3.75 16.5 3.75C15.8096 3.75 15.25 4.30964 15.25 5C15.25 5.69036 15.8096 6.25 16.5 6.25Z" fill="#01BBDD" />
                                </svg>
                            </div>
                        </div>



                        <a href="#">
                            <h5 className="m-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center uppercase">Supermicro servers</h5>
                        </a>
                        <p className="mb-3 font-normal text-black-100 text-opacity-70 dark:text-gray-400 text-center">Supermicro is a global technology leader committed to delivering first-to-market innovation for Enterprise, Cloud, AI, Metaverse, and 5G Telco/Edge IT Infrastructure. It is a Rack-Scale Total IT Solutions provider that designs and builds an environmentally friendly and energy-saving portfolio of servers, storage systems, switches, and software, along with global support services.</p>
                        <div className="overlay absolute rounded-lg flex justify-center items-center">
                            <a href="/service#supermicro">
                                <button type="button" className="seeMoreBtn py-2.5 px-5 opacity-0 text-sm font-medium text-blue-300 focus:outline-none bg-white rounded-lg border-0 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More</button>
                            </a>

                        </div>


                    </div>
                </div>
                {/* view more button  */}
                <div className='flex justify-center mt-20'>
                    <Link href="/service">
                        <button type="button" className="text-white bg-blue-300 text-base font-medium hover:bg-blue-300 focus:ring-4 focus:ring-blue-300  rounded-sm  px-16 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View More</button>
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default Services
