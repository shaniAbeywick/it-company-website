import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LogoSlider from "./components/LogoSlider";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
       <Hero/>
       <LogoSlider/>
      
    </main>
  );
}
