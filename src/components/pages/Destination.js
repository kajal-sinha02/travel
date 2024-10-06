// Destination.js
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./Destination.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using React Icons

const Destination = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 7;

  const carouselItems = [
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "AbuDhabi" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Dubai" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Doha" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Riyadh" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Jeddah" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Manama" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Muscat" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Kuwait City" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Doha 2" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Riyadh 2" },
    // Add more items as needed...
  ];

  // Custom Previous Arrow Component
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    const isDisabled = currentSlide === 0;

    return (
      <button
        className={`custom-prev-arrow ${isDisabled ? "disabled" : ""}`}
        onClick={onClick}
        aria-label="Previous Slide"
        disabled={isDisabled}
      >
        <FaChevronLeft />
      </button>
    );
  };

  // Custom Next Arrow Component
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    const isDisabled = currentSlide >= carouselItems.length - slidesToShow;

    return (
      <button
        className={`custom-next-arrow ${isDisabled ? "disabled" : ""}`}
        onClick={onClick}
        aria-label="Next Slide"
        disabled={isDisabled}
      >
        <FaChevronRight />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {carouselItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.imgSrc} alt={item.name} />
              <p>{item.name}</p>
              {/* Uncomment if you want to display a trending badge */}
              {/* <span className="trending-badge">Trending</span> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Destination;
