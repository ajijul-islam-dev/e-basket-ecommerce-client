import React from 'react';
import { Link } from 'react-router-dom';

const QuickSale = () => {
    return (
        <div className='grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-3 gap-3 border'>
            <Link className=''> <img className='rounded-md w-full h-full' src="images/category/flash_sale.jpg" alt="" /></Link>
            <Link className='row-span-2 md:row-span-1 h-full'> <img className='rounded-md hidden md:block' src="images/category/group_purchase.jpg" alt="" /><img className='rounded-md  md:hidden' src="images/category/group_vertical.jpg" alt="" /></Link>
            <Link className=''><img className='rounded-md w-full h-full' src="images/category/history.jpg" alt="" /></Link>
        </div>
    );
};

export default QuickSale;