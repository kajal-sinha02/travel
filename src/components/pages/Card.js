import React from 'react';
import './Card.css'; // You will create this CSS file for styling.

const Card = ({image}) => {
  return (
    <div className="card">
      <div className="card-banner">
        <div className="banner-text">
          THRILL FEST | Get Up To 3 International Trips Free!
        </div>
      </div>
      <img
        src="https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=360&dpr=2" // Replace with the actual path to your image
        alt="Dubai Highlights"
        className="card-image"
      />
      <div className="card-body">
        <div className="trip-info">
          <h5>{image.duration}</h5>
          <div className="rating">
          
          <span className="star-icon">⭐</span> {/* Green inline star */}

            <span>{image.rating}</span>
            <span>(1.6k)</span>
          </div>
        </div>
        <h3>{image.title}</h3>
        
        <div className="gradient-div">5 D Dubai</div>
        <div className="pricing">
          <div className="price-info">
            <span className="price-current">INR 45,000</span>
            <span className="price-old">INR 74,002</span>
            <span className="discount">SAVE INR 29,002</span>
          </div>
        </div>
        <div className="button-container">
    <button className="avail-btn2"><i className="fa fa-phone" aria-hidden="true"></i>
    </button>
    <button className="avail-btn">Avail This Offer</button>
</div>

      </div>
    </div>
  );
};

export default Card;
