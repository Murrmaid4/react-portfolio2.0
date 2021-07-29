import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #ffffff;
`;
export const AboutWrapper = styled.div`
  margin-right: 15%;
  margin-left: 15%;
  padding-top: 50px;
  padding-bottom: 75px;
  /* padding: 0 50px; */
  width: auto;
  height: auto;
  background: #ffffff;
  z-index: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
`;
export const AboutH1 = styled.h1`
  color: purple;
  
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px; 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const Bar = styled.div`
height:5px;
width:75px;
background-color: hsl(172, 75%, 46%);
text-align:center;
margin-top:10px;
`



export const AboutH2 = styled.h2`
  color: #00a29b;

  font-weight: 600;
  font-size: 36px;
  letter-spacing: 1px;
`;

export const AboutH3 = styled.h3`
  color: #00a29b;
  font-family: poppins;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1px;
  font-style: italic;
`;

export const AboutP = styled.p`
  color: #000000;
  font-family: roboto;
  font-weight: 400;
  font-size: 1.3rem;
  line-height:2rem;
  letter-spacing: 1px;
  padding-top: 30px;
  text-align: justify;
`;
