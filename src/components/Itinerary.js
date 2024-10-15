import React, { useState } from "react";
import '../css/Itinerary.css'; // Custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPlane, faHotel, faCar } from '@fortawesome/free-solid-svg-icons';

const itineraryData = [
  {
    day: "Day 1 - Arrival in Leh, Ladakh",
    explore: ["Leh Royal Palace", "Shanti Stupa", "Riasi Fort or Zorawar Fort"],
    fullDetails: {
      flights: "Catch an early morning flight at 4:05 am to Leh. You’ll reach Leh by 6:20 am.",
      pickup: "Airport pickup will take 15 minutes to drop you at your hotel.",
      hotel: "Hotel The Kaal - A blend of luxury and Buddhist architecture.",
      meals: "Light lunch at your stay. Stay hydrated!",
      recommendations: [
        "Rest to adjust to the altitude.",
        "If acclimatized, explore nearby places like Shanti Stupa or Leh Market.",
      ],
    },
  },
  {
    day: "Day 2 - Leh, Ladakh Exploration",
    explore: ["Shey Monastery", "Druk Padma Karpo School", "Thiksey Monastery"],
  },
  {
    day: "Day 3 - Arrival in Nubra",
    explore: ["Enroute: Khardung La", "Diskit Gompa", "Maitreya Buddha"],
  },
  {
    day: "Day 4 - Nubra Exploration",
    explore: ["Hunder Sand Dunes", "Bactrian Camel Safari", "Samstanling Monastery"],
  },
];

const Itinerary = () => {
  const [showFullView, setShowFullView] = useState(false); // Toggle state
  const [activeDayIndex, setActiveDayIndex] = useState(0); // Track active day index

  const handleToggleView = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowFullView(!showFullView); // Toggle view
  };

  const handleDayButtonClick = (index) => {
    setActiveDayIndex(index); // Set active day index
  };

  return (
    <div className="itinerary-container">
      {/* <div className="sidebar">
        {itineraryData.map((item, index) => (
          <button
            key={index}
            className={`day-button ${activeDayIndex === index ? "active" : ""}`}
            onClick={() => handleDayButtonClick(index)} 
          >
            Day {index + 1}
          </button>
        ))}
      </div> */}

      <div className="itinerary-content">
        {itineraryData.map((item, index) => {
          const details = item.fullDetails || {}; // Safe access
          return (
            <div key={index} className="itinerary-card">
              <div className="itinerary-header">
                <h4 className="itinerary-title">{item.day}</h4>
                <button
                  className="toggle-view-button"
                  onClick={handleToggleView}
                  aria-expanded={showFullView}
                >
                  {showFullView ? "View Less" : "View More"}
                </button>
              </div>

              {showFullView && details.flights && (
                <div className="itinerary-details">
                  <p>
                    <FontAwesomeIcon icon={faPlane} /> <strong>Flight Details:</strong>{" "}
                    {details.flights}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCar} /> <strong>Pickup:</strong> {details.pickup}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faHotel} /> <strong>Hotel:</strong> {details.hotel}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faUtensils} /> <strong>Meals:</strong> {details.meals}
                  </p>
                  <p><strong>Recommendations:</strong></p>
                  <ul>
                    {details.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="explore-tags">
                <span className="explore-label">Explore:</span>
                {item.explore.map((place, idx) => (
                  <span key={idx} className="explore-tag">
                    <FontAwesomeIcon icon={faUtensils} /> {place}
                  </span>
                ))}
              </div>

              <a href="#" className="add-activity-link">
                + Add Activity on Day {index + 1}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Itinerary;
