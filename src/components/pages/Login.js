import React, { useState } from 'react';
import './Login.css';  // Login-specific CSS
import CircularLogin from './CircularLogin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage login modal visibility
  const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number
  const [fullName, setFullName] = useState(''); // State for full name
  const [email, setEmail] = useState(''); // State for email
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']); // State for OTP digits
  const [otpSent, setOtpSent] = useState(false); // State to check if OTP is sent
  const navigate = useNavigate(); // Initialize navigate

  const handleClose = () => {
    setIsOpen(false); // Close the modal
    resetForm(); // Reset the form when closing
  };

  const handleOpen = () => {
    setIsOpen(true); // Open the modal
  };

  const handleRequestOtp = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic mobile number validation (adjust as necessary)
    const isValidMobile = /^\d{10}$/.test(mobileNumber);
    
    if (isValidMobile) {
      setOtpSent(true); // Show OTP sent message
    } else {
      alert('Please enter a valid mobile number'); // Alert for invalid number
    }
  };

  const resetForm = () => {
    setMobileNumber('');
    setFullName('');
    setEmail('');
    setOtpDigits(['', '', '', '']);
    setOtpSent(false);
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
      
      // Move to the next input if current is filled
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate required fields
    if (!fullName || !email || otpDigits.join('').length < 4) {
      alert('Please fill in all required fields: Full Name, Email, and OTP.');
      return; // Stop submission if validation fails
    }

    // If validation passes, navigate to /home
    handleClose();  
    navigate('/home');
  };

  return (
    <>
      <button onClick={handleOpen} style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
        <CircularLogin />
      </button>
      {isOpen && (
        <div className="login-page__overlay" onClick={handleClose}>
          <div className="login-page__container" onClick={e => e.stopPropagation()}>
            <div className="login-page__box">
              <div className="login-page__left">
                <div className="login-page__features">
                  <div className="login-page__feature">
                    <p style={{ fontWeight: "bold", color: "transparent" }}>Unlimited travel plans for free!</p>
                  </div>
                  <div className="login-page__feature">
                    <p style={{ fontWeight: "bold", color: "transparent" }}>Exclusive deals: Up to 70% off!</p>
                  </div>
                  <div className="login-page__feature">
                    <p style={{ fontWeight: "bold", color: "transparent" }}>Expert support, 24x7!</p>
                  </div>
                  <div className="login-page__feature">
                    <p style={{ fontWeight: "bold", color: "transparent" }}>Free night stay on selected properties!</p>
                  </div>
                </div>
              </div>
              <div className="login-page__right">
                <button className="login-page__close-btn" onClick={handleClose}>
                  &times;
                </button>
                <div className="login-page__header">
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>Login to your account</div>
                </div>
                <div className="login-page__form">
                  <div className="login-page__input-group">
                    <select style={{ width: '5px' }} defaultValue="+91">
                      <option></option>
                      <option>+1</option>
                      <option>+91</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </div>
                  {otpSent ? (
                    <div style={{ width: "324px" }}>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="login-page__input" // Apply CSS class for styling
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-page__input" // Apply CSS class for styling
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Enter OTP</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          {otpDigits.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              type="text"
                              value={digit}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              className="login-page__input" // Apply CSS class for styling
                              style={{ width: '50px', marginRight: index < 3 ? '10px' : '0' }}
                              maxLength="1" // Limit input to one character
                            />
                          ))}
                        </div>
                      </div>
                      <p style={{ color: 'green', fontSize: "13px", marginBottom: "10px" }}>OTP has been sent to your mobile number!</p>
                    </div>
                  ) : (
                    <div className="login-page__checkbox-group">
                      {/* You can add additional inputs or checkbox here if needed */}
                    </div>
                  )}
                  <button 
                    className="login-page__otp-btn" 
                    onClick={otpSent ? handleSubmit : handleRequestOtp}
                    disabled={!otpSent && !mobileNumber} // Disable if OTP has not been requested and no mobile number is entered
                  >
                    {otpSent ? "Log In" : "Request OTP"}
                  </button>
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
