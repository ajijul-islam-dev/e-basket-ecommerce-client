import React, { useState } from "react";
import CartCount from "../CartCount/CartCount";

const CategoryCard = ({ category }) => {
    console.log(category.name);
  return (
    <div className="shadow  p-0.5 hover:-translate-y-0.5 duration-200 m-1 md:m-2 flex flex-col gap-2 items-center justify-center">
      <img className="w-16" src={category.icon} alt="" />

      <div className="">
        <div className="my-1">
          <h3 className="text-black text-sm">{category.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
