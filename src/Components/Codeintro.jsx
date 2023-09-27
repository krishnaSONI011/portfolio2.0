import React,{useState} from 'react'
import { useDarkmode } from "./context/Darkmode";

export default function Codeintro() {
    let [year,setYear]= useState("new Date().getFullYear() - 2002;");
    function getYear(){
        let y =new Date().getFullYear() - 2002 ;
        setYear(y)
    }
    let {darkmode} = useDarkmode()
  return (
    <div className={`shadow rounded-md  ${darkmode ? "text-white" : "text-[#6D83F2]"} p-3 px-7 ${darkmode ? "bg-[#383838]" : "bg-white"} font-1 w-[400px]`}>
      <pre className={`py-2 font-1`}>1 class <span className='font-bold'>Person</span> {'{'} </pre>
      <pre className='font-1'>2&nbsp; constructor() {'{'} </pre>
      <pre className='py-2 font-1'>3&nbsp;&nbsp; this.name = "<span className='font-bold '>Krishna Soni</span>" {';'} </pre>
      <pre className='font-1'>4&nbsp;&nbsp; this.traits = ["<span className='font-extrabold'>Design</span>","<span className='font-extrabold'>DEV</span>"] {';'} </pre>
      <pre className='py-2 font-1' onMouseEnter={getYear}>5&nbsp;&nbsp; this.age ={year} </pre>
      <pre className='font-1'>6&nbsp;&nbsp; {'}'} </pre>
      <pre className='py-2 font-1'>7 {'}'} </pre>
    </div>
  )
}
