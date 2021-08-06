import React from "react";
import {Wrapper, IntroContainer, IntroAnimation} from "./Intro.js";

const Intro = () => {
  return (
    <>
      <Wrapper>
        <IntroContainer>
          <IntroAnimation>
            Hello,
            <br />
            My Name is Brandi.
          </IntroAnimation>
        </IntroContainer>
      </Wrapper>
    </>
  );
};

export default Intro;
