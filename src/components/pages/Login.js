import React, { useState } from 'react';
import './Login.css';  // Login-specific CSS
import CircularLogin from './CircularLogin';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage login modal visibility

  const handleClose = () => {
    setIsOpen(false); // Close the modal
  };

  const handleOpen = () => {
    setIsOpen(true); // Open the modal
  };

  return (
    <>
      <button onClick={handleOpen} style={{backgroundColor:"transparent" , borderColor:"transparent"}}><CircularLogin></CircularLogin></button> {/* Button to open the login modal */}
      
      {isOpen && (
        <div className="login-page__overlay" onClick={handleClose}>
          <div className="login-page__container" onClick={e => e.stopPropagation()}>
            <div className="login-page__box">
              <div className="login-page__left">
                <div className="login-page__features">
                  <div className="login-page__feature">
                    <img src="path_to_icon" alt="Travel Plans" />
                    <p style={{fontWeight:"bold"}}>Unlimited travel plans for free!</p>
                  </div>
                  <div className="login-page__feature">
                    <img src="path_to_icon" alt="Exclusive Deals" />
                    <p style={{fontWeight:"bold"}} >Exclusive deals: Up to 70% off!</p>
                  </div>
                  <div className="login-page__feature">
                    <img src="path_to_icon" alt="Support" />
                    <p style={{fontWeight:"bold"}}>Expert support, 24x7!</p>
                  </div>
                  <div className="login-page__feature">
                    <img src="path_to_icon" alt="Free Night Stay" />
                    <p style={{fontWeight:"bold"}}>Free night stay on selected properties!</p>
                  </div>
                </div>
              </div>
              <div className="login-page__right">
                {/* Cross button */}
                <button className="login-page__close-btn" onClick={handleClose}>
                  &times; {/* HTML entity for the multiplication sign (×) */}
                </button>
                <div className="login-page__header">
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>Login to your account</div>
                </div>
                <div className="login-page__form">
                  <div className="login-page__input-group">
                    <select style={{ width: '5px' }}>
                      <option></option>
                      <option>+1</option>
                      <option>+91</option>
                    </select>
                    <input type="text" placeholder="Mobile Number" />
                  </div>
                  <div className="login-page__checkbox-group">
                    <input type="checkbox" id="terms" />
                    <p style={{ marginRight: "100px", marginBottom: "5px" , fontSize:"12px"}}>Receive booking updates via WhatsApp</p>
                  </div>
                  <button className="login-page__otp-btn">Request OTP</button>
                  <p style={{ fontSize: "10px", marginTop: "15px", textAlign: "center" }}>
                    By signing up you are agreeing with our <a href="#">T&Cs</a> and <a href="#">privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
