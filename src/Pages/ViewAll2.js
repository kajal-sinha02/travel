import React from "react";
import Mid from "../components/Mid";
import Navbar from "../components/Navbar";
import { images } from "../array/imageData";
import CardSliders from "../components/CardSliders";
import CardSliders2 from "../components/CardSliders2";
import Footer from "../components/Footer";
import GridTravel from "../components/GridTravel";
import TravelCards from "../components/TravelCards";
import TravelCard2 from "../components/TravelCard2";
const ViewAll = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTUwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvdmVyIn19fQ=="></Mid> */}
      <Mid backgroundImage="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc5MDUwODgzNDM5OTM2MTYxMDQxMjU5NzY1NjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ== "></Mid>
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      {/* <GridTravel title="Plan trip as per mood"></GridTravel> */}
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
      <CardSliders2 images={images} name="" />
     
      {/* <Footer></Footer> */}
    </>
  );
};

export default ViewAll;
