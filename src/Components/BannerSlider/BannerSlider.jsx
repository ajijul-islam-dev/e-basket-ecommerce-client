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
      <div>
        <img src="/images/slider/slider_1.jpg" alt="" />
      </div>
      <div>
        <img src="/images/slider/slider_2.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
