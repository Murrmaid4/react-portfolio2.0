import styled from 'styled-components'



export const IntroContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index:1;

/* add :before styles */

`
export const IntroBg = styled.div`
position:absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;

`

export const Caption = styled.h1`
color: #fff;
font-size: 64px;
`


export const IntroContent = styled.div`
z-index: 3; 
position: absolute;
padding: 8px 24px; 
display: flex;
flex-direction: column;
align-items: center;
`

export const CaptionH1 = styled.h1`
color: #fff;
font-size: 72px; 
text-align: center;

@media screen and (max-width: 768px) {

font-size: 50px;
}

@media screen and (max-width: 480px) {

font-size: 32px;
}
`
export const CaptionP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 32px;
text-align: center;

@media screen and (max-width: 768px) {

font-size: 24px;
}

@media screen and (max-width: 480px) {

font-size: 18px;
}

`



