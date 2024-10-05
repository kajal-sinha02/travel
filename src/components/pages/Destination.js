import React, { useState } from "react";
import Slider from "react-slick";
import "./Destination.css";

const Destination = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="AbuDhabi" />
            <p>AbuDhabi</p>
          </div>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Norway" />
            <p>Norway</p>
          </div>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Kerala" />
            <p>Kerala</p>
          </div>
          <div className="carousel-item trending">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Bali" />
            <p>Bali</p>
          </div>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Rajasthan" />
            <p>Rajasthan</p>
          </div>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Vietnam" />
            <p>Vietnam</p>
          </div>
          <div className="carousel-item trending">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="Ladakh" />
            <p>Ladakh</p>
          </div>
          <div className="carousel-item">
            <img src="https://static.thenounproject.com/png/1397251-200.png" alt="SouthAfrica" />
            <p>South Africa</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Destination;
