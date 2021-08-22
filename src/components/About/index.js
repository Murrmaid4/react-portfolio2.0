import React from "react";
import aboutImg from "../../assets/computer.svg"

import {
  AboutContainer,
  AbWrapper,
  AbRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img

} from "./AboutElem";

function About() {
  return (
    <>
      <AboutContainer>
        <AbWrapper>
          <AbRow>
            <Column1>
              <TextWrapper>
                <TopLine>Who am I?</TopLine>
                <Heading>Brandi Murray <br/> Full Stack Developer</Heading>
                <Subtitle>An ambitious and dedicated Full Stack Developer with an eye for detail and passion for learning. <br/>When I'm not coding you can find me binge-watching Hulu, baking desserts, or raising my two weiner <s>dogs</s> sons. </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={aboutImg} />
            </ImgWrap>
            </Column2>
          </AbRow>
        </AbWrapper>
      </AboutContainer>
    </>
  );
}

export default About;
