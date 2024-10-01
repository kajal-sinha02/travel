import React, { useState } from "react";
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import CardSlider from "./components/pages/CartSlider";
import imagesDubai from '../src/array/imageData'
function App() {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <div className="App">
      <Navbar></Navbar>
  
        {/* Conditionally render Destination component or Activities based on the activeTab */}
        {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}     
       {/* Apply the class here */}
            <CardSlider images={imagesDubai} name = "Dubai"/> 
            <CardSlider images={imagesDubai} name = "Dubai"/> 
            <CardSlider images={imagesDubai} name = "Dubai"/> 
        </div>
    
  );
}

export default App;
