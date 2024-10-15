import React, { useState } from 'react';
import '../css/Login.css';  // Login-specific CSS
import CircularLogin from '../components/CircularLogin';
import { sendOtp, verifyOtp, setProfile } from '../api/apiService'; // Import API services

const Login = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false); // Manage login modal visibility
  const [mobileNumber, setMobileNumber] = useState(''); // Store mobile number
  const [countryCode, setCountryCode] = useState('+91'); // Store country code
  const [fullName, setFullName] = useState(''); // Store full name
  const [email, setEmail] = useState(''); // Store email
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']); // Store OTP digits
  const [otpSent, setOtpSent] = useState(false); // Check if OTP is sent
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState(''); // Store error messages

  // Close the modal and reset the form
  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  // Open the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Validate mobile number
    const isValidMobile = /^\d{10}$/.test(mobileNumber);
    
    if (isValidMobile) {
      try {
        setLoading(true);
        await sendOtp(countryCode, mobileNumber);
        setOtpSent(true); // Show OTP sent message
      } catch (err) {
        setError(err.message || 'Failed to send OTP. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  // Reset the form fields
  const resetForm = () => {
    setMobileNumber('');
    setCountryCode('+91');
    setFullName('');
    setEmail('');
    setOtpDigits(['', '', '', '', '', '']);
    setOtpSent(false);
    setError('');
    setLoading(false);
  };

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
      
      // Move to the next input if current is filled
      if (value && index < otpDigits.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle form submission for OTP verification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Validate required fields
    if (!fullName || !email || otpDigits.join('').length < 6) {
      setError('Please fill in all required fields: Full Name, Email, and OTP.');
      return;
    }

    try {
      setLoading(true);
      const otp = otpDigits.join('');
      const verifyResponse = await verifyOtp(otp,fullName,email);
      
      // Assuming the verifyOtp response contains a token
      const token = verifyResponse.data.token;
      
      if (token) {
        // Set profile data
        const profileData = {
          name: fullName,
          email: email,
        };

        // Send profile data to the set_profile endpoint
        // await setProfile(token, profileData);

        // Store token in localStorage
        localStorage.setItem('token', token);

        handleClose();  
        // Optionally navigate to /home here if needed
      } else {
        setError('Authentication failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
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
                  <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "-13px" }}>Login to your account</div>
                </div>
                <div className="login-page__form">
                  {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
                  <form onSubmit={otpSent ? handleSubmit : handleRequestOtp}>
                    <div className="login-page__input-group">
                      <select
                        style={{ width: '60px', marginRight: '10px' }}
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        required
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                    {otpSent && (
                      <>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          className="login-page__input"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="login-page__input"
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Enter OTP</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {otpDigits.map((digit, index) => (
                              <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                className="login-page__input"
                                style={{ width: '40px', marginRight: index < otpDigits.length - 1 ? '10px' : '0' }}
                                maxLength="1"
                              />
                            ))}
                          </div>
                        </div>
                        <p style={{ color: 'green', fontSize: "13px", marginTop: "10px" }}>OTP has been sent to your mobile number!</p>
                      </>
                    )}
                    <button 
                      type="submit" 
                      className="login-page__otp-btn" 
                      disabled={loading || (!otpSent && !mobileNumber)}
                      style={{ marginTop: '0px', width: "250px", marginBottom: "30px", marginLeft: "40px" }}
                    >
                      {loading ? 'Loading...' : otpSent ? 'Verify OTP' : 'Send OTP'}
                    </button>
                  </form>
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
