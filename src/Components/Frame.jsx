import React from 'react'
import Button from './Button'
function Frame() {
  return (
    <div className='frameContainer flex md:flex-row bg-customCyan
            justify-around items-center flex-col h-254'>
        {/* <div> */}
            <div className="textCotainer -mb-9 md:-mb-0 font-poppins mr-4 ml-4">
                <p className='font-bold text-4xl leading-10'>
                    Let Suppliers 
                    <span className='border-b-4 border-sandyBrown ml-2'>
                        Find You
                    </span>
                </p>
            </div>
            <Button
                styles='bg-sandyBrown font-poppins 
                font-bold w-56 h-14 text-white'
                text='Get Verified'
            />
        {/* </div> */}
    </div>
  )
}

export default Frame