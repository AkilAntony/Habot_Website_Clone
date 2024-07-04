import React from 'react'
import { Link  } from 'react-router-dom'
function LinksContainer({title,links}) {
  return (
       <div className='company flex flex-col text-white text-start '>
                <p className='font-Arial font-bold text-15.13 leading-6 mb-2'>{title}</p>
                {links.map((link,index)=>(
                    <Link key={index} className ='font-inter font-light text-sm leading-6'>{link}</Link>
                ))}
             
            </div>
  )
}

export default LinksContainer