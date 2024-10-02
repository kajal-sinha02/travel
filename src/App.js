import React, { useState } from "react";
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import CardSlider from "./components/pages/CartSlider";
import {images , images2 , images3 ,images4 , images5 ,images6 ,images7 ,images8 ,images9} from '../src/array/imageData'
import Footer from "./components/pages/Footer";
import LogoAnimation from "./components/pages/LogoAnimation";
import Slideshow from "./components/pages/Slideshow";
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
            <CardSlider images={images3} name = "North East"/> 
            <CardSlider images={images4} name = "Jaipur"/> 
            <LogoAnimation></LogoAnimation>
            <CardSlider images={images5} name = "Kolkata"/> 
           
            <CardSlider images={images6} name = "New Delhi"/> 
            <Slideshow></Slideshow>
            <CardSlider images={images7} name = "Tamil Nadu"/> 
            <CardSlider images={images8} name = "Kerela "/> 
            <CardSlider images={images9} name = "Myanmar"/>  
             <Footer></Footer>
        </div>
    
  );
}

export default App;
