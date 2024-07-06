import React from 'react'
 
const Buyer = ()=>{
    return(
        <div className='flex flex-col items-start text-start gap-2 font-poppins
            font-medium text-lg text-white'>
           <div className='flex pl-8 md:pl-12'>
                <img src='/Assets/checked.svg' alt="" className='flex-shrink-0 self-start mt-1' />
                <span className='ml-2 flex '>Post your requirements.</span>
           </div>
            <div className='flex  pl-8 md:pl-12'>
                <img src='/Assets/checked.svg' alt="" className='flex-shrink-0 self-start mt-1' />
                <span className='ml-2'>Sit back for multiple suppliers to contact you.</span>
           </div>
           <div className='flex pl-8 md:pl-12'>
                <img src='/Assets/checked.svg' alt="" className='flex-shrink-0 self-start mt-1' />
                <p className='ml-2 flex-1 text-start'>Choose among the suppliers based on the ratings and reviews.</p>
           </div>
        </div>
    )
}

export default Buyer