import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Destination from "./components/pages/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import { images , images2} from '../src/array/imageData';
import Footer from "./components/pages/Footer";
import LogoAnimation from "./components/pages/LogoAnimation";
import Slideshow from "./components/pages/Slideshow";
import CardSliders from "./components/pages/CardSliders";
import Work from "./components/pages/Work"
import ViewAll from "./components/pages/ViewAll";
import Home from "./components/pages/Home";
import PlanTrip from "./components/pages/PlanTrip";
import PlanDetails from "./components/pages/PlanDetails"
function App() {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <Router>
      <div className="App">
      

        <Routes> {/* Change here from <Switch> to <Routes> */}
          {/* Route for the main page */}
          <Route path="/" element={<Home/>}/>
          {/* Route for AllCards page */}
          <Route path="/view" element={<ViewAll />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planTrip" element={<PlanTrip />} />
          <Route path="/planDetails" element={<PlanDetails />} />
        </Routes>
        <Footer /> 
    
      </div>
    </Router>
  );
}

export default App;
