import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./components/Projects"


import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <About />
     <Projects />
     
      <Footer />
    </Router>
  );
}

export default App;
