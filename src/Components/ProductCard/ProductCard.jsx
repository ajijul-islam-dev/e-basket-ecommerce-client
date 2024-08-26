import React, { useState } from "react";
import CartCount from "../CartCount/CartCount";

const ProductCard = ({product,handleProductModal}) => {
  return (
    <div onClick={()=>handleProductModal(product)} className="relative shadow  p-0.5 hover:-translate-y-0.5 duration-200 m-1 md:m-2">
      <div className="">
        <img src="images/offerSale/lifebouy.jpg" alt="" />
        <span className="font-semibold text-white bg-[#f15a22] px-2 rounded-md absolute top-3 right-3">
          8%
        </span>
        <div className="absolute bottom-0 right-3 text-whit px-2 rounded-md z-50">
          <CartCount />
        </div>
      </div>

      <div className="">
        <div className="my-1">
          <h3 className="text-gray-800 md">
           {product.name}
          </h3>
          <p className="text-sm">Weight : {product.volume}</p>
          <p className="font-semibold text-sm">
            BDT {product.price}.00{" "}
            <span className="line-through text-gray-500 ml-1">BDT {product.old_price}.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
