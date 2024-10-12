import React from "react";
import Mid from "./Mid";
import Navbar from "./Navbar";
import { images } from "../../array/imageData";
import CardSliders from "./CardSliders";
import GridTravel from "./GridTravel";
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
const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
      <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODgzNDM5OTM2MTYxMDQxMjU5NzY1NjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ== "></Mid>
      <Description></Description>

      {/* New Flexbox container for RateCard and Itinerary */}
      <div className="rate-itinerary-container">
        <Itinerary></Itinerary>
        <RateCard></RateCard>
      </div>
      <Stay></Stay>
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
