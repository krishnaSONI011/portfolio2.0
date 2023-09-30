import React,{useEffect} from "react";
import { useDarkmode } from "./context/Darkmode";
export default function Navbar() {
    let {darkmode,toggleDarkMode} = useDarkmode();
    
    useEffect(()=>{
        document.body.style.backgroundColor = darkmode ? '#191919' : 'white'
    },[darkmode])

  return (
    <div className={`w-full z-10 fixed py-3 shadow-md ${darkmode ? 'bg-[#232323]' : 'bg-white'} ${darkmode ? 'text-white' : 'text-black'}`} >
      <div className="flex justify-between text-lg px-12 ">
        {/* Name logo */}
        <div className="logo font-1 font-semibold text-2xl">
          <span className="text-[#6D83F2] ">&lt;</span>Krishna
          <span className="text-[#6D83F2]"> /&gt;</span>
        </div>

        {/* nav links */}

        <div className="flex">
          <ul className="flex text-[#6A98F0] font-1 mr-10">
            <li className={` ${darkmode ? 'hover:text-white' : 'hover:text-[#383838]'} cursor-pointer px-3`}>Home</li>
            <li className={` ${darkmode ? 'hover:text-white' : 'hover:text-[#383838]'} cursor-pointer px-3`}>About  </li>
            <li className={`${darkmode ? 'hover:text-white' : 'hover:text-[#383838]'} cursor-pointer px-3`}>Skill</li>
            <li className={` ${darkmode ? 'hover:text-white' : 'hover:text-[#383838]'} cursor-pointer px-3`}>
              Project
            </li>
            <li className={` ${darkmode ? 'hover:text-white' : 'hover:text-[#383838]'} cursor-pointer px-3`}>
              Contact us
            </li>
          </ul>
          <div className={` ${darkmode ? "bg-[#383838]" : "bg-[#C7D0FF]"} relative rounded-2xl px-10`} >
             
            <div className={`flex items-center justify-center absolute ${darkmode ? 'left-9' :'left-1'} bg-[#6D83F2] rounded-3xl w-10 text-xs top-[3px] bottom-0 py-1 text-white font-semibold cursor-pointer h-[27px] transition-all`} onClick={toggleDarkMode}  >
                   {darkmode ?"LIGHT" :'DARK'}
            </div>
          </div>
        </div>

        {/* bottom for dark */}
      </div>
    </div>
  );
}
