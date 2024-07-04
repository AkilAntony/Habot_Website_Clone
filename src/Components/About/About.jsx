import React from 'react'
import Card from './Card'

function About() {
  return (
    <div className='ml-3 mr-2'>
        <div className='font-poppins text-center md:w-839 m-auto '>
            <h2 className='font-bold text-37.34 leading-48 '>
                How it works?
            </h2>
            <p className='text-17.16 font-normal mt-7'>
                Buyers post their needs and review top suppliers, 
                while suppliers complete profiles, connect with potential buyers, 
                and build successful business relationships, sharing valuable feedback.
            </p>
        </div>
        <div className='md:h-508 md:w-1200 m-auto flex flex-wrap 
                mt-16'>
            <Card icon ='/Assets/role.svg'
               content='Select Your Role and Sign Up'
               styles ='bg-customCyan' />
            <Card icon ='/Assets/Group.svg'
               content='Select Your Role and Sign Up' 
                styles ='bg-white'/>
             <Card icon ='/Assets/Layer.svg'
               content='Select Your Role and Sign Up'
                 styles ='bg-customCyan'  />
            <Card icon ='/Assets/edit.svg'
               content='Select Your Role and Sign Up'
                styles ='bg-white' />
             <Card icon ='/Assets/quote-request.svg'
               content='Select Your Role and Sign Up'
                 styles ='bg-customCyan'  />
            <Card icon ='/Assets/Group-1.svg'
               content='Select Your Role and Sign Up'
                styles ='bg-white' />
        </div>
      
    </div>
  )
}

export default About