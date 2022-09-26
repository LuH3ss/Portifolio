import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import {themeContext} from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode =  theme.state.darkMode


  return (
    <div className="App"
    style={
      {
        background: darkMode? 'black' : '',
        color: darkMode? 'white' : ''
      }
    }>
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
