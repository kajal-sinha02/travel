// TripHighlights.jsx
import React from 'react';
import '../css/TripHighlights.css'; // Import the CSS file

const TripHighlights = () => {
  return (
    <div className="container">
      <p style={{fontSize:"30px" , marginTop:"0px" , marginBottom:"30px" , color:"black",  fontWeight :"bold"} }>Best Of Leh Ladakh | FREE Universal Studio Tickets</p>
      {/* <p style={{fontSize:"23px" , color:"grey",  fontWeight :"bold",  marginTop:"-10px" , textAlign:"left"} }>Trip Highlights</p> */}
      <div className="headingContainer">
     
        {/* <div className="heading">Trip Highlights</div>  */}

      </div>
      
      <div className="contentContainer">
        <div style={{fontSize:"25px" ,  marginBottom:"20px" , fontWeight:"bold" , color:"grey" , marginLeft:"20px"}}>Trip Highlights</div>
        <ul className="list">
          <li className="item">
            Witness Leh's impressive skyline, rich cultural diversity, culinary delights, 
            and innovative spirit, a top global destination offering a unique mix of attractions.
          </li>
          <li className="item">
            Marvel at Leh's iconic Marina Bay Sands, where stunning architecture 
            meets breathtaking views, offering a luxurious experience.
          </li>
          <li className="item">
            Have an exciting day at Universal Studios, where you can experience thrilling rides, 
            watch entertaining shows, and meet your favourite cartoon characters.
          </li>
          <li className="item">
            Splash through high-speed slides, relax on Adventure River, snorkel with 20,000 
            colourful fish, and wade among rays at Adventure Cove Waterpark.
          </li>
          <li className="item">
            Take a scenic cable car ride to explore Sentosa Island and enjoy the Wings of Time show, 
            featuring stunning lasers, fire and water show.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripHighlights;
