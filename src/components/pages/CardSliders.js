// CardSliders.js
import React from "react";
import Slider from "react-slick";
import "./CardSliders.css";
import Card from "./Card";

const CardSliders = ({ images, name }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      {/* Header Section */}
      <div className="header">
        <h1 className="header-title">{name}</h1>
        <button className="view-all-button">View All &gt;</button>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
           <div className="gradient-div">5 D Dubai</div>
        </Slider>
       
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} arrow`} onClick={onClick}>
      &gt;
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} arrow`} onClick={onClick}>
      &lt;
    </div>
  );
}

export default CardSliders;
