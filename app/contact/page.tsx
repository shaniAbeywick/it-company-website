import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import ContactUsHero from '../components/ContactUsHero'
import ContactUsMainContent from '../components/ContactUsMainContent'
import Footer from '../components/Footer'

function page() {
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
