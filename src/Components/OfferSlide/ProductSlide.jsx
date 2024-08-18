import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductSlide = () => {
  var settings = {
    dots: true,
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
          <AiOutlineShopping className="text-3xl" />
          <p className="text-xl">Offers</p>
        </div>
        <div className="">
          <Link className="text-[#f15a22] mr-5" to="/">
            See All
          </Link>
        </div>
      </div>
      <Slider {...settings} className="">
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlide;
