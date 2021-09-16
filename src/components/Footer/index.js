import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import {GrLinkedin, GrDocumentDownload} from 'react-icons/gr'
import { FooterContainer, FooterMenu } from './Footer'

const Footer = () => {
    return (
       <FooterContainer>
           <FooterMenu>
               
               <FaGithub/>
               <FiMail/>
               <GrLinkedin/>
               <GrDocumentDownload/>
           </FooterMenu>
           
       </FooterContainer>
    )
}

export default Footer
