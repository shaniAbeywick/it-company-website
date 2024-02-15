'use client'

import Image from "next/image";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import RecentWorks from "./components/RecentWorks";
import Testimonial from "./components/Testimonial";
import InstaFeed from "./components/InstaFeed";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useEffect } from 'react';






export default function Home() {

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


    <main className="overflow-hidden">

      {/* <Banner /> */}
      {/* <Nav /> */}
      <Hero />
      {/* <LogoSlider/> */}
      <Services />
      <WhyChooseUs />
      <RecentWorks />
      {/* <Testimonial/> */}
      <InstaFeed />
      <Contact />
      <Footer />

    </main>
  );
}
