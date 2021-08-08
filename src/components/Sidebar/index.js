import React from "react";
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarLink, SidebarMenu} from "./SidebarEl";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About Me
                </SidebarLink>
                <SidebarLink to="work" onClick={toggle}>
                    My Work
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact Me
                </SidebarLink>
            </SidebarMenu>
           
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
