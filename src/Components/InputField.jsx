import React from 'react'
 
function InputField({type,label,placeholder,icon,isNavbarOpen}) {
  return (
   <div className={`inputContainer relative p-0 m-0 ${isNavbarOpen ? 'hidden' : ''}`}>
      <input
        type={type}
        className='border rounded m-0 outline-none pl-14 h-14 md:w-400 w-80 items-center pt-1'
        placeholder={placeholder}
      />
      <img src={icon} alt="icon" className='absolute bottom-4 left-6' />
    </div>
   
  )
}

export default InputField