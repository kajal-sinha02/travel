import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Destination from "./Destination";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import { images , images2} from '../../array/imageData';
import Footer from "./Footer";
import LogoAnimation from "./LogoAnimation";
import Slideshow from "./Slideshow";
import CardSliders from "./CardSliders";
import Work from "./Work"
import ViewAll from "./ViewAll";
import GridTravel from "./GridTravel";
import TravelCard2 from "./TravelCard2";
import TravelCards from "./TravelCards";
import Plan from "./Plan";
import CommunityReviews from "./CommunityReviews";
const Home = () => {
    const [activeTab, setActiveTab] = useState("Tours"); // Toggle state

  return (
    <>
     <Navbar />
              {activeTab === "Tours" ? <Destination /> : <div>Activities Content</div>}

              {/* Multiple CardSliders */}
              <Work></Work>
             <TravelCard2  heading="Plan as per the best destinations in India"></TravelCard2>
             <TravelCards  heading="Top countries to visit in Europe"></TravelCards>
             <TravelCards  heading="Top countries to visit in Asia"></TravelCards>
             <GridTravel title="Plan your trip to anywhere in the world"></GridTravel>
             <Plan></Plan>
             <CardSliders images={images} name="Dubai" />
             <CommunityReviews></CommunityReviews>
             <Footer></Footer>
              {/* <CardSliders images={images} name="Dubai" />
              <CardSliders images={images2} name="Singapore" />
              <CardSliders images={images} name="China" />
              <CardSliders images={images} name="Jaipur" />
              <Slideshow />
              <CardSliders images={images} name="Haryana" />
              <CardSliders images={images} name="Ladakh" />
              <CardSliders images={images} name="Kashmir" />
              <LogoAnimation />
              <CardSliders images={images} name="Kerala" />
              <CardSliders images={images} name="Bihar" />
              <Footer /> */}
    </>
  )
}

export default Home
