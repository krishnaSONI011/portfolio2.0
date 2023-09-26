
import './App.css';
import Navbar from './Components/Navbar';
import {DarkmodeProvider} from './Components/context/Darkmode.js'
function App() {
  return (
   <>
   <DarkmodeProvider>

   <Navbar/>
   </DarkmodeProvider>
   </>
  );
}

export default App;
