import React, { useState } from 'react';
import './Slideshow.css'; // Include CSS for styling

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: 'https://media1.thrillophilia.com/filestore/xh1aniox25rqtnw1txqgra6v430x_8xl08melvjlef6r52n52pvl51jbu_shutterstock_317450570.jpg?w=340&dpr=2' },
    { src: 'https://t3.ftcdn.net/jpg/04/02/08/38/360_F_402083813_4dLEweSrZCiooyhx4ihf5nLTNrRQuucp.jpg' },
    { src: 'https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
