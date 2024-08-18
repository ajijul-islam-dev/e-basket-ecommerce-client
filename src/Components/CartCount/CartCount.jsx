import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const CartCount = () => {
    const [count,setCount]= useState(0);
    return (
        <div className='flex border border-[#f15a22]'>
            { count > 0 && <><Button onClick={()=> count > 0 && setCount(count -1) } className='bg-[#f15a22] rounded-none text-white hover:bg-[#f15a22]' size='sm' variant='text'>-</Button>
            <p className="px-1 flex items-center justify-center bg-white">{count}</p></>}
            <Button onClick={()=> setCount(count +1)} className='bg-[#f15a22] rounded-none text-white hover:bg-[#f15a22]' size='sm' variant='text'>+</Button>
        </div>
    );
};

export default CartCount;