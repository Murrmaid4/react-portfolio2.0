import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #ffffff00;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  max-width: 1100px;
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
height:80px;
`

export const NavLinks = styled(LinkS)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;


`
