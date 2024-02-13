'use client'
import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import ContactUsHero from '../components/ContactUsHero'
import ContactUsMainContent from '../components/ContactUsMainContent'
import Footer from '../components/Footer'
import { useEffect } from 'react';


function page() {
  
  // useEffect(() => {
  //   // Add event listener to the entire document
  //   document.addEventListener('contextmenu',handlecontextmenu)

  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('contextmenu', handlecontextmenu);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once
  // const handlecontextmenu=(e: { preventDefault: () => void; })=>{
  //   e.preventDefault()
    
  // }
  return (
    <main className='overflow-hidden'>
        {/* <Banner/> */}
        <Nav/>
        <ContactUsHero/>
        <ContactUsMainContent/>
        <Footer/>

    </main>
  )
}

export default page
