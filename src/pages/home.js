import React , {useState} from 'react'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import HeroSection from '../components/OverviewSection/heroSec'
import InfoSection from '../components/InfoSection/info';
import { homeObjOne,homeObjTwo} from '../components/InfoSection/Data';
import Services from '../components/Services/service';
import Footer from '../components/Footer/footer';

function Home() {
    const [isOpen, setIsOpen]= useState(false);
    
    const toggle= () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar  toggle={toggle}/> 
      <HeroSection />
      <section id='about'>
      <InfoSection {...homeObjOne}/>
      </section>
      <section id='discover'>
      <InfoSection {...homeObjTwo}/>
      </section>

      <section id='services'>
      <Services />
      </section>
      <Footer />
    </>
  )
}

export default Home
