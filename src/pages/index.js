import React, {useState} from "react";
import About from "../components/About/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Work from "../components/Work/Work";

const Home = () => {
    const [isOpen, setIsOpen] =  useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Intro />
      <About />
      <Work />
    </>
  );
};

export default Home;
