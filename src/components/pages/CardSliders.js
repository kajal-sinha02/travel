// CardSliders.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
        {/* Update button to use Link */}
        <Link to={`/view`} className="view-all-button">View All &gt;</Link>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </Slider>
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default CardSliders;
