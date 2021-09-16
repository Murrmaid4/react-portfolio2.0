import React from "react";

import  CardImg1 from "../../assets/astroscope.png";

import  CardImg2 from "../../assets/da-beatz.jpg";

import  CardImg3 from "../../assets/retailhut.jpg";

import {
  WorkContainer,
  WorkH1,
  WorkWrapper,
  WorksCard,
  CardImg,
  WorkTitle,
  WorkP,
} from "./Work";

const Work = () => {
  return (
    <WorkContainer>
      <WorkH1>the Work</WorkH1>
      <WorkWrapper>
        <WorksCard>
        <WorkTitle>Astroscope</WorkTitle>
          <CardImg src={CardImg1} /> 
          <WorkP>
            Web app that displays the user's daily horoscope and a snapshot of
            the constellation based on their location and the date.
          </WorkP>
        </WorksCard>
        <WorksCard>
        <WorkTitle>DaBeatz.</WorkTitle>
          <CardImg src={CardImg2} />
          <WorkP>
            A playlist creator and song/artist database searcher using the mvc
            structure and Handlebars as the view engine.
          </WorkP>
        </WorksCard>
        <WorksCard>
        <WorkTitle>Retailhut</WorkTitle>
          <CardImg src={CardImg3} />
          <WorkP>
            An ecommerce app for small businesses using React, Javascript, Node and more!
          </WorkP>
        </WorksCard>
        <WorksCard>
        <WorkTitle>Fitness Tracker</WorkTitle>
          <CardImg />
          <WorkP>
            An ecommerce app for small businesses using React, Javascript, Node and more!
          </WorkP>
        </WorksCard>
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
