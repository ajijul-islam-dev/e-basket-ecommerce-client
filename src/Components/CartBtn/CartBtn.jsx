import { Button } from "@material-tailwind/react";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const CartBtn = ({handleCartModal}) => {
  return (
    <button
    onClick={()=> handleCartModal()}
      className="text-white z-50 flex w-[70%] md:h-24 md:w-40 md:flex-col items-center justify-between rounded-full bg-[#f15a22] md:rounded-md hover:bg-[#ec7e56] border-none outline-none fixed mx-auto  bottom-2 md:bottom-[50%] left-0 md:left-[88%] right-0 px-3 md:px-0 py-2"
      size="sm"
    >
      <div className="flex items-center justify-center gap-1">
        <AiOutlineShopping className="text-xl hidden md:block" />
        <p>0 item Added</p>
      </div>
      <div className="bg-white rounded-full md:rounded-md text-[#f15a22] p-2 ">
        BDT 0.00
      </div>
    </button>
  );
};

export default CartBtn;
