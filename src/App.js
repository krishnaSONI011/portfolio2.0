
import './App.css';
import Navbar from './Components/Navbar';
import {DarkmodeProvider} from './Components/context/Darkmode.js'
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skills';
import Project from './Components/Project';
import GetinTouch from './Components/GetinTouch';
import Lastline from './Components/Lastline';
function App() {
  return (
   <>
   <DarkmodeProvider>

   <Navbar/>
   <Home/>
   <About/>
   <Skill/>
   <Project/>
   <GetinTouch/>
   <Lastline/>
   </DarkmodeProvider>
   </>
  );
}

export default App;
