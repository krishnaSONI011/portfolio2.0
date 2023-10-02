import React from "react";
import {useDarkmode} from './context/Darkmode.js'
let Me = () => {
    let {darkmode} = useDarkmode()
  return (
    <>
      <div className={`w-full md:w-[50vw] shadow-lg rounded-2xl py-10  ${darkmode ? "bg-[#383838]" : "bg-white"}`}>
        <div className="text-[#6A98F0] text-xl text-center p-2">
          ABOUT ME <span className="text-2xl">&#128075;</span>
        </div>
        <div className="px-4">
          <p className={`text-xl font-2 text-justify ${darkmode ? 'text-white' : 'text-black'}`} >
            Hi, I'm <span className="text-[#6D83F2]">Krishna Soni</span>, a self-taught passionate <span className="text-[#6D83F2] ">Full Stack Developer </span>
            from India, currently working  as a Freelancer.
            I've been building stuff on the web since when I was in 10th
            standard, I've made countless side projects and I also posses
            magical powers of using react to build delightful user interfaces. I
            also love doing open source development.
          </p>
        </div>
      </div>
    </>
  );
};

export default Me;
