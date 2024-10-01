import React from 'react';
import '../pages/Footer.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="about-section">
          <h3>ABOUT THRILLOPHILIA</h3>
          <ul>
            <li>About Us</li>
            <li>We Are Hiring</li>
            <li>Thrillophilia Reviews</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policies</li>
            <li>Copyright Policies</li>
            <li>Support</li>
            <li className="warning">Beware of Frauds</li>
          </ul>
        </div>

        <div className="suppliers-section">
          <h3>FOR SUPPLIERS</h3>
          <ul>
            <li>List Your Activities</li>
          </ul>
          <h3>FOR BRANDS</h3>
          <ul>
            <li>Partner With Us</li>
            <li>Destination Marketing</li>
          </ul>
        </div>

        <div className="travellers-section">
          <h3>FOR TRAVELLERS</h3>
          <ul>
            <li>Gift An Experience</li>
          </ul>
        </div>

        <div className="destinations-section">
          <h3>TRAVEL DESTINATIONS</h3>
          <div className="destinations-grid">
            <div className="destination">Bali</div>
            <div className="destination">Dubai</div>
            <div className="destination">Singapore</div>
            <div className="destination">Thailand</div>
            <div className="destination">Andaman</div>
            <div className="destination">India</div>
            <div className="destination">Ladakh</div>
            <div className="destination">Hong Kong</div>
            <div className="destination">Sri Lanka</div>
          </div>
        </div>
      </div>

      <footer className="footer">
      <div style={{height : '2500px'}}></div>
        <p>© 2024 Thrillophilia.com All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>
          The content and images used on this site are copyright protected and copyrights vest with the respective owners. Unauthorized use is prohibited and punishable by law.
        </p>
        <div style={{height : '1000px'}}></div>
      </footer>
    </div>
  );
};

export default Footer;
