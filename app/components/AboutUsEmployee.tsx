'use client'
import Image from 'next/image'
import React, { useState } from 'react';

function AboutUsEmployee() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [modal4Open, setModal4Open] = useState(false);
    const [modal5Open, setModal5Open] = useState(false);
    const [modal6Open, setModal6Open] = useState(false);

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
    const openModal5 = () => {
        setModal5Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal5 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal5Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };
    const openModal6 = () => {
        setModal6Open(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when modal is open

    }
    const closeModal6 = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default behavior of the click event
        setModal6Open(false);
        document.body.style.overflow = ''; // Re-enable scrolling on the body when modal is closed
    };


    return (
        <>
            <div className="bg-blue-100">
                <div className='lg:container py-20 p-10'>

                    <h3 className='text-2xl font-semibold text-white text-center'>Meet The Team</h3>
                    <p className='text-base font-normal text-white text-center mt-3'>Meet the team and know what they do and love!</p>
                </div>
            </div>
            <div className="bg-white">
                <div className='lg:container py-20 p-10'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-80 gap-y-10">

                        <div className="flex flex-col">
                            <button className="" onClick={openModal1}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user1.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Chamika Abeygunarathna</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>CEO/MANAGING DIRECTOR </h2>
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
                                                <h3 className='text-white text-lg font-light italic mt-4'>Msc in IT Specialisation in Cyber Security</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>First and foremost, Chamika exhibits a profound passion for coding. From the inception of coding the initial program in Java, manipulating it to achieve desired outcomes, an enduring fascination with leveraging software to address practical challenges has been ingrained. Software engineering, perceived as an unceasing puzzle, remains a subject of fervent engagement for this professional. Firmly believing in the transformative potential of programming to enhance global lives, the individual has dedicatedly immersed themselves in this pursuit.</p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                The career trajectory commenced with leading a comprehensive UX/UX overhaul for a nascent startup's website, coupled with the strategic injection of HTML/CSS/JavaScript into renowned merchant websites. What began as a contractual endeavor swiftly evolved into a full-time role, allowing for the continuous expansion of responsibilities as a seasoned software engineer. Notably, in the role of Lead Tech Expert at DEVY.io, the individual successfully orchestrated the implementation of a micro front end within the customer acquisition flow. This innovative approach facilitated dynamic composition based on demographic data and streamlined Continuous Integration/Continuous Deployment (CI/CD) deployments, accelerating the time-to-market for features.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                Beyond coding, the individual is a multifaceted talent, doubling as a musician proficient in guitar and violin. The harmonious intersection between software and music serves as a testament to the individual's diverse intellectual challenges. Both realms demand creativity, organizational skills, sequential processing, and problem-solving, providing an ongoing source of motivation. This relentless pursuit is encapsulated in a perpetual desire to create exquisite, influential entities and share them with the global audience.
                                                </p>
                                            </div>
                                            {/* <Image src="/images/user1.jpg" alt='empolyeeImg' className="rounded-lg" width={177} height={180} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <button className="" onClick={openModal2}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user2.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Buddika Walpita</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>ENGINEERING MANAGERS/SOFTWARE ENGINEER</h2>
                                    
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
                                                <h3 className='text-white text-lg font-light italic mt-4'>B. Tech in Software Technology (2nd Class Upper)</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Buddhika is a dedicated and versatile professional who excels at the confluence of
                                                    technology, education, and leadership. Armed with a Bachelor's degree in Software
                                                    Technology, he has amassed a decade of experience in roles that have shaped his
                                                    multifaceted career. </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Commencing his professional journey as a software developer a decade ago, Buddhika
                                                    brings expertise in WordPress, Woo-commerce, web and software development, and
                                                    design. Throughout the years, he has adeptly managed intricate projects, specializing in
                                                    database management, SEO, and customization, consistently delivering high-quality
                                                    solutions to clients.

                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Buddhika's commitment extends beyond being a Software Engineer; his passion for
                                                    education is evident in his role as an IT instructor. Over a span of seven years, he has
                                                    shared knowledge in NVQ-L3, MS Office, Graphic Design, and ICT courses. Guiding
                                                    students from diverse backgrounds, including school leavers and office professionals, has
                                                    been a fulfilling aspect of his career.

                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Embodying an entrepreneurial spirit, Buddhika serves as the CEO of Cdazz Education
                                                    Institute. In this capacity, he oversees a dynamic institution offering a comprehensive
                                                    range of ICT courses, catering to students from grade 1 to grade 13. The institute
                                                    prepares students for O/L and A/L examinations while nurturing their digital skills in Sri
                                                    Lanka's evolving educational landscape.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    In his role as the Engineering Manager at Ceylon Dazzling Dev (Pvt) Ltd, Buddhika steers
                                                    cutting-edge projects in AI, Machine Learning, Data Science, DevOps, and more. His
                                                    expertise spans various technologies, including Python, Node.js, React, Next.js, and
                                                    multiple programming languages, positioning him at the forefront of innovation in the tech
                                                    industry.

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal3}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user3.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Chamal Wickramarathna </h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>ENGINEERING MANAGERS/SOFTWARE ENGINEER</h2>
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
                                                <h3 className='text-white text-lg font-light italic mt-4'>Msc in Data Science and AI -USJ, BIT - USCS - 1st Class</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Chamal, a seasoned Software Engineer with an impressive 13-year track record, brings a wealth of expertise to the table. With a dedicated focus on data science and artificial intelligence for the past three years, Chamal is driven by an unwavering passion for technology and its boundless possibilities.</p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Possessing a Master's degree in Data Science and AI, Chamal has embarked on a journey that goes beyond conventional programming. This academic pursuit has not only honed his skills but has also allowed him to immerse himself in the intricacies of data-driven insights and intelligent solutions.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Chamal's fascination extends to the potential of IoT and Electronics to revolutionize industries. His keen interest in these transformative technologies fuels a commitment to staying at the forefront of industry trends and advancements. Eager to contribute his expertise to this dynamic domain, Chamal is dedicated to exploring innovative approaches that can shape the future.

                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Collaboration is at the heart of Chamal's professional ethos. Working alongside like-minded professionals, he endeavors to create solutions that are not only innovative but also transformative. The prospect of connecting with others to collectively shape the future drives him forward, and his motto encapsulates this spirit: "Let's connect and explore how we can shape the future together."

                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>In Chamal, you find a seasoned professional whose combination of experience, academic prowess, and passion for cutting-edge technologies positions him as a valuable asset in the ever-evolving landscape of software engineering and data science.

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal4}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user4.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Dilshan Welikala</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4'>TEAM MANAGER</h2>
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
                                                <h3 className='text-white text-lg font-light italic mt-4'>Bsc in Software Engineering</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Dilshan Welikala,an accomplished Web Developer with a degree in Software Engineering from NSBM, boasts a distinguished professional journey that commenced in 2015 as a Trainee PHP Developer. Dilshan's career has evolved seamlessly, encompassing roles such as Web Designer, UI/UX Designer, Visual Designer, and Front-end Developer,showcasing his versatility and depth of expertise.</p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Currently holding the position of Webflow Engineering Manager at CDAZZDEV, Dilshan is a
                                                    driving force behind the leadership and execution of innovative projects. His role involves
                                                    not only overseeing the development process but also actively contributing to the
                                                    ideation and implementation of cutting-edge solutions.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Dilshan's commitment to excellence is evident in his comprehensive skill set, enabling him
                                                    to consistently deliver visually stunning and functionally robust web solutions. His
                                                    proficiency extends beyond traditional development, incorporating elements of design
                                                    and user experience to create a holistic digital experience. With a keen understanding of
                                                    industry trends and emerging technologies, Dilshan stands at the forefront of the dynamic
                                                    field of web development.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Known for making a significant impact in every project he undertakes, Dilshan Welikala is
                                                    a dedicated professional who navigates the intricate landscape of web development with
                                                    precision and creativity. His contributions reflect not only technical prowess but also a
                                                    commitment to staying at the forefront of the ever-evolving digital landscape. Dilshan's
                                                    portfolio is a testament to his ability to transform concepts into tangible, impactful web
                                                    solutions that leave a lasting impression in the competitive realm of web development.

                                                </p>

                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <button className="" onClick={openModal5}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user5.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Menaka Malaviarachchi</h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4 uppercase'>Head of Human Resources</h2>
                                </div>
                            </button>
                        </div>
                        {modal5Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal5}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Menaka Malaviarachchi</h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>Head of Human Resources</h3>
                                                <h3 className='text-white text-lg font-light italic mt-4'>BA(Human Resources)</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Menaka is an experienced specialist with a passion for delivering outstanding service.
                                                    Proactive, result-oriented professional with over 20+ years of experience in different
                                                    industries. Self-motivated, team player with strong organizational and interpersonal skills.
                                                    Always looking to learn new skills, take on extra responsibilities, and grow professionally.
                                                    Menaka Obtained his Degree from the University of Hertfordshire in the UK with a
                                                    second class. During his university period Manaka was able to work for one of the largest
                                                    supermarket chains in the UK and was promoted to Deputy Manager within a very short
                                                    period. He not only works in the UK but also in Bangladesh and Qatar as well.
                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    Menaka started his career as a software engineer and after 5 years he moved to project
                                                    management and then to HR and Operations. During his schooling time was engaged
                                                    with sports including track & field events and cricket.

                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col">
                            <button className="" onClick={openModal6}>
                                <div className="relative">
                                    <div className="employeeImg">
                                        <Image src="/images/user6.jpg" alt='empolyeeImg' width={182} height={158} className='w-full h-full rounded-xl' />
                                    </div>
                                    <h2 className='text-black-100 text-opacity-70 text-sm font-bold mt-4 employee-name'>Roshani Nakandala
                                    </h2>
                                    <h2 className='text-black-100 text-opacity-70 text-sm text-center font-bold mt-4 uppercase'>Human Resource Executive</h2>
                                </div>
                            </button>
                        </div>
                        {modal6Open && (
                            <div id="default-modal" aria-hidden="true" className="flex bg-black-100 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={closeModal6}>
                                <div className="relative p-4 w-full max-w-6xl max-h-full">

                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <a href="#" className="flex flex-col items-center bg-slate-950 border-0 rounded-lg shadow md:flex-row md:max-w-7xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2">

                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                <h2 className='text-white md:text-7xl text-6xl font-bold'>Roshani Nakandala
                                                </h2>
                                                <h3 className='text-white text-lg font-light italic mt-4'>Human Resource Executive</h3>
                                                <h3 className='text-white text-lg font-light italic mt-4'>BA(Business Administration),ANDHRM</h3>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>Roshani is an executive of human resources with over 10 years of experience in different industries.Her background in human resource , administration,finance and banking.</p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    She considers herself a "forever student," eager to both build on her academic
                                                    foundations in human resource, and stays in tune with the latest HR strategies through
                                                    continued coursework and professional development.she completed her Bachelor degree
                                                    in business administration at university of bedfordshire in uk and like as same she
                                                    completed her Advanced national diploma in human resource management at national
                                                    institutes of business management sri lanka.She considers herself a "forever student,"
                                                    eager to both build on her academic foundations in human resource, and stays in tune
                                                    with the latest HR strategies through continued coursework and professional
                                                    development she currently reading charted qualification in human resource management
                                                    at charter institut of personal management srilanka

                                                </p>
                                                <p className='text-white text-base font-normal mt-8 max-w-[100ch]'>
                                                    she believes dedication and commitment in the workplace is key to success—a tenet she
                                                    lives out through her interests in crafting, meditation, gardening, and singing. Roshani is
                                                    currently working as a human resource executive and is always interested in working with
                                                    people.
                                                </p>
                                            </div>
                                            {/* <Image src="/images/user5.jpg" alt='empolyeeImg' className="rounded-lg" width={550} height={753} /> */}
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
