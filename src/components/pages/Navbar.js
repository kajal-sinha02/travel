import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Link to external CSS for styling
import tlogo from '../../assets/images/tlogo.avif';
import CircularLogin from './CircularLogin';
import Login from './Login';

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo wrapped in Link for routing */}
      <div className="logo">
        <Link to="/home"> {/* Link to the /home route */}
          <img
            src={tlogo} /* replace this with the actual path */
            alt="Thrillophilia" 
            style={{ height: '35px' }}
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-icon">
          <i className="fa fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="search-input"
        />
      </div>

      {/* Currency and Login */}
      <div className="currency-login">
        <Login />
      </div>
    </div>
  );
}

export default Navbar;
