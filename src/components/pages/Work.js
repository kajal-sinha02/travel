import React from "react";
import './Work.css'; // Importing CSS for styling

const Work = () => {
  return (
    <div className="how-it-works">
      <div className="heading-work">How it works?</div>
      <div className="steps-container">
        <div className="step">
          <img 
            src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0xLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" 
            alt="Handpick Your Selection" 
            className="icon step-image" // Added class name
          />
          <h3>Handpick Your Selection</h3>
          <p className="step-description" >From solo travel to workcation, honeymoon to family travel, tell us about your mood, budget & timeline.</p>
        </div>
        <div className="step">
          <img 
            src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0yLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" 
            alt="Unleash AI's Itinerary Wizardry!" 
            className="icon step-image" // Added class name
          />
          <h3>Unleash AI's Itinerary Wizardry!</h3>
          <p className="step-description">Get a unique itinerary completely personalized for you, with all bookings in one place.</p>
        </div>
        <div className="step">
          <img 
            src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0zLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" 
            alt="Easy Bookings with 24x7 Concierge" 
            className="icon step-image" // Added class name
          />
          <h3>Easy Bookings with 24x7 Concierge</h3>
          <p className="step-description">From your stays to activities, book-it-all in one click, and enjoy 24x7 assistance while you explore.</p>
        </div>
        <div className="step">
          <img 
            src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9ob3c0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19" 
            alt="No Commissions - Pay for what you get" 
            className="icon step-image" // Added class name
          />
          <h3>No Commissions - Pay for what you get</h3>
          <p className="step-description">No hidden charges during & after bookings. Pay for what you get.</p>
        </div>

        
      </div>
      <div className="cta-container">  {/* Added wrapper div for button */}
        <button className="cta-button">Plan Itinerary</button>
      </div>
    </div>
  );
}

export default Work;
