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



export default function Home() {
  return (
    
    <main className="overflow-hidden">
        <Banner />
        <Nav />
        <Hero />
        <Services />
        <WhyChooseUs />
        <RecentWorks />
        <Testimonial/>
        

      </main>
  );
}
