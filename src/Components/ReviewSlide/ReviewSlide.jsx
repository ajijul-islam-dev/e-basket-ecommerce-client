import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviewData from "../../assets/data/review.json";

const ReviewSlide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mx-10">
      <div className="">
        <h2 className="text-2xl my-5">Our Motivation</h2>
      </div>
      <Slider {...settings}>
        {reviewData?.map((review,i)=> <div key={i}>
          <div className="flex items-center justify-center gap-8 mx-10 rounded-lg">
            <div className="">
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-40 rounded-full" src="/images/review/review.jpg" alt="" />
                    <p className="text-">{review.reviewer_name} Islam</p>
                </div>
            </div>
            <div className="w-full bg-gray-300 p-3 min-h-36 text-gray-800"><p>{review.review}</p></div>
          </div>
        </div>)}
      </Slider>
    </div>
  );
};

export default ReviewSlide;
