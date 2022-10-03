import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './navbarElement'

function Navbar() {
  return (
    <div>
      <Nav>
        <NavbarContainer>
        <NavLogo to="/"> dolla</NavLogo>
        <h1> Hyyy </h1> 
        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar
