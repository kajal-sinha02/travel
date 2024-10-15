import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Destination from "../components/Destination";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import { images, images2 } from "../array/imageData";
import Footer from "../components/Footer";
import LogoAnimation from "../components/LogoAnimation";
import Slideshow from "../components/Slideshow";
import CardSliders from "../components/CardSliders";
import Work from "../components/Work";
import ViewAll from "./ViewAll";
import GridTravel from "../components/GridTravel";
import TravelCard2 from "../components/TravelCard2";
import TravelCards from "../components/TravelCards";
import Plan from "../components/Plan";
import CommunityReviews from "../components/CommunityReviews";
import Login from "../components/Login";
const Home = () => {
  const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <>
      <Navbar />
      {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}

      {/* Multiple CardSliders */}
      <TravelCard2 heading="Plan as per the best destinations in India"></TravelCard2>
      <Work></Work>
      <CardSliders images={images} name="Popular Destinations" />
      <CardSliders images={images} name="Jaipur" />
      <CardSliders images={images} name="Uttarakhand" />
      <CardSliders images={images} name="Kerela" />
      <GridTravel title="Plan your trip to anywhere in the world"></GridTravel>
      <Plan></Plan>

      <CommunityReviews></CommunityReviews>

      
    </>
  );
};

export default Home;
