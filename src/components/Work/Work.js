import styled from "styled-components";

export const WorkContainer = styled.div`
 height: 1200px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #EE8C82;


 @media screen and (max-width:768px) {

    height: 1600px;

 }


 `


export const WorkWrapper = styled.div`
margin: 0 auto;
display: grid; 
grid-template-columns: 1fr 1fr; 
align-items: center;
grid-gap: 16px;
padding:0 50px; 



@media screen and (max-width:998px){
grid-template-columns: 1fr;
padding: 0 20px;

}
`

export const WorksCard = styled.div`
background: #fff; 
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
max-height: 500px; 
padding: 30px; 
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

`

export const CardImg = styled.img` 
height: 250px;
width: 60%; 
margin-bottom: 10px;
`

export const WorkH1 = styled.h1`
font-size: 2.5rem;
color: #fff; 
margin-bottom: 64px; 

@media screen and (max-width:480px){
    font-size:2rem;    
}

`

export const WorkTitle = styled.h2`
font-size: 1.8rem;
letter-spacing: .5rem;
margin-bottom: 10px; 
`

export const WorkP = styled.p`
font-size: 1rem;
text-align: center;

`