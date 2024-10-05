import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./Destination.css";

const Destination = () => {
  const sliderRef = useRef(null); // Reference to the slider
  const slidesToShow = 7; // Number of slides to show
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  // Sample data for carousel items
  const carouselItems = [
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "AbuDhabi" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Dubai" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Doha" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Riyadh" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Jeddah" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Manama" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Muscat" },
    { imgSrc: "https://static.thenounproject.com/png/1397251-200.png", name: "Kuwait City" },
    // Add more items as needed...
  ];

  // Custom Previous Arrow Component
  const CustomPrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    // Disable the Prev button if on the first slide
    const isDisabled = currentSlide === 0;
    return (
      <button
        className={`slick-prev ${isDisabled ? "disabled" : ""} custom-prev-arrow`}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        {/* Optional: You can use icons or text here */}
      </button>
    );
  };

  // Custom Next Arrow Component
  const CustomNextArrow = (props) => {
    const { className, onClick, slideCount } = props;
    // Disable the Next button if on the last possible slide
    const isDisabled = currentSlide >= slideCount - slidesToShow;
    return (
      <button
        className={`slick-next ${isDisabled ? "disabled" : ""} custom-next-arrow`}
        onClick={onClick}
        aria-label="Next Slide"
      >
        {/* Optional: You can use icons or text here */}
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: carouselItems.length > slidesToShow, // Show arrows only if needed
    prevArrow: (
      <CustomPrevArrow
        currentSlide={currentSlide}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        slideCount={carouselItems.length}
      />
    ),
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
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
