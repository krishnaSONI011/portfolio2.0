import React from 'react'
import Skillcard from './Skillcard';

let Skill = ()=>{
    let skills = [
        {name:'React.js',image:'/logo/react.png'},
        {name:'HTML',image:'/logo/html.png'},
        {name:'CSS',image:'/logo/css.png'},
        {name:'Node.js',image:'/logo/node.png'},
        {name:'JavaScript', image:'/logo/js.png'},
        {name:'PHP',image:'/logo/php.png'},
        {name:'MySQl',image:'/logo/sql.png'},
        {name:'MongoDB',image:'/logo/mongo.png'},
        {name:'express.js',image:'/logo/express.png'},
        {name:'Git | GitHub',image:'/logo/git.png'},
        {name:'Wordpress',image:'/logo/wordpress.png'},
        {name:'Woocommerce',image:'/logo/woo.png'},
        {name:'Tailwind CSS',image:'/logo/tailwind.png'},
        {name:'Bootstrap CSS',image:'/logo/bootstrap.png'}
    ]
    return(
        <>
        <div className='bg-[#6A98F0]   p-7 px-40 mt-10'>
            <div className='bg-white rounded-lg '>

                <div className='text-center text-[#6A98F0] text-3xl py-6'>
                        SKILLS 
                </div>
                <div className='flex justify-center flex-wrap items-center'>
                    {
                        skills.map((s)=>(

                            <Skillcard name={s.name} image={s.image}/>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Skill;