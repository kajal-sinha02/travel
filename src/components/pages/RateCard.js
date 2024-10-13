import React from 'react';
import './RateCard.css'; // Ensure this CSS file is in the same folder

const RateCard = () => {
  return (
    <div className="rate-card">
      {/* Price Section */}
      <div className="price-section">
        <h3 className="price">₹79,084/-</h3>
        <span className="price-label">Estimated Price</span>
        <p className="tax-info">Inclusive of applicable taxes</p>
        <button className="view-inclusions">View inclusions ▼</button>
      </div>

      {/* Date and Guests Section */}
      <div className="info-row">
        <div className="info-item">
          <i className="fa fa-calendar"></i> 
          <span className="date-info">13th Oct 2024 - 19th Oct 2024</span>
          <span className="edit-icon">✏️</span>
        </div>
        <div className="info-item">
          <i className="fa fa-users"></i> 
          <span className="guest-info">2 Adults</span>
          <span className="edit-icon">✏️</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <button className="proceed-btn">Log in to proceed</button>
        <button className="whatsapp-btn">
          <i className="fa fa-message"></i> Chat on WhatsApp
        </button>
      </div>

      {/* Terms & Conditions */}
      <p className="terms">
        <a href="#">Terms & Conditions</a>
      </p>
    </div>
  );
};

export default RateCard;
