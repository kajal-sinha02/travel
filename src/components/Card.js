import React from 'react';
import '../css/Card.css'; // Your CSS file

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Card = ({ image }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleCardClick = () => {
    navigate('/planDetails'); // Navigate to /planDetails
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}> {/* Add onClick and cursor style */}
      <div className="card-banner">
        {/* Optional banner text can be added here */}
      </div>
      <img
        src="https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=360&dpr=2"
        alt="Dubai Highlights"
        className="card-image"
      />
      <div className="card-body">
        <div className="trip-info">
          <h5>{image.duration}</h5>
          <div className="rating">
            <span className="star-icon">⭐</span>
            <span>{image.rating}</span>
            <span>(1.6k)</span>
          </div>
        </div>
        <div className="cardslider-heading">{image.title}</div>
        
        <div className="gradient-div">
          <p style={{ fontSize: "15px" }}>5 D Dubai</p>
        </div>
        <div className="pricing">
          <div className="price-info">
            <span className="price-current">INR 45,000</span>
            <span className="price-old">INR 74,002</span>
            <span className="discount">SAVE INR 29,002</span>
          </div>
        </div>
        <div className="button-container">
          <div className="call-button-container">
            <button className="avail-btn2" style={{marginLeft:"0px" , width:"50px"}}>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </button>
            <button className="avail-btn" style={{width:"250px"}}>Avail This Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
