import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import ServiceMainContent from '../components/ServiceMainContent'
import ServiceHero from '../components/ServiceHero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ServiceContent from '../components/ServiceContent'


function page() {
  return (
    <main className="overflow-hidden">
      {/* <Banner/> */}
      <Nav/>
      <ServiceHero/>
      <ServiceMainContent/>
      <ServiceContent/>
      <Contact/>
      <Footer/>
      
      

    </main>
  )
}

export default page
