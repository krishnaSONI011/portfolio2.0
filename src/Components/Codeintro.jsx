import React from 'react'
import { useDarkmode } from "./context/Darkmode";

export default function Codeintro() {
    let {darkmode} = useDarkmode()
  return (
    <div className={`shadow rounded-md  ${darkmode ? "text-white" : "text-[#6D83F2]"} p-3 px-7 ${darkmode ? "bg-[#383838]" : "bg-white"}`}>
      <pre className={`py-2 `}>1 class <span className='font-extrabold'>Person</span> {'{'} </pre>
      <pre>2&nbsp; constructor() {'{'} </pre>
      <pre className='py-2'>3&nbsp;&nbsp; this.name = "<span className='font-extrabold'>Krishna Soni</span>" {';'} </pre>
      <pre>4&nbsp;&nbsp; this.traits = ["<span className='font-extrabold'>Design</span>","<span className='font-extrabold'>DEV</span>"] {';'} </pre>
      <pre className='py-2'>5&nbsp;&nbsp; this.age = new Date().getFullYear() - 2002; </pre>
      <pre>6&nbsp;&nbsp; {'}'} </pre>
      <pre className='py-2'>7 {'}'} </pre>
    </div>
  )
}
