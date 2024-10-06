import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import { images } from '../src/array/imageData';
import Footer from "./components/pages/Footer";
import LogoAnimation from "./components/pages/LogoAnimation";
import Slideshow from "./components/pages/Slideshow";
import CardSliders from "./components/pages/CardSliders";

import ViewAll from "./components/pages/ViewAll";

function App() {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <Router>
      <div className="App">
      

        <Routes> {/* Change here from <Switch> to <Routes> */}
          {/* Route for the main page */}
          <Route path="/" element={
            <>
              {/* Conditionally render Destination component or Activities based on the activeTab */}
              <Navbar />
              {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}

              {/* Multiple CardSliders */}
              <CardSliders images={images} name="Dubai" />
              <CardSliders images={images} name="Singapore" />
              <CardSliders images={images} name="China" />
              <CardSliders images={images} name="Jaipur" />
              <Slideshow />
              <CardSliders images={images} name="Haryana" />
              <CardSliders images={images} name="Ladakh" />
              <CardSliders images={images} name="Kashmir" />
              <LogoAnimation />
              <CardSliders images={images} name="Kerala" />
              <CardSliders images={images} name="Bihar" />
              <Footer />
            </>
          }/>

          {/* Route for AllCards page */}
          <Route path="/view" element={<ViewAll />} />
        </Routes>

      
      </div>
    </Router>
  );
}

export default App;
