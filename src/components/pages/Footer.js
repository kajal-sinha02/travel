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
            {/* <li>We Are Hiring</li> */}
            <li>Thrillophilia Reviews</li>
            {/* <li>Terms & Conditions</li> */}
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
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Bali</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Dubai</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Singapore</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Thailand</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Andaman</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>India</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Ladakh</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Hong Kong</div>
    <div className="destination" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJPKDWgfqQgx31zhxxQAJdG5SbcTrHkY-SQ&s)' }}>Sri Lanka</div>
  </div>
</div>

        
      </div>

      <footer className="footer">
    <div style={{height : '1700px'}}></div>
    <h2>thrillophilio.com</h2>
    <div style={{height : '200px'}}></div>
    <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div style={{height : '400px'}}></div>
        <p>© 2024 Thrillophilia.com All rights reserved.</p>
       
        <h4>
        The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </h4>

         <div style={{height : '100px'}}></div>
      </footer>
    </div>
  );
};

export default Footer;
