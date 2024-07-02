import React from 'react'
import '../../Styles/Home.css'
import InputField from '../InputField'
import suitcaseIcon from '../../Assets/suitcase.svg';
import locationIcon from '../../Assets/location.svg';

function Home() {
  return (
    <div className='mainContainer flex flex-col items-center justify-center'>
        <div className='text-center text-white'>
         <h1 className='font-poppins font-bold '>Are You a Supplier?</h1>
        <h3 className='font-poppins font-normal'>Explore Matching Opportunities.</h3>
        </div>
        <div>
            <InputField 
                type='text'
                placeholder='Search your required service here'
                icon={suitcaseIcon}/>
        </div>
    </div>
  )
}

export default Home
// Search your desired location here