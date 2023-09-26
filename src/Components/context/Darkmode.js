import { createContext,useContext,useState } from "react";

const Darkmode = createContext()

const useDarkmode = ()=>{
    return useContext(Darkmode)
}

const DarkmodeProvider = ({children}) =>{
    const[darkmode ,setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
      };
    return(
        <Darkmode.Provider value={{darkmode,toggleDarkMode}}>
        {children}
        </Darkmode.Provider>
    )
}

export {useDarkmode,DarkmodeProvider}