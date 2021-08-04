import Intro from './components/initPage/Intro'
import About from './components/About/About'
import Work from './components/Work/Work';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
     <Intro/>
    <About/>
    <Work/>
    </Router>
  );
}

export default App;
