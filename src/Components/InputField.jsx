import React from 'react'
import '../Styles/InputField.css'
function InputField({type,label,placeholder,icon}) {
  return (
    <div className='inputContainer relative p-0 m-0'>
        <input type={type}
            className='border rounded m-0 outline-none'
            placeholder={placeholder} >
        </input>
        <img src={icon} alt="icon"  className='absolute bottom-4 left-6'/>
    </div>
   
  )
}

export default InputField