import React from 'react';
import './Plan.css'; // Ensure you add the custom styles here

const WhyPlanWithUs = () => {
  return (
    <div className="container-plan">
      <div className='plan-heading'>Why plan with us?</div>
      <div className="features-grid">
        {/* Left Column */}
        <div className="features-column">
          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Palm Icon" />
            <div className="feature-text">
              <h3>Personalization in seconds</h3>
              <p>Personalized and flexible itineraries crafted by our AI-powered planner</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Book Icon" />
            <div className="feature-text">
              <h3>Book-it-all in one click</h3>
              <p>Book all your personalized and flexible travel needs in just one click</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Parrot Icon" />
            <div className="feature-text">
              <h3>Offbeat Experiences, curated for you</h3>
              <p>Discover offbeat adventures, activities & experiences.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="features-column">
          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Globe Icon" />
            <div className="feature-text">
              <h3>Best Real-Time Negotiated Bookings</h3>
              <p>Dedicated travel experts negotiate the best prices within your budget</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Clock Icon" />
            <div className="feature-text">
              <h3>24x7 Live Assistance as you explore</h3>
              <p>24x7 support that keeps you swinging all day and night, no monkey business!</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://cdn-icons-png.flaticon.com/512/4983/4983385.png" alt="Money Icon" />
            <div className="feature-text">
              <h3>Transparent Pricing - No Commissions</h3>
              <p>Transparent pricing with no hidden fees - pay only a small service fee!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPlanWithUs;
