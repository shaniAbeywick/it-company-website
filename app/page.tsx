import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LogoSlider from "./components/LogoSlider";
import Banner from "./components/Banner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Nav from "./components/Nav";




export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner/>
       <Nav/>
       <Hero/>
       <Services/>
       <WhyChooseUs/>
      
    </main>
  );
}
