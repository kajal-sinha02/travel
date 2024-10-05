import React, { useState } from "react";
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import {images , images2 , images3 ,images4 , images5 ,images6 ,images7 ,images8 ,images9} from '../src/array/imageData'
import Footer from "./components/pages/Footer";
import LogoAnimation from "./components/pages/LogoAnimation";
import Slideshow from "./components/pages/Slideshow";
import Card from "./components/pages/Card";
import CardSliders from "./components/pages/CardSliders";
function App() {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <div className="App">
      <Navbar></Navbar>
  
        {/* Conditionally render Destination component or Activities based on the activeTab */}
        {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}     
      
            <CardSliders images ={images} name="Dubai"></CardSliders>
            <CardSliders images ={images} name="Singapore"></CardSliders>
            <CardSliders images ={images} name="China"></CardSliders>
            <CardSliders images ={images} name="Jaipur"></CardSliders>
            <Slideshow></Slideshow>
            <CardSliders images ={images} name="Haryana"></CardSliders>
          
            <CardSliders images ={images} name="Ladakh"></CardSliders>
            <CardSliders images ={images} name="Kashmir"></CardSliders>
            <LogoAnimation></LogoAnimation>
            <CardSliders images ={images} name="Kerela"></CardSliders>
            <CardSliders images ={images} name="Bihar"></CardSliders>
           
             <Footer></Footer>
        </div>
    
  );
}

export default App;
