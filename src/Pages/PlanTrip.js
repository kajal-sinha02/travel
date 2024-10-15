import React from "react";
import Mid from "../components/Mid";
import Navbar from "../components/Navbar";
import { images } from "../array/imageData";
import CardSliders from "../components/CardSliders";
import Footer from "../components/Footer";
import GridTravel from "../components/GridTravel";
import TravelCards from "../components/TravelCards";
import TravelCard2 from "../components/TravelCard2";
const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
      <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODgzNDM5OTM2MTYxMDQxMjU5NzY1NjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ=="></Mid>
      <CardSliders images={images} name="Best Deals" />
      <TravelCards heading="Top countries to visit in Europe"></TravelCards>
      <CardSliders images={images} name="Dubai" />
      <CardSliders images={images} name="Singapore" />
      <TravelCard2  heading="Plan as per the best destinations in India"></TravelCard2>
      <CardSliders images={images} name="China" />
      <CardSliders images={images} name="Jaipur" />

      <CardSliders images={images} name="Family Tours" />
      <GridTravel title="Dubai Delights | Crossroad Cultures of the Middle East"></GridTravel>
      <TravelCard2 heading="Top countries to visit in Asia"></TravelCard2>
      <CardSliders images={images} name="Popular Destinations" />

      <GridTravel title="Plan trip as per mood"></GridTravel>
      <CardSliders images={images} name="Dubai" />
     
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
