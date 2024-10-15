import React from 'react';
import '../css/RouteLine.css'; // Custom CSS for styling

const Route = () => {
  const stops = [
    { location: "Mumbai", nights: null, color: "black" },
    { location: "Leh, Ladakh", nights: 2, color: "blue" },
    { location: "Nubra", nights: 2, color: "yellow" },
    { location: "Pangong Tso", nights: 1, color: "red" },
    { location: "Leh, Ladakh", nights: 1, color: "green" },
    { location: "New Delhi", nights: null, color: "black" },
    { location: "Mumbai", nights: null, color: "black" }
  ];

  return (
    <div className="route-container">
      {stops.map((stop, index) => (
        <div key={index} className="route-stop">
          <div className="route-line-container">
            <div className={`route-dot ${stop.color}`}></div>
            {index < stops.length - 1 && (
              <div className={`route-line ${stop.color}`}></div>
            )}
          </div>
          <div className="route-details">
            <span className="route-location" style={{fontWeight:"bold" , color:"black" , marginBottom:"20px"}}>{stop.location}</span>
            {stop.nights && <span className="route-nights"> - {stop.nights} Nights</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Route;
