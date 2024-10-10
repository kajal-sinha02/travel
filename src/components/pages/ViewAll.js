import React from "react";
import Mid from "./Mid";
import Navbar from "./Navbar";
import { images } from "../../array/imageData";
import CardSliders from "./CardSliders";
import Footer from "./Footer";
import GridTravel from "./GridTravel";
import TravelCards from "./TravelCards";
import TravelCard2 from "./TravelCard2";
const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ=="></Mid> */}
      <CardSliders images={images} name="Best Deals" />
      <TravelCards heading="Top countries to visit in Europe"></TravelCards>
      <CardSliders images={images} name="Dubai" />
      <CardSliders images={images} name="Singapore" />
      <TravelCard2  heading="Plan as per the best destinations in India"></TravelCard2>
      <CardSliders images={images} name="China" />
      <CardSliders images={images} name="Jaipur" />

      <CardSliders images={images} name="Family Tours" />
      {/* <GridTravel title="Dubai Delights | Crossroad Cultures of the Middle East"></GridTravel> */}
      <TravelCards heading="Top countries to visit in Asia"></TravelCards>
      <CardSliders images={images} name="Popular Destinations" />

      {/* <GridTravel title="Plan trip as per mood"></GridTravel> */}
      <CardSliders images={images} name="Dubai" />
     
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
