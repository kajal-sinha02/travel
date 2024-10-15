import React from "react";
import "../css/Stay.css"; // Add this for custom styling

const StayCard = () => {
  return (
    <div className="stay-card-container">
      <h1 className="stay-title">Stays</h1>
      <div className="stay-cards">
        {[...Array(4)].map((_, index) => ( // Generate multiple stay cards dynamically
          <div className="stay-card" key={index}>
            <div className="stay-body">
              <div className="stay-image">
                <img
                  src="https://i.travelapi.com/lodging/34000000/33130000/33124400/33124373/2a947b6c.jpg"
                  alt="Hunder Resort"
                 style={{height:"170px" , width:"250px"}}
                />
                <div className="hotel-badge">3 star hotel</div>
              </div>

              <div className="stay-details">
                <h3 style={{ textAlign: "left" }}>Hunder Resort</h3>
                <p style={{ fontSize: "15px", color: "black" }}>Hunder</p>
                <p style={{ fontSize: "15px", color: "black" }}>
                  🏨 Deluxe Suite (1 Room)
                </p>
                <p style={{ fontSize: "15px", color: "black" }}>
                  🍽️ Breakfast and Lunch/Dinner Included
                </p>
              </div>

              <button className="view-detail">View Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StayCard;
