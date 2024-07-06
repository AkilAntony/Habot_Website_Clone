import React from 'react'
 
function InputField({type,placeholder,icon}) {
  return (
      <div className='flex items-center border rounded h-14 md:w-400 w-80 pl-4 bg-white'>
          <img src={icon}
              alt="Location Icon" 
              className='h-6 w-6' />
          <input type={type} 
            name="service" 
            className='outline-none flex-grow h-full pl-4' 
            placeholder={placeholder} />
      </div>
   
  )
}

export default InputField