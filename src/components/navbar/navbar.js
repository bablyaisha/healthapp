import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {Nav,
NavbarContainer, 
NavLogo,
MobileIcon, 
NavMenu, 
NavItem, 
NavLinks,
NavBtn, NavBtnLink
} from './navbarElement'


function Navbar({toggle}) {
  const[scrollNav, setScrollNav]= useState(true);
   
   const changeNav = ()=>{
    if(window.scrollY >=80){
      setScrollNav(false); 
    }else{
      setScrollNav(true);
    }
   }

   useEffect(() => {
    window.addEventListener('scroll', changeNav)
   },[])

   const toggleHome= () =>{
     scroll.scrollToTop();
   }
  return (
    <div>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>The Health App</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars /> 
        </MobileIcon>
        <NavMenu> 
        <NavItem>
         <NavLinks to='about'
         smooth={true} 
         duration={400} 
         spy={true} 
         exact='true' 
         offset={-5}
         >About</NavLinks>
        </NavItem>
        <NavItem>
         <NavLinks to='discover'
         smooth={true} 
         duration={400} 
         spy={true} 
         exact='true' 
         offset={-5}
         >Discover</NavLinks>
        </NavItem>
        <NavItem>
         <NavLinks to='services'
         smooth={true} 
         duration={400} 
         spy={true} 
         exact='true' 
         offset={-5}
         >Services</NavLinks>
        </NavItem>
        <NavItem>
         <NavLinks to='signup'
         smooth={true} 
         duration={400} 
         spy={true} 
         exact='true' 
         offset={-5}
         >Sign Up</NavLinks>
        </NavItem>
        </NavMenu>
        <NavBtn>
           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
