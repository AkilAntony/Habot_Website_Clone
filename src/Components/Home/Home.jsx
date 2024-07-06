import React from 'react'
 
import InputField from '../InputField'
import Button from '../Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={`mainContainer flex flex-col items-center justify-center bg-cover h-[82vh] md:h-[90vh] `}
        style={{backgroundImage:"url('/Assets/banner.png')"}}
        >
        <div className='text-center text-white md:text-55 text-3xl 
              md:leading-66 leading-10'>
          <h1 className='font-poppins font-bold '>Are You a Supplier?</h1>
          <h3 className='font-poppins font-normal '>Explore Matching Opportunities.</h3>
        </div>
         <div className='flex gap-2 mt-10 md:flex-row flex-col items-center'>
          <InputField 
            type='text'
            placeholder='Search your required service here'
            icon=' /Assets/suitcase.svg'
          />
          <InputField 
            type='text'
            placeholder='Search your desired location here'
            icon='/Assets/location.svg'
          />
          <Button
            text='Search'
            styles='bg-customGreen w-117.94
              h-54 rounded-5px text-white font-inter
              font-bold'
          />  
        </div>
     
        <div className='text-lg font-poppins flex items-center
               text-white mt-10'>
          <p className='font-bold'>Are you a buyer?

            <Link className='font-normal pl-3 underline '>
              Click here if you are looking to post a requirements</Link>
          </p>
        </div>
    </div>
  )
}

export default Home
 