import React from 'react'
import Button from '../Button'
import Place from './Place'

function SignUp() {
  return (
    <div className='flex  flex-col md:flex-row justify-between'>
        <div className='font-poppins md:w-620 text-start
                ml-3 mr-2 md:ml-20'>
            <h2 className=' bold text-37.34
                 leading-10 font-bold'>
                Ready to dive into HABOT?
            </h2>
            <p className='font-light text-17.16 leading-7 mt-10'>
                Signing up with HABOT opens the door to a world of new 
                opportunities and potential for business growth. Gain 
                ccess to a vibrant community of like-minded individuals, 
                unlock valuable resources, and take the first step towards
                 realizing your entrepreneurial dreams.
            </p>
            <div className='flex relative
                  mt-10'>
              
                <button className='bg-customGreen flex h-54
                            w-317 items-center justify-center
                          relative rounded'>
                    <span className='m-auto text-white font-bold  font-poppins'>
                        Sign up Today !
                    </span>
                    <img src='/Assets/RightArrow.svg'
                        className='absolute right-5 h-4 w-8' />
                </button>
            </div>
        </div>
        <div className='locationContainer md:w-541 rounded-5
                flex flex-wrap  gap-3 mr-72 md:mr-20 mt-10 md:mt-5 justify-center
                '>
            <Place placeName='Abu Dhabi'/>
            <Place placeName='Dubai'/>
            <Place placeName='Sharjah & Ajman'/>
            <Place placeName='Fujairah'/>
            <Place placeName='Ras Al Khaimah'/>
            <Place placeName='Umm Al Quwain'/>
        </div>
    </div>
  )
}

export default SignUp