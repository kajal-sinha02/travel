import React from "react";
import Mid from "./Mid";
import Navbar from "./Navbar";
import { images } from "../../array/imageData";
import CardSliders from "./CardSliders";
import Footer from "./Footer";
import GridTravel from "./GridTravel";
import TravelCards from "./TravelCards";
import TravelCard2 from "./TravelCard2";
import Description from "./Description";
import Work from "./Work";
import Plan from "./Plan";
import CommunityReviews from "./CommunityReviews";

const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
      <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY1MTAzOTQzNTU4MzY3NDkwNzY4NDMyNjE3MTg4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb3ZlciJ9fX0="></Mid>
      <TravelCards heading="Top locations across Greece"></TravelCards>
      <CardSliders images={images} name="Trips by our users" />
      <Description></Description>
      <Work></Work>
      <TravelCard2 heading="Other Destinations"></TravelCard2>
      <Plan></Plan>
      <CommunityReviews></CommunityReviews>
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
