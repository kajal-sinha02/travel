import React from 'react';
import './TravelCard2.css'; // Import the CSS file
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const TravelCard = ({ imgSrc, country, price, bestTime, heading }) => {
  return (
    <>
      <div className="travel-card2" style={{ backgroundImage: `url(${imgSrc})` }}>
        <div className="card-content">
          <h3>{country}</h3>
          <p>From ₹{price} - per day</p>
        </div>
        <Link to="/planDetails">
          <button className="plan-trip">Plan a Trip</button>
        </Link>
      </div>
    </>
  );
};

const TravelCards = ({ heading }) => {
  const cardsData = [
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI1NTU4ODA3Njk0OTExOTU2Nzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'Greece', price: '12,477', bestTime: 'Apr-Oct' },
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQyMjU2MTkwMzkwNDQ4NTcwMjUxNDY0ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'France', price: '15,849', bestTime: 'Apr-Sep' },
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk2MTA5MzI1NTAxOTE4NzkyNzI0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'Italy', price: '11,789', bestTime: 'Apr-Sep' },
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk2MTA5MzI1NTAxOTE4NzkyNzI0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'Switzerland', price: '31,508', bestTime: 'May-Sep' },
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'Germany', price: '10,298', bestTime: 'May-Sep' },
    { imgSrc: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19', country: 'Germany', price: '10,298', bestTime: 'May-Sep' },
  ];

  return (
    <>
      <div className='headingTravel'>{heading}</div>
      <div className="travel-cards-container1">
        
        {cardsData.map((card, index) => (
          <TravelCard key={index} {...card} heading={heading} />
        ))}
      </div>
    </>
  );
};

export default TravelCards;
