import React from 'react'
import Phone from './Phone';
import Me from './Me'
let About = ()=>{
    return (
        <>
        <div className='block text-center md:flex justify-between md:px-40 relative z-1 mt-44'>
            <div className='flex justify-center'>

        <Phone/>
            </div>
        <div className=' flex justify-center items-center w-full md:w-full'>

        <Me/>
        </div>

        </div>
        </>
    )
}
export default About;