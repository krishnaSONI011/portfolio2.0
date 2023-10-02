import React from 'react'
import Projecttile from './Projecttile'

export default function Project() {
  const projects = [
    {name:'Snich Clone', image:'/images/ecom.png',skills:[
      {skill:'React'},{skill:'Bootstrap'},{skill:'Node'},{skill:'express'},{skill:'mongoDB'}
    ]},
    
    
  ]
  return (
    <>
      <div className='mt-10 px-40'>
        <div className='text-center'>
                <h1 className='font-1 text-3xl text-[#6A98F0] '>Projects</h1>
        </div>
        <div className='flex'>
          {
            projects.map((p)=>(
              
              <Projecttile name={p.name} image={p.image} skills={p.skills}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
