import React from 'react'

function Place({placeName}) {
  return (
    <div className='rounded-5 w-260 h-65 flex items-center
            justify-center bg-white border border-customBrown
            font-500 leading-8 text-18.75 font-inter'>
        {placeName}
    </div>
  )
}

export default Place