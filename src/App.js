import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from './config/theme.js';

import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Work from './components/Work/Work';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
 
 const [theme, setTheme] = useState('light')

 const themeToggler = () => {
   theme === "light" ? setTheme("dark") : setTheme("light")
 }
 
  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
    <Router>
     <Intro/>
    <About/>
    <Work/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
