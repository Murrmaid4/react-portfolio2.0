import React from 'react'
import { FaRegFilePdf, FaGithub, FaLinkedin} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'

import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, FooterLinksWrapper, 
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                  
                  <FooterLink to="/">How to Contribute</FooterLink>
                  <FooterLink to="/">Email Me</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>My Work</FooterLinkTitle>
                  <FooterLink to="/projects"> Click here to see </FooterLink>
                  <FooterLink to="/projects"> more of my work..</FooterLink>
                
              </FooterLinkItems>
          </FooterLinksWrapper>
          
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
           
            <WebsiteRights>
              Brandi Murray  © {new Date().getFullYear()}     All Rights Reserved. 
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="mailto:pritchettb14@gmail.com"  aria-label="email">
                <GoMail />
              </SocialIconLink>
              <SocialIconLink href="https://docs.google.com/document/d/1mcG7GsG1nxvcwRmkKa-aTJXYTIbJpRws4HfNbrYqXiM/edit?usp=sharing" target="_blank" aria-label="Instagram">
                <FaRegFilePdf />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Murrmaid4" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https:www.linkedin.com/in/brandi-murray-04666220b" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
