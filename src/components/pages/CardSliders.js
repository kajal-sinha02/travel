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
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    centerMode: true, // Enable center mode
    centerPadding: '0px', // Remove padding around centered item
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2 , // Show 2 slides on medium screens
          centerMode: true, // Enable center mode
          centerPadding: '0px', // Remove padding
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerMode: true, // Enable center mode
          centerPadding: '0px', // Remove padding
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper" >
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
      {/* <div className="horizontal-line"></div> */}
    </div>
  );
};

export default CardSliders;
