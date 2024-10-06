import React from 'react'
import Mid from './Mid'
import Navbar from './Navbar'
import { images } from '../../array/imageData';
import CardSliders from "./CardSliders";
import Footer from './Footer';
import GridTravel from './GridTravel';

const ViewAll = () => {
  return (
    <>
    <Navbar></Navbar>
    <Mid></Mid>
    <CardSliders images={images} name= "Best Deals" />
    <CardSliders images={images} name="Family Tours" />
    <GridTravel title="Dubai Delights | Crossroad Cultures of the Middle East"></GridTravel>
    <CardSliders images={images} name="Popular Destinations" />
    <CardSliders images={images} name="Dubai" />
   <GridTravel title="Plan your trip to anywhere in the world"></GridTravel>
    <Footer></Footer>
    </>
    
  )
}

export default ViewAll
