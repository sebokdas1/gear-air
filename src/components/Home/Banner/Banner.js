import React from "react";
// import DestinationImg from "../../../images/destination_bg.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bannerSection flex items-center">
      {/* <img src={DestinationImg} alt="" /> */}
      <div className="px-6 md:px-12 lg:px-20">
        <h1 className="text-white text-[44px]">
          A Lifetime of Discounts? It's Genius.
        </h1>
        <h6 className="text-[#eae8e8] text-[16px] mb-8">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Geairinfo.com account
        </h6>
        <Link
          to="/signin"
          className="text-[18px] text-[#2c111f] rounded-[5px] py-[18px] px-[20px] bg-yellow-300 hover:bg-[#250717] hover:text-white font-medium"
        >
          Sign in / register
        </Link>
      </div>
    </div>
  );
};

export default Banner;
