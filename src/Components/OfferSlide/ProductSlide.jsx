import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductSlide = ({title,icon,data,dot,handleProductModal}) => {
  console.log(data);
  var settings = {
    dots: dot || true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="flex items-center justify-between my-5 border-b py-5">
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-xl">{title}</p>
        </div>
        <div className="">
          <Link className="text-[#f15a22] mr-5" to="/">
            See All
          </Link>
        </div>
      </div>
      <Slider {...settings} className="">
       {data?.map((product,i)=> <div onClick={()=>handleProductModal(product)} className="" key={i}> <ProductCard product={product} /></div> )}
      </Slider>
    </div>
  );
};

export default ProductSlide;
