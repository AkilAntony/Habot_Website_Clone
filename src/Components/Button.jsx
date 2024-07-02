import React from 'react'

const Button = ({text,styles,event}) => {
  return (
    <button className={`${styles} rounded 
            text-center `}
          onClick={event}>
        {text}
    </button>
  )
}

export default Button
