
import './App.css';
import Navbar from './Components/Navbar';
import {DarkmodeProvider} from './Components/context/Darkmode.js'
import Home from './Components/Home';
function App() {
  return (
   <>
   <DarkmodeProvider>

   <Navbar/>
   <Home/>
   </DarkmodeProvider>
   </>
  );
}

export default App;
