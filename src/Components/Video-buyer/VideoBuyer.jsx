import React,{useEffect, useState,useMemo, useCallback} from 'react'
import '../../Styles/VideoBuyer.css';
import Thumbnail from '../../Assets/thumbnail.svg';

import VideoPlayer from './VideoPlayer'
import Button from '../Button';
import Buyer from './Buyer';
import Supplier from './Supplier';
function VideoBuyer() {
    const [supplier,setSupplier] =  useState(false);
    const [buyer,setBuyer] = useState(true);
    

    const handleClick = useCallback((role)=>{
        if(role === 'supplier'){
            setSupplier(true);
            setBuyer(false)
        }
        else if(role === 'buyer'){
            setBuyer(true);
            setSupplier(false)
        }
    },[buyer,supplier])
 
return (
    <div className='videoBuyerContainer flex flex-wrap items-center justify-center 
          rounded md:flex-row flex-col ml-2 mr-2 md:ml-20 md:mr-20'>
            {/* ml-2 mr-2 md:ml-20 md:mr-20 */}
        <div className='videoContainer rounded w-11/12 md:w-1/2 md:h-80'>
            <VideoPlayer/>
        </div>

        <div className='gap-7 buyer-supplier flex flex-col justify-center'>
            <div className=' flex justify-around  items-center text-white 
                 '>
                <Button
                    text="Buyer"
                    styles={`border-b-2 ${buyer ? 'border-sandyBrown' : 'border-none'} cursor-pointer px-6 pb-2  font-poppins text-2xl ${buyer ? 'text-sandyBrown' : ''} font-bold`}
                    event={() => handleClick('buyer')}
                    />
                <Button
                    text="Supplier"
                    styles={`border-b-2 ${supplier ? 'border-sandyBrown' : 'border-none'} cursor-pointer pb-2 px-6 font-poppins text-2xl ${supplier ? 'text-sandyBrown' : ''} font-bold`}
                    event={() => handleClick('supplier')}
                    />
            
            </div>
            <div className='resultContainer flex flex-col 
                    justify-start items-start pt-7'>
                {buyer && 
                    <Buyer />
                }
                {supplier &&
                    <Buyer />}
            </div>
        </div>
    </div>
  )
}

export default VideoBuyer