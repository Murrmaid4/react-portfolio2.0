import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  Bar
} from "./Projects";
import astroscope from "../../assets/astroscope.png";
import DaBeatz from "../../assets/da-beatz.jpg"
import budget from "../../assets/budget-tracker.jpg";
import empDir from "../../assets/ss2.jpg";
import workDay from "../../assets/work-day-ss.jpg";
import retailhut from "../../assets/retailhut.jpg"
import "./Projects.css"

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>
          My Work
          <Bar />
        </ProjectsH1 >

<div className="projects">
        <div class="project-card">
  <img src={astroscope} alt="Astroscope" />
  <div className="project-caption">
    <h2>Astroscope<span>HTML / CSS / JavaScript / Photoshop</span></h2>
    <p>A web app that shows the user's daily horoscope along with NASA's astronomy photo of the day.</p><a href="https://mascarelloa.github.io/astroscope/"  rel="noreferrer" target="_blank" class="project-button">Demo</a><a href="https://github.com/mascarelloa/astroscope" target="_blank"  rel="noreferrer" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={DaBeatz} alt="DaBeatz" />
  <div className="project-caption">
    <h2>DaBeatz<span>HandleBars / MySql / Node / Express</span></h2>
    <p>A web app that lets users create and share playlists and artists.</p><a href="https://da-beatz.herokuapp.com/" target="_blank"  rel="noreferrer" class="project-button">Demo</a><a href="https://github.com/Murrmaid4/daBeatz"  rel="noreferrer" target="_blank" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={budget} alt="budget tracker" />
  <div className="project-caption">
    <h2>Budget Tracker<span>React/Service Workers</span></h2>
    <p>An app that allows finance tracking on AND offline</p><a href="https://budgetpls.herokuapp.com/" target="_blank" rel="noreferrer" class="project-button">Demo</a><a href="https://github.com/Murrmaid4/budget-tracker/" target="_blank"  rel="noreferrer" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={empDir} alt="employee directory" />
  <div className="project-caption">
    <h2>Employee Directory<span>HTML / CSS / JavaScript/ React</span></h2>
    <p>A React app that allows users to search through a database or filter by name</p><a href="https://murrmaid4.github.io/user-directory/" target="_blank"  rel="noreferrer" class="project-button">Demo</a><a href="https://github.com/Murrmaid4/user-directory" target="_blank" rel="noreferrer" class="project-button">Repo</a>
  </div>
</div>
<div class="project-card">
  <img src={workDay} alt="WorkDay Scheduler" />
  <div className="project-caption">
    <h2>WorkDay Scheduler<span>HTML / CSS / JavaScript/ Moment.js </span></h2>
    <p>An app for your day planning needs!</p><a href="https://murrmaid4.github.io/Work-Day-Scheduler/" target="_blank"  rel="noreferrer" class="project-button">Demo</a><a href="https://github.com/Murrmaid4/Work-Day-Scheduler"  rel="noreferrer" target="_blank" class="project-button">Repo</a>
  </div>
</div>

<div class="project-card">
  <img src={retailhut} alt="RetailHut" />
  <div className="project-caption">
    <h2>RetailHut<span>HTML / CSS / JavaScript</span></h2>
    <p>The Store of Stores!</p><a href="https://retail-hut.herokuapp.com/" target="_blank"  rel="noreferrer" class="project-button">Demo</a><a href="https://github.com/graysonbloskas/retail-hut" target="_blank"  rel="noreferrer" class="project-button">Repo</a>
  </div>
</div>

</div>
        
      </ProjectsContainer>
    </>
  );
};

export default Projects;
