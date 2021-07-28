import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
   
 } from "./NavbarElem.js";

const Header = () => {
  return (
    <>
    <Nav>    
      <NavbarContainer>
          <NavLogo to='/'>
            [ Brandi Murray ]
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">My Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Header
