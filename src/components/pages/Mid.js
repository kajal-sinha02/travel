import React from "react";
import "./Mid.css";

const Mid = () => {
  return (
    <>
      <div className="travel-planner">
        <div className="overlay">
          <div className="contentt">
            <h1>Effortless Travel Planning! Let AI Be Your Expert Guide.</h1>
            <p style={{fontSize : '20px'}}>
              Bid farewell to generic holiday packages. <br></br>Get Your AI-Personalised
              Itineraries
            </p>
            <button type="submit" className="btn-continue2">
            Plan Itinerary For Free!
              </button>
            {/* <button className="btn-plan">Plan Itinerary For Free!</button> */}
          </div>

          <div className="form-container">
            <h3>Get your free travel plan now</h3>

            <form className="travel-form">
              <label htmlFor="departure">What do you want to explore?</label>
              <input
                type="text"
                id="departure"
                placeholder="Departing from"
             
                readOnly
              />

              <input
                type="text"
                id="destination"
                placeholder="Search destination"
              />

              <label htmlFor="dates">When are you planning to travel?</label>
              <div className="date-inputs">
                <input type="text" placeholder="Start Date" />
                <input type="text" placeholder="End Date" />
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="best-time" />
                <label htmlFor="best-time">
                  Not sure? Let us decide best time for your trip.
                </label>
              </div>

              <button type="submit" className="btn-continue">
                Continue
              </button>
            </form>
          </div>
        </div>

        {/* <footer className="features">
          <div>
            <span role="img" aria-label="personalized">🗺️</span>
            Free Personalized Itineraries
          </div>
          <div>
            <span role="img" aria-label="affordable">💼</span>
            Affordable & Flexible Bookings
          </div>
          <div>
            <span role="img" aria-label="hidden charges">💵</span>
            Zero Hidden Charges
          </div>
        </footer> */}
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Mid;
