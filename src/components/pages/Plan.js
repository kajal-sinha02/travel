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
              <div className="feature-title">Personalization in seconds</div>
              <p>Personalized and flexible itineraries crafted by our AI-powered planner</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/18/35/world-153534_1280.png" alt="Book Icon" />
            <div className="feature-text">
              <div className="feature-title">Book-it-all in one click</div>
              <p>Book all your personalized and flexible travel needs in just one click</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGz8UvJ27Awx9jJtOBrQKN0diRr6lCKwAWQ&s" alt="Parrot Icon" />
            <div className="feature-text">
              <div className="feature-title">Offbeat Experiences, curated for you</div>
              <p>Discover offbeat adventures, activities & experiences.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="features-column">
          <div className="feature-item">
            <img src="data:image/png;base64,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" alt="Globe Icon" />
            <div className="feature-text">
              <div className="feature-title">Best Real-Time Negotiated Bookings</div>
              <p>Dedicated travel experts negotiate the best prices within your budget</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="https://img.freepik.com/premium-vector/modern-mobile-phone-circular-icon-flat-vector-illustration_34480-920.jpg" alt="Clock Icon" />
            <div className="feature-text">
              <div className="feature-title">24x7 Live Assistance as you explore</div>
              <p>24x7 support that keeps you swinging all day and night, no monkey business!</p>
            </div>
          </div>

          <div className="feature-item">
            <img src="data:image/png;base64,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" alt="Money Icon" />
            <div className="feature-text">
              <div className="feature-title">Transparent Pricing - No Commissions</div>
              <p>Transparent pricing with no hidden fees - pay only a small service fee!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPlanWithUs;
