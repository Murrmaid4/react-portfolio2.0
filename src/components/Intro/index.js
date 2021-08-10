import React from "react";
import {VideoBg, IntroContainer, IntroBg, Caption} from "./Intro.js";
import Video from '../../assets/hero2.mp4';

const Intro = () => {
  return (
   
        <IntroContainer>
          <IntroBg>
           
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           
            
          </IntroBg>
        </IntroContainer>
 
  );
};

export default Intro;
