import React from 'react'
import Phone from './Phone';
import Me from './Me'
let About = ()=>{
    return (
        <>
        <div className='flex justify-between px-40 relative z-1 mt-44'>
        <Phone/>
        <div className='flex justify-center items-center'>

        <Me/>
        </div>

        </div>
        </>
    )
}
export default About;