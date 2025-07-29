import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {assets} from '../assets/assets'

function Responsive() {
  var settings = {
    infinite: true,         
    speed: 400,
    slidesToShow: 1,      
    slidesToScroll: 1,      
    autoplay: true,
    /* dots: true, */
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-img">
          <img src={assets.Slider_1} alt="" />
        </div>

         <div className="slider-img">
          <img src={assets.Slider_2} alt="" />
        </div>

         <div className="slider-img">
          <img src={assets.Slider_3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
