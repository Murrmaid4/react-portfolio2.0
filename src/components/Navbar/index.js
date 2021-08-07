import React from "react";
import {FaBars} from 'react-icons/fa'
import {FiMoon} from 'react-icons/fi'
import { VscFilePdf } from "react-icons/vsc";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,ThemeToggle, ResumeBtn, ResumeDwnld } from "./NavbarEl.js";

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">BM </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Work">My Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact">Contact Me</NavLinks>
            </NavItem>
            <NavItem>
            <ThemeToggle>
                  <FiMoon/>
              </ThemeToggle>
            </NavItem>
          </NavMenu>
          <ResumeBtn>
              <ResumeDwnld>
              Resume <VscFilePdf />
              </ResumeDwnld>
          </ResumeBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
