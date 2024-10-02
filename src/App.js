import React, { useState } from "react";
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import CardSlider from "./components/pages/CartSlider";
import {images , images2} from '../src/array/imageData'
import Footer from "./components/pages/Footer";
import LogoAnimation from "./components/pages/LogoAnimation";
function App() {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <div className="App">
      <Navbar></Navbar>
  
        {/* Conditionally render Destination component or Activities based on the activeTab */}
        {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}     
       {/* Apply the class here */}
            <CardSlider images={images} name = "Dubai"/>  
            <CardSlider images={images2} name = "Singapore"/> 
            <CardSlider images={images} name = "North East"/> 
            <CardSlider images={images} name = "Jaipur"/> 
            <CardSlider images={images} name = "Kolkata"/> 
            <LogoAnimation></LogoAnimation>
            <CardSlider images={images} name = "New Delhi"/> 
            <CardSlider images={images} name = "Tamil Nadu"/> 
            <CardSlider images={images} name = "Kerela "/> 
            <CardSlider images={images} name = "Myanmar"/>  
             <Footer></Footer>
        </div>
    
  );
}

export default App;
