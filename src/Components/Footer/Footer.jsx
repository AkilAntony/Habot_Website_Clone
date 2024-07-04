import React from 'react'
import { Link } from 'react-router-dom'
import LinksContainer from './LinksContainer'

function Footer() {
  return (
    <div className=' md:h-232 mx-w-1513 bg-customBlue flex items-center justify-center'>
        <div className='md:h-155 w-1200 border-y border-lightWhite flex items-center gap-10 
               flex-col md:flex-row py-5 md:py-0'>
            <div className='logoContainer flex flex-col   text-customWhite '>
                <img src="/Assets/logo.svg " alt="logo" 
                 className='h-10 mdw-206 object-cover  ' />
                 <p className='mt-4 ml-2 text-start '>© R Singhania
                    </p>
            </div>
            <div className='links gap-10 flex flex-wrap'>
                <LinksContainer 
                    title='Company'
                    links={['About','FAQ']}/>
                <LinksContainer 
                    title='Terms'
                    links={['Data privacy','Terms','Accessibility']}/>
                <LinksContainer 
                    title='Related'
                    links={['Find Buyer','Feedback']}/>
            </div>
                <div className='socialMedia w-52 flex justify-center gap-3
                        md:ml-auto'>
               <Link><img src='/Assets/Linkedin.svg' /></Link> 
                <Link><img src='/Assets/Twitter.svg' /></Link> 
                 <Link><img src='/Assets/Facebook.svg' /></Link> 
                  <Link><img src='/Assets/Instagram.svg' /></Link> 
            </div>
            </div>
              
    </div>
  )
}

export default Footer