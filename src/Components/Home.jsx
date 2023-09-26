import React from "react";

import Bgshape from "./Bgshape";
import Codeintro from "./Codeintro";
import { useDarkmode } from "./context/Darkmode.js";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
let Home = () => {
  let { darkmode } = useDarkmode();
  return (
    <>
      <div className="absolute right-0 z-0">
        <Bgshape />
      </div>
      <div className="h-[80vh] flex justify-center items-center font-1 ">
        <div
          className={`flex justify-between w-full px-40 mt-10 ${
            !darkmode ? "text-[#383838]" : "text-white"
          }`}
        >
          {/* name */}
          <div>
            <div className="text-xl py-3">Hello,I'm</div>

            <h1 className={`text-4xl font-extrabold  py-1 `}>KRISHNA SONI</h1>

            <div className={`py-3 text-xl `}>A FULL STACK DEVELOPER</div>
            <button className="btn text-white px-4 py-2 mt-3 rounded">
              Resume
            </button>
            {/* icon box */}
            <div className="flex items-center justify-evenly w-20 mt-2">
              <DiGithubBadge
                className={`text-4xl ${
                  darkmode ? "text-white" : "text-[#6D83F2]"
                }`}
              />
              <BsLinkedin
                className={`text-2xl ${
                  darkmode ? "text-white" : "text-[#6D83F2]"
                }`}
              />
            </div>
          </div>
          {/* code type intro */}
          <div className="z-1 relative">
            <Codeintro />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
