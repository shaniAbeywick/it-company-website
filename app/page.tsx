import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import LogoSlider from "./components/LogoSlider";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import RecentWorks from "./components/RecentWorks";
import Testimonial from "./components/Testimonial";
import InstaFeed from "./components/InstaFeed";
import Footer from "./components/Footer";
import Contact from "./components/Contact";





export default function Home() {
 
  return (
    
    
    <main className="overflow-hidden">
      
        <Banner />
        <Nav />
        <Hero />
        <LogoSlider/>
        <Services />
        <WhyChooseUs />
        <RecentWorks />
        <Testimonial/>
        <InstaFeed/>
        <Contact/>
        <Footer/>
        
      </main>
  );
}
