import React from 'react'
import { DiGithubBadge } from "react-icons/di";

export default function Projecttile(props) {
  function imagepiker(image){
    // eslint-disable-next-line default-case
    switch(image){
      case'React': return "/logo/react.png"
      case'Node':return"/logo/node.png"
      case'express':return"/logo/express.png"
      case'Bootstrap':return"/logo/bootstrap.png"
      case'Tailwind':return'/logo/tailwind.png'
      case'Wordpress':return'/logo/wordpress.png'
      case'Mysql':return'/logo/mysql.png'
      case'mongoDB':return'/logo/mongo.png'
    }
    return;
   }
  
  return (
    <div className='w-72 m-3  shadow rounded-lg'>
      <div>
        <img src={props.image} alt='' className='w-full rounded-lg' />
      </div>
        <div className='flex justify-between items-center py-5 px-2'>
            <p className='font-1'>{props.name}</p>
            <button className='btn rounded-full py-2 px-2 border-none '><DiGithubBadge className='text-white text-xl'/></button>
        </div>
        <div className='flex justify-evenly overflow-x-scroll  unscroll p-1'>
        {props.skills.map((s)=>(
          <img src={imagepiker(s.skill)} alt='' className='w-7 '/>
        ))}
        </div>
    </div>
  )
}
