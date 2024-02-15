'use client'
import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import AboutUsHero from '../components/AboutUsHero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutUsCount from '../components/AboutUsCount'
import AboutUsMainContent from '../components/AboutUsMainContent'
import AboutUsEmployee from '../components/AboutUsEmployee'
import { useEffect } from 'react';



function page() {
  useEffect(() => {
    // Add event listener to the entire document
    document.addEventListener('contextmenu',handlecontextmenu)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handlecontextmenu);
    };
  }, []); // Empty dependency array ensures this effect runs only once
  const handlecontextmenu=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    
  }
  return (
    <main>
        {/* <Banner/> */}
        <Nav/>
        {/* hero component of about us page */}
        <AboutUsHero/>
        <AboutUsMainContent/>
        {/* <AboutUsCount/> */}
        <AboutUsEmployee/>
        <Contact/>
        <Footer/>
        
    </main>
  )
}

export default page;


