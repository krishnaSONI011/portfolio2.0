import React from "react";
import emo from "../emo.png";
import { useDarkmode } from "./context/Darkmode.js";
export default function Phone() {
    let {darkmode} = useDarkmode()
  return (
    
    <div className={`h-[500px] w-[20vw] border-4 border-[#6D83F2] rounded-xl  ${darkmode ? "bg-[#383838]" : "bg-white"}`}>
      <div className="flex justify-center items-center p-1">
        <div className="w-[70px] h-[20px] border-black bg-black rounded-lg"></div>
      </div>
      <div className="flex justify-center items-center h-5/6">
        <img src={emo} alt="" />
      </div>

      <div className="flex items-end h-[50px] justify-center">
        <div className="w-[100px] h-[10px] border-black bg-black rounded-lg"></div>
      </div>
    </div>
    
  );
}
