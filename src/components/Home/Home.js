import React from "react";
import News from "../Home/News/News";
import WhyUs from "../Home/WhyUs/WhyUs";
import FlightOffer from "./FlightOffer/FlightOffer";
import FlyNext from "./DestinationArea/FlyNext/FlyNext";
import DestinationArea from "./DestinationArea/DestinationArea";
import CustomarService from "./CustomarService/CustomarService";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <CustomarService />
      <FlightOffer />
      <DestinationArea />
      <FlyNext />
      <WhyUs />
      <News />
    </>
  );
};

export default Home;
