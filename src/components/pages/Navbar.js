import React from 'react';
import './Navbar.css'; // Link to external CSS for styling
import tlogo from '../../assets/images/tlogo.avif';
import flag from '../../assets/images/IndianFlag.png';
function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src={tlogo}/* replace this with the actual path */
          alt="Thrillophilia" 
          style={{height : '35px'}}
        />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search for Destinations"
          className="search-input"
        />
      </div>

      {/* Currency and Login */}
      <div className="currency-login">
        

        <div className="login">
          {/* <span>Login</span> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
