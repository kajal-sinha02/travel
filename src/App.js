import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Destination from "./components/Destination";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { images , images2} from '../src/array/imageData';
import Footer from "./components/Footer";
import LogoAnimation from "./components/LogoAnimation";
import Slideshow from "./components/Slideshow";
import CardSliders from "./components/CardSliders";
import Work from "./components/Work"
import ViewAll from "./Pages/ViewAll";
import ViewAll2 from "./Pages/ViewAll2";
import Home from "./Pages/Home"
import PlanTrip from "./Pages/PlanTrip";
import PlanDetails from "./Pages/PlanDetails"
import Login from "./components/Login";


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
          <Route path="/viewPackages" element={<ViewAll2 />} />
        
  
        </Routes>
        <Footer /> 
    
      </div>
    </Router>
  );
}

export default App;
