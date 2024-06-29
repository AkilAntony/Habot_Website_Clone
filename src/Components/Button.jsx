import React from 'react'

const Button = ({text,styles}) => {
  return (
    <button className={`${styles} rounded font-inter
            p-3 text-center `}>
        {text}
    </button>
  )
}

export default Button
