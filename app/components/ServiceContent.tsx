import React from 'react'
import Image from 'next/image'


function ServiceContent() {
  return (

    <div className="bg-white">
      <div className='lg:container p-10 pt-28'>
        <h1 className='lg:text-6xl text-5xl text-black-100 text-center font-bold'>
          <span className='text-black-100'>
            Our
          </span>{' '}
          <span className='text-blue-300'>
            Services
          </span>


        </h1>
        {/* <h2 className='lg:text-2xl text-xl text-black-100 text-center font-medium text-opacity-65 mt-3 mb-6'>Explore What “Full-Service” Digital Can Do for You</h2> */}

      </div>
      <div className='grid grid-cols-1'>
        <div className='flex flex-row'>
          <div className='flex-1 lg:block hidden'>
            <Image src="/images/igor-miske-Px3iBXV-4TU-unsplash.jpg" alt='serviceImg' width={960} height={540} className="w-full h-full" />
          </div>
          <div className="py-20 bg-orange-100 border-0 rounded-0 shadow-none dark:bg-gray-800 dark:border-gray-700 flex-1 px-8 lg:px-0">
            <h1 className='lg:text-5xl text-4xl text-black-100 font-extrabold lg:mx-20'>Web App Development</h1>
            {/* <h3 className='lg:text-xl text-lg text-black-100 text-opacity-75 font-semibold my-4 lg:mx-20'>Utilising data driven tactics to deliver high return on investment from your performance marketing budget.</h3> */}
            <ul className="space-y-2 mt-4 text-black-100 text-opacity-70 list-disc list-outside dark:text-gray-400 lg:text-lg text-base font-normal lg:mx-20">
              <li className=''>
              Fast loading
              </li>
              <li>
              Must be User-Friendly
              </li>
              <li>
              Must be Mobile-Responsive
              </li>
              <li>
              Has Cross Browser Compatibility
              </li>
              <li>
              Has Optimized Content
              </li>
              <li>
              Has Clear and Effective CTAs
              </li>
              <li>
              Optimized for Search Engines
              </li>
            </ul>
            <a href="/contact" className="lg:mx-20 mt-10 inline-flex items-center px-8 py-4 lg:text-xl text-md font-medium text-center text-white bg-blue-300 rounded-md hover:bg-blue-300 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg shadow-neutral-400">
              Get in Touch

            </a>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className="py-20 bg-white border-0 rounded-0 shadow-none dark:bg-gray-800 dark:border-gray-700 flex-1 px-8 lg:px-0">
            <h1 className='lg:text-5xl text-4xl text-black-100 font-extrabold lg:mx-20'>Mobile App Development</h1>
            {/* <h3 className='lg:text-xl text-lg text-black-100 text-opacity-75 font-semibold my-4 lg:mx-20'>Utilising data driven tactics to deliver high return on investment from your performance marketing budget.</h3> */}
            <ul className="space-y-2 mt-4 text-black-100 text-opacity-70 list-disc list-outside dark:text-gray-400 lg:text-lg text-base font-normal lg:mx-20">
              <li className=''>
              Well-designed user interface (UI)
              </li>
              <li>
              Fast loading time
              </li>
              <li>
              Strong data protection
              </li>
              <li>
              Excellent user support
              </li>
              <li>
              Built-in integrations
              </li>
              <li>
              User experience and interface design
              </li>
              <li>
              Mobile OS versatility
              </li>
              <li>
              Offline access
              </li>
            </ul>
            <a href="/contact" className="lg:mx-20 mt-10 inline-flex items-center px-8 py-4 lg:text-xl text-md font-medium text-center text-white bg-blue-300 rounded-md hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg shadow-neutral-400">
              Get in Touch

            </a>
          </div>
          <div className='flex-1 lg:block hidden'>
            <Image src="/images/tran-mau-tri-tam-QwAL909kTiY-unsplash.jpg" alt='serviceImg' width={960} height={540} className="w-full h-full" />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex-1 lg:block hidden'>
            <Image src="/images/computer-1591018.jpg" alt='serviceImg' width={960} height={540} className="w-full h-full" />
          </div>


          <div className="py-20 bg-orange-100 border-0 rounded-0 shadow-none dark:bg-gray-800 dark:border-gray-700 flex-1 px-8 lg:px-0">
            <h1 className='lg:text-5xl text-4xl text-black-100 font-extrabold lg:mx-20'>Cyber Security</h1>
            {/* <h3 className='lg:text-xl text-lg text-black-100 text-opacity-75 font-semibold my-4 lg:mx-20'>Utilising data driven tactics to deliver high return on investment from your performance marketing budget.</h3> */}
            <ul className="space-y-2 mt-4 text-black-100 text-opacity-70 list-disc list-outside dark:text-gray-400 lg:text-lg text-base font-normal lg:mx-20">
              <li className=''>
              Protection of Sensitive Information: In an era where data is often referred to as the new currency, the protection of sensitive information is paramount.
              </li>
              <li>
              Prevention of Cyber Attacks
              </li>
              <li>
              Safeguarding Critical Infrastructure
              </li>
              <li>
              Mitigation of Financial Losses
              </li>
              <li>
              Preservation of Individual Privacy
              </li>
              <li>
              Protection Against Evolving Threats
              </li>
              <li>
              Preservation of National Security
              </li>
              <li>
              Ensuring Business Continuity
              </li>
            </ul>
            <a href="/contact" className="lg:mx-20 mt-10 inline-flex items-center px-8 py-4 lg:text-xl text-base font-medium text-center text-white bg-blue-300 rounded-md hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg shadow-neutral-400">
              Get in Touch

            </a>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className="py-20 bg-white border-0 rounded-0 shadow-none dark:bg-gray-800 dark:border-gray-700 flex-1 px-8 lg:px-0">
            <h1 className='lg:text-5xl text-4xl text-black-100 font-extrabold lg:mx-20'>AI Development</h1>
            {/* <h3 className='lg:text-xl text-lg text-black-100 text-opacity-75 font-semibold my-4 lg:mx-20'>Utilising data driven tactics to deliver high return on investment from your performance marketing budget.</h3> */}
            <ul className="space-y-2 mt-4 text-black-100 text-opacity-70 list-disc list-outside dark:text-gray-400 lg:text-lg text-base font-normal lg:mx-20">
              <li className=''>
              Facial Recognition
              </li>
              <li>
              Deep Learning
              </li>
              <li>
              Futuristic
              </li>
              <li>
              Ingestion of Data
              </li>
              <li>
              Chatbots
              </li>
              <li>
              Cloud Computing
              </li>
              <li>
              Elimination of Mundane Tasks
              </li>
              <li>
              Automation
              </li>
              <li>
              Quantum Computing
              </li>
              <li>
              Imitates Human Cognition
              </li>
              <li>
              Prevention from Natural Disasters
              </li>
            </ul>
            <a href="/contact" className="lg:mx-20 mt-10 inline-flex items-center px-8 py-4 lg:text-xl text-lg font-medium text-center text-white bg-blue-300 rounded-md hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg shadow-neutral-400">
              Get in Touch

            </a>
          </div>
          <div className='flex-1 lg:block hidden'>
            <Image src="/images/on-device-generative-ai-with-sub-10-billion-parameter-models.jpg" alt='serviceImg' width={960} height={540} className="w-full h-full" />
          </div>
        </div>
        {/* <div className='flex flex-row'>
        <div className='flex-1 lg:block hidden'>
          <Image src="/images/service_back_Img_5.jpg" alt='serviceImg' width={960} height={540} className="w-full h-full " />
          </div>

          <div className="py-20 bg-orange-300 border-0 rounded-0 shadow-none dark:bg-gray-800 dark:border-gray-700 flex-1 px-8 lg:px-0">
            <h1 className='lg:text-5xl text-4xl text-black-100 font-extrabold lg:mx-20'>Performance Marketing</h1>
            <h3 className='lg:text-xl text-lg text-black-100 text-opacity-75 font-semibold my-4 lg:mx-20'>Utilising data driven tactics to deliver high return on investment from your performance marketing budget.</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-outside dark:text-gray-400 lg:text-lg text-base font-normal lg:mx-20">
              <li className=''>
                Customized multi-channel growth strategies across Google Ads, Meta, LinkedIn, TikTok, Snapchat & Pinterest.
              </li>
              <li>
                Precise targeting
              </li>
              <li>
                Funnel development
              </li>
              <li>
                Competitor research
              </li>
              
            </ul>
            <a href="#" className="lg:mx-20 mt-10 inline-flex items-center px-8 py-4 lg:text-xl text-lg font-medium text-center text-white bg-blue-300 rounded-md hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg shadow-neutral-400">
              Get in Touch

            </a>
          </div>
        </div> */}
      </div>

    </div>



  )
}

export default ServiceContent
