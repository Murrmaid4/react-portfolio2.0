import React from "react";
import Hero from "../components/Hero"
import Bio from "../components/Bio"




function About() {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/flagged/photo-1570732988278-968808ba2dcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" >
                <h1> Brandi Murray</h1>
                <h2>Full Stack Developer</h2>
            </Hero> 
            <Bio></Bio>
        </div>
    )
}

export default About
