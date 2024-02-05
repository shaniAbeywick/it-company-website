'use client'
import Image from 'next/image'
import React, { useState } from 'react';

function AboutUsEmployee() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [modal4Open, setModal4Open] = useState(false);

    const openModal1 = () => {
        setModal1Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal1 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal1Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal2 = () => {
        setModal2Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal2 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal2Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal3 = () => {
        setModal3Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal3 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal3Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal4 = () => {
        setModal4Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal4 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal4Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };


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
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="flex flex-col">
                            <button className="" onClick={openModal1}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Chamika Abeygunarathna</h2>
                                </div>
                            </button>

                        </div>
                        {modal1Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal1}>

                                <div className="relative p-4 w-full max-w-6xl max-h-full" >

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Chamika Abeygunarathna</h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>CEO/MANAGING DIRECTOR</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>First and foremost, he loves coding. Ever since coding his first program in Java and manipulating it to produce a desired output, he has been obsessed with the idea of using software to solve practical problems. Software engineering is a never-ending puzzle that I am passionately engaged in solving. He believes in the power of programming to transform and improve the lives of people around the world </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                He started his career as a   lead a full UI/UX overhaul of a small start up's website and injecting HTML/CSS/JavaScript on popular merchant websites. This contract quickly turned into a full time offer and he has been happily expanding his role as a software engineer ever since. Chamika worked as a Lead Tech Expert at DEVY.io. and was able to  implement a micro front end into customer acquisition flow so that it can be dynamically composed using demographic data and allow for CI/CD deployments to bring features to market faster. 
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                Chamika is not only a coder but also a musician. He plays the guitar/violin and he finds a beautiful crossover between his software and music. Both pursuits challenge so many aspects of the intellect: creativity, organization, sequential processing, problem solving. This is what keeps him up at night, a never ending thirst to create beautiful, powerful things and share them with the world.
                                                </p>
                                            </div>
                                            <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <button className="" onClick={openModal2}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Buddika Walpita</h2>
                                </div>
                            </button>

                        </div>
                        {modal2Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal2}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Buddika Walpita</h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>ENGINEERING MANAGERS/SOFTWARE ENGINEER</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Buddkika is  a passionate and versatile professional who thrives at the intersection of technology, education, and leadership. With a Bachelor's degree in Software Technology and a National Vocational Qualification Level 5 in ICT, I've spent the past decade in various roles that have shaped my multifaceted career. </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Buddhika began his career  as a software developer 10 years before , with expertise in WordPress, Woo-commerce, web and software development, and design. Over the years, he has  seamlessly navigated complex projects, specializing in database management, SEO, and customization, all while providing top-notch solutions to clients.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    He is not only a Software Engineer but also as a Teacher he  has always been a passion of mine. For seven years, he served as an IT instructor, imparting knowledge in NVQ-L3, MS Office, Graphic Design, and ICT courses. Guiding students from diverse backgrounds, including school leavers and office professionals, has been a rewarding experience.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Entrepreneurial Spirit: As the CEO of Cdazz Education Institute, he oversees a dynamic institution that offers a wide array of ICT courses. Cdazz Education Institut caters to students from grade 1 to grade 13, preparing them for O/L and A/L examinations, and nurturing their digital skills in Sri Lanka's ever-evolving landscape.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Buddhika holds  the role of Engineering Manager at Ceylon Dazzling Dev (Pvt) Ltd, where he is at the helm of cutting-edge projects in AI, Machine Learning, Data Science, DevOps, and more. My expertise encompasses a wide range of technologies, including Python, Node.js, React, Next.js, and various programming languages.
                                                </p>
                                            </div>
                                            <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal3}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Chamal Wickramarathna </h2>
                                </div>
                            </button>
                        </div>
                        {modal3Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal3}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Chamal Wickramarathna</h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>ENGINEERING MANAGERS/SOFTWARE ENGINEER</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Chamal is a seasoned Software Engineer with 13 years of experience, including 3 years dedicated to data science and artificial intelligence, driven by a passion for technology and its limitless possibilities. Chamala’s  journey has been enriched by a Master's degree in Data Science and AI, which has enabled me to delve deep into the world of data-driven insights and intelligent solutions. Chamala is  fascinated by the potential of IoT and Electronics to revolutionize industries, and also enthusiastic about contributing his expertise in this exciting domain. Collaborating with like-minded professionals to create innovative and transformative solutions is what motivates him the most. His motto is “Let's connect and explore how we can shape the future together”.</p>
                                            </div>
                                            <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal4}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={300} height={200} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-neutral-200 text-lg font-bold mt-4 employee-name'>Dilshan Welikala</h2>
                                </div>
                            </button>
                        </div>
                        {modal4Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal4}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Dilshan Welikala</h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>TEAM MANAGER</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Dilshan Welikala is a highly skilled and accomplished Web Developer, holding a degree in Software Engineering from NSBM. Commencing his professional journey in 2015 as a Trainee PHP Developer, Dilshan has seamlessly transitioned through various roles, showcasing his expertise as a Web Designer, UI/UX Designer, Visual Designer, and Front-end Developer. Currently serving as the Webflow Engineering Manager at CDAZZ, Dilshan plays a pivotal role in leading and contributing to innovative projects. With a comprehensive skill set and a commitment to excellence, Dilshan consistently delivers visually stunning and functionally robust web solutions, making a significant impact in the dynamic field of web development.</p>
                                            </div>
                                            <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>

    )
}

export default AboutUsEmployee
