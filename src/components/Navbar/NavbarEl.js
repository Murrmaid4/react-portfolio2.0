import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  background:#F7F7F7;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  font-family: "Style Script", cursive;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const ThemeToggle = styled.button`
  align-items: center;
  background-color: #ffffff00;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 100%;
  padding: 0 1rem;
`;

export const ResumeBtn = styled.nav`
display: flex;
align-items: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const ResumeDwnld = styled(LinkR)`

border-radius: 50px;
background-image: linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%);
background-size: 200% auto;
color: #fff; 
white-space: nowrap;
padding: 15px 22px;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
text-decoration: none;

&:hover{
    transition: all 0.3s ease-in-out;
    background-position: right center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 8px 10px 12px;
}
` 