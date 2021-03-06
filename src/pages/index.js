import React, {useState} from "react";
import About from "../components/About/";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Work from "../components/Work/";
import Footer from "../components/Footer/";

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
      <Footer />
    </>
  );
};

export default Home;
