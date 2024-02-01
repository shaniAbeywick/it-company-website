import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import AboutUsHero from '../components/AboutUsHero'

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutUsCount from '../components/AboutUsCount'
import AboutUsMainContent from '../components/AboutUsMainContent'
import AboutUsEmployee from '../components/AboutUsEmployee'


function page() {
  return (
    <main>
        <Banner/>
        <Nav/>
        {/* hero component of about us page */}
        <AboutUsHero/>
        <AboutUsMainContent/>
        <AboutUsCount/>
        <AboutUsEmployee/>
        <Contact/>
        <Footer/>
        
    </main>
  )
}

export default page
