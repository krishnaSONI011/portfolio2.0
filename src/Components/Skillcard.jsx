import React from 'react'

export default function Skillcard(props) {
    let logo = props.image
  return (
    <div className='text-center p-2 m-2 hover:scale-105 basis-40'>
      <div className='flex justify-center'>

      <img src={logo} alt="" className='w-[80px]'/>
      </div>
      <div>
        <p className='font-1'>{props.name}</p>
      </div>
    </div>
  )
}
