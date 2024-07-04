import React from 'react'

const Card = ({styles,content,icon})=>{
    
    return(
        <div className={`w-400 h-254  ${styles} flex flex-col items-center justify-center`}>
            <img src={icon} alt="icon" />
            <p className='text-xl font-poppins font-bold w-206
                mt-8 text-black'>
                {content}
            </p>
        </div>
    )
}

export default Card