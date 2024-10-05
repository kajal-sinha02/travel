import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Include CSS for styling

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: 'https://media1.thrillophilia.com/filestore/abu-dabhi-desktop.png?w=1080&dpr=1.3' },
    { src: 'https://media1.thrillophilia.com/filestore/mandai-wildlife-desktop.png?w=1080&dpr=1.3' },
    { src: 'https://media1.thrillophilia.com/filestore/philadelphia-desktop-new.jpg?w=1080&dpr=1.3' }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // useEffect to automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Function to go to a specific slide
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
          </div>
        ))}
      </div>

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
