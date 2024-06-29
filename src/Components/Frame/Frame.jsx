import React from 'react'
import './Frame.css'
import Button from '../Button'
function Frame() {
  return (
    <div className='frameContainer flex
            justify-around items-center'>
        {/* <div> */}
            <div className="textCotainer ">
                <p className='font-bold text-4xl leading-10'>
                    Let Suppliers 
                    <span className='border-b-4 border-frameButton ml-2'>
                        Find You
                    </span>
                </p>
            </div>
            <Button
                styles='bg-frameButton font-poppins 
                font-bold w-56 h-14 text-frameButtonText'
                text='Get Verified'
            />
        {/* </div> */}
    </div>
  )
}

export default Frame