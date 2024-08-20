import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };

  return (
    <Slider {...settings}>
      <div className="h-40 md:h-80">
        <img className="w-full h-full" src="/images/slider/slider_1.jpg" alt="" />
      </div>
      <div className="h-40 md:h-80">
        <img className="w-full h-full" src="/images/slider/slider_1.jpg" alt="" />
      </div>
      <div className="h-40 md:h-80">
        <img className="w-full h-full" src="/images/slider/slider_1.jpg" alt="" />
      </div>
      <div className="h-40 md:h-80">
        <img className="w-full h-full" src="/images/slider/slider_1.jpg" alt="" />
      </div>
      
    </Slider>
  );
};

export default BannerSlider;
