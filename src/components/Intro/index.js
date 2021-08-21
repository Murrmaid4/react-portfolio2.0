import React from "react";
import {
  VideoBg,
  IntroContainer,
  IntroBg,
  CaptionH1,
  IntroContent,
  CaptionP,
} from "./Intro.js";
import Video from "../../assets/hero2.mp4";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </IntroBg>
      <IntroContent>
        <CaptionH1>
          Hello, <br />
          
          My name is Brandi...
        </CaptionH1>
        <CaptionP>
       ...and I love to code!
        </CaptionP>
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
