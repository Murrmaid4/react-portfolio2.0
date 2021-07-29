import React from 'react'
import {AboutContainer, AboutWrapper, AboutH1, Bar, AboutH2, AboutH3, AboutP} from "./About"


const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutWrapper>
                    <AboutH1>
                        The Dev
                        <Bar />
                    </AboutH1>
                    
                    <AboutH3>
                       My name is Brandi
                    </AboutH3>
                    <AboutH3>
                       It rhymes with candy
                    </AboutH3>
                    <AboutH3>
                      and I code quite dandy 
                    </AboutH3>
                    
                    <AboutP>
                    My name is Brandi and i like to code. this is just place holder text/designs would like to add some cool animation or smooth scrolling. please hire me somebody. 
                    </AboutP>
                </AboutWrapper>
            </AboutContainer>  
        </>
    )
}

export default About;
