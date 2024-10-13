import React from "react";
import Mid from "./Mid";
import Navbar from "./Navbar";
import { images } from "../../array/imageData";
import CardSliders from "./CardSliders";
import GridTravel2 from "./GridTravel2";
import TravelCards from "./TravelCards";
import TravelCard2 from "./TravelCard2";
import Description from "./Description";
import Work from "./Work";
import Plan from "./Plan";
import CommunityReviews from "./CommunityReviews";
import LogoAnimation from "./LogoAnimation";
import Itinerary from "./Itinerary";
import RateCard from "./RateCard";
import "./PlanDetails.css"
import Stay from "./Stay";
import TripHighlights from "./TripHighlights";
import Heading from "./Heading";
const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
     
      {/* <Description></Description> */}

      {/* New Flexbox container for RateCard and Itinerary */}
    <GridTravel2></GridTravel2>
    <TripHighlights></TripHighlights>
    
      <div className="rate-itinerary-container">
        <Itinerary></Itinerary>
        <RateCard></RateCard>
      </div>
      {/* <Stay></Stay> */}
      <Work></Work>
      <TravelCard2 heading="Destinations"></TravelCard2>
      <Plan></Plan>
      <LogoAnimation></LogoAnimation>
      <CommunityReviews></CommunityReviews>
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
