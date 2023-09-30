
import './App.css';
import Navbar from './Components/Navbar';
import {DarkmodeProvider} from './Components/context/Darkmode.js'
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skills';
function App() {
  return (
   <>
   <DarkmodeProvider>

   <Navbar/>
   <Home/>
   <About/>
   <Skill/>
   </DarkmodeProvider>
   </>
  );
}

export default App;
