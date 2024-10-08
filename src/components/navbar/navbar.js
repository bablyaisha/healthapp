import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll,scroller} from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import {Nav,
NavbarContainer, 
NavLogo,
MobileIcon, 
NavMenu, 
NavItem, 
NavLinks,
} from './navbarElement'
import logo from '../../images/logo.png';

function Navbar({toggle}) {
  const[scrollNav, setScrollNav]= useState(false);
   
   const changeNav = ()=>{
    if(window.scrollY >=80){
      setScrollNav(true); 
    }else{
      setScrollNav(false);
    }
   }

   useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav); // Clean up event listener
   },[])

   const toggleHome= () =>{
     scroll.scrollToTop();
   }

   const handleScrollToSection = (section) => {
    scroller.scrollTo(section, {
        smooth: true,
         duration: 400, 
         spy: true,
         exact:'true', 
         offset: -5 // Adjust this offset based on your header height
    });
  };

  return (
    <div>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
        <img src={logo} alt='logo' style={{width:'40px', height:'40px', marginRight:'10px'}} />
        The Health App</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars /> 
        </MobileIcon>
        <NavMenu> 
        {/* <NavItem>
         <NavLinks
        //  smooth= {true}
        //  duration= {400} 
        //  spy= {true}
        //  exact= 'true' 
        //  offset= {-5} 
          onClick={() => handleScrollToSection('about')}
         >About</NavLinks>
        </NavItem>  */}
        {/* <NavItem>
         <NavLinks
        onClick={() => handleScrollToSection('discover')}
         >Contact Us</NavLinks>
        </NavItem> */}
        <NavItem>
         <NavLinks 
          onClick={() => handleScrollToSection('services')}
         >Services</NavLinks>
        </NavItem>
        {/* Add the link to the form page */}
        {/* <NavItem>
                <NavLinks as={Link} to="/remove-details">Form Details</NavLinks> 
              </NavItem> */}
        {/* <NavItem>
         <NavLinks to='booking'
         smooth={true} 
         duration={400} 
         spy={true} 
         exact='true' 
         offset={-5}
         >Booking Appointment</NavLinks>
        </NavItem> */}
        </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
