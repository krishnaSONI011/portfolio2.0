import React from 'react'
import { MdHandshake } from "react-icons/md";
import Form from './Form';
export default function GetinTouch() {
  return (
    <div className='mt-10 md:px-40'>
      <div className='text-center text-3xl font-semibold text-[#6A98F0] font-1'>
        Get In Touch
      </div>

     <div className='md:flex '>
        <div className='py-10'>

        <div className='w-full md:w-[400px] h-[400px] bg-[#6A98F0] flex justify-center items-center flex-col rounded-l-xl'>
                <div>
                    <MdHandshake className='text-9xl text-white'/>
                </div>
                <div>
                    <div className='font-semibold font-1 text-white text-2xl text-center'>Thank You</div>
                    <div className=' font-1 text-white text-md'>Do you have any Queries ?</div>
                </div>
        </div>
        </div>



        {/* Form component */}
        <div className='w-full shadow rounded-xl'>
            <Form/>
        </div>

        
     </div>
     
    </div>
  )
}
