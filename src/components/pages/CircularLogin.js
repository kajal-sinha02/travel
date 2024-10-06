import React, { useState, useRef } from 'react';
import './CircularLogin.css';

const CircularLogin = () => {
    const [showButton, setShowButton] = useState(false);
    const circleRef = useRef(null);

    const handleCircleClick = (e) => {
        e.stopPropagation(); // Prevent click from bubbling up to the document
        setShowButton(!showButton); // Toggle button visibility
    };

    const handleClickOutside = () => {
        setShowButton(false);
    };

    React.useEffect(() => {
        // Add event listener to hide button when clicking outside
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <div 
                className="login-icon" 
                onClick={handleCircleClick} 
                ref={circleRef}
            >
                <i class="fa fa-user" aria-hidden="true"></i> {/* Inline icon */}
            </div>
            {showButton && (
                <button className="login-button">Login</button>
            )}
        </div>
    );
};

export default CircularLogin;
