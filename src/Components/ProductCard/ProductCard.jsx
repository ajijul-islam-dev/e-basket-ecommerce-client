import React, { useState } from "react";
import CartCount from "../CartCount/CartCount";

const ProductCard = () => {
  return (
    <div className="shadow  p-0.5 hover:-translate-y-0.5 duration-200 m-4">
      <div className="relative p-4">
        <img src="images/offerSale/lifebouy.jpg" alt="" />
        <span className="font-semibold text-white bg-[#f15a22] px-2 rounded-md absolute top-3 right-3">
          8%
        </span>
        <div className="absolute bottom-0 right-3 text-whit px-2 rounded-md">
          <CartCount />
        </div>
      </div>

      <div className="">
        <div className="my-1">
          <h3 className="text-gray-800 mr-5">
            Lifebuoy Handwash Total Pump Refill Combo Pack
          </h3>
          <p>Weight : 1 Pcs</p>
          <p className="font-semibold">
            BDT 130.00{" "}
            <span className="line-through text-gray-500 ml-1">BDT 140.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
