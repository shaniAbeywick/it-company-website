
import React from 'react'
import dynamic from 'next/dynamic';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Set ssr to false to enable client-side rendering only
  });




function Testimonial() {
   
    return (
        <div className='bg-blue-100'>
            <div className='lg:container p-10'>
                <h3 className='sm:text-5xl text-3xl font-bold text-center text-white'>
                    Don't just take our word for it
                </h3>
                <p className='sm:text-base text-sm font-normal text-white text-center mx-auto max-w-[60ch] mt-6 mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore obcaecati Laudantium dolore obcaecati.</p>
                <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className='item'>
                        <h4>1</h4>
                    </div>
                    <div className='item'>
                        <h4>2</h4>
                    </div>
                    <div className='item'>
                        <h4>3</h4>
                    </div>
                    <div className='item'>
                        <h4>4</h4>
                    </div>


                </OwlCarousel>;





            </div>
        </div>
    )
}

export default Testimonial
