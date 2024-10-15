import React from "react";
import Mid from "../components/Mid";
import Navbar from "../components/Navbar";
import { images } from "../array/imageData";
import CardSliders from "../components/CardSliders";
import GridTravel2 from "../components/GridTravel2";
import TravelCards from "../components/TravelCards";
import TravelCard2 from "../components/TravelCard2";
import Description from "../components/Description";
import Work from "../components/Work";
import Plan from "../components/Plan";
import CommunityReviews from "../components/CommunityReviews";
import LogoAnimation from "../components/LogoAnimation";
import Itinerary from "../components/Itinerary";
import RateCard from "../components/RateCard";
import "../css/PlanDetails.css"
import Stay from "../components/Stay";
import TripHighlights from "../components/TripHighlights";
import Heading from "../components/Heading";
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
      {/* <TravelCard2 heading="Destinations"></TravelCard2> */}
      <Plan></Plan>
      <LogoAnimation></LogoAnimation>
      <CommunityReviews></CommunityReviews>
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
