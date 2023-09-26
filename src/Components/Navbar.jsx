import React from "react";

export default function Navbar() {
  return (
    <div className="w-100 sticky py-3 shadow-md">
      <div className="flex justify-between text-lg px-7">
        {/* Name logo */}
        <div className="logo font-1 font-semibold text-2xl">
          <span className="text-[#6D83F2] ">&lt;</span>Krishna
          <span className="text-[#6D83F2]"> /&gt;</span>
        </div>

        {/* nav links */}

        <div className="flex">
          <ul className="flex text-[#6A98F0] font-1">
            <li className="hover:text-[#383838] cursor-pointer px-3">Home</li>
            <li className="hover:text-[#383838] cursor-pointer px-3">Skill</li>
            <li className="hover:text-[#383838] cursor-pointer px-3">
              Project
            </li>
            <li className="hover:text-[#383838] cursor-pointer px-3 ">
              Contact us
            </li>
          </ul>
          <div className="bg-[#C7D0FF] relative rounded-2xl px-10">
             
            <div className=" flex items-center justify-center absolute left-1 bg-[#6D83F2] rounded-3xl w-10 text-xs top-[3px] bottom-0 py-1 text-white font-semibold cursor-pointer h-[27px]">
                   DARK
            </div>
          </div>
        </div>

        {/* bottom for dark */}
      </div>
    </div>
  );
}
