import axios from 'axios';

const local = 'http://35.154.250.32:9000/api'; // Backend URL

// Function to send OTP
export const sendOtp = async (countryCode, mobileNumber) => {
  try {
    const response = await axios.post(`${local}/customer/send_otp_customer_login`, {
      country_code: countryCode,
      mobile: mobileNumber,
    });

    if (response && response.data && response.data.data) {
      const token = response.data.data.token;
      localStorage.setItem('token', token); // Store the token in localStorage
      return response.data;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error sending OTP:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.error : 'Error sending OTP');
  }
};

// Function to verify OTP and store name & email in localStorage
export const verifyOtp = async (otp, fullName, email) => {
  const tokenkey = localStorage.getItem('token'); // Retrieve the token from localStorage
  try {
    const response = await axios.post(`${local}/customer/verify_otp_customer`, {
      otp: otp,
    }, {
      headers: {
        token: `${tokenkey}`, // Pass the token in headers
      },
    });

    if (response && response.data) {
      // Store name and email in localStorage after successful OTP verification
      localStorage.setItem('name', fullName);
      localStorage.setItem('email', email);
      return response.data;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error verifying OTP:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.error : 'Error verifying OTP');
  }
};

// Function to set user profile using name and email from localStorage
export const setProfile = async () => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  const name = localStorage.getItem('name'); // Get name from localStorage
  const email = localStorage.getItem('email'); // Get email from localStorage

  if (!name || !email) {
    throw new Error('Name or email not found in local storage.');
  }

  try {
    const profileData = { name, email }; // Prepare profile data
    const response = await axios.post(`${local}/customer/set_profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in headers
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error setting profile:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.error : 'Error setting profile');
  }
};
