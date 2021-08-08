import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./config/theme.js";

import Home from './pages'

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
       <Home/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
