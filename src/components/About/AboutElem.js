import styled from 'styled-components'

export const AboutContainer = styled.div`
background-color: #F7F7F7; 
 @media screen and (max-width: 768px){
     padding: 100px 0;
 }
`

export const AbWrapper = styled.div`
display: grid; 
z-index: 1;
height: 860px;
width: 100%;
margin-right:  auto;
margin-left: auto;
padding: 0 24px; 
justify-content: center;

`

export const AbRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas:  'col1 col2';


@media screen and (max-width: 768px){
    grid-template-areas:  'col1 col1' 'col2 col2'; 
 
}
`

export const Column1 = styled.div`
margin-bottom: 15px; 
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px; 
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0; 
padding-bottom: 60px;  

`

export const TopLine = styled.p`
color: #EE8C82;
font-size: 16px;
text-transform: uppercase; 
letter-spacing: 1.4px;
line-height: 16px;
font-weight: 700;
margin-bottom: 16px;
`

export const Heading = styled.h2`
font-size: 48px; 
margin-bottom: 24px;
line-height: 1.1;
font-weight: 600;

@media screen and (max-width:668px) {

font-size: 32px;
}
`

export const Subtitle = styled.p`
font-size: 16px; 
color: #000;

`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;   
`

export const Img = styled.img`
width: 100%; 
margin: 0 0 10px 0; 
padding-right: 0;  

`