import React from "react";
import img1 from "../../../images/offer_img01.jpg";
import img2 from "../../../images/offer_img02.jpg";
import img3 from "../../../images/offer_img03.jpg";
import img4 from "../../../images/offer_img04.jpg";
import img5 from "../../../images/offer_img05.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

const FlightOffer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center sm:justify-start">
        <span className=" uppercase text-sm text-amber-500">Offer deals</span>
      </div>
      <div className="sm:flex sm:justify-between text-center space-y-2 mt-2">
        <h2 className="font-bold md:text-3xl ">Flight Offer Deals</h2>
        <p className="text-[#6a2e4d] text-[16px] font-semibold flex items-center justify-between gap-3">
          <span>Best Price Guarantee</span>
          <span>
            <AiFillCheckCircle />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div>
          <div className="w-full bg-white rounded-lg shadow-lg ">
            <img
              src={img1}
              alt=""
              className="block rounded-lg  sm:w-full sm:mx-0 sm:shrink-0"
            />
            {/* Flight offer content */}
            <div className="p-3">
              <div>
                <p className="text-lg font-semibold ">Dhaka to Dubai</p>
                <span className="text-xs">09 Jun 2022 - 16 Jun 2022</span>
              </div>
              <div>
                <p className="text-xs">Economy from</p>
                <p className="font-semibold">$ 290</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
          <div>
            <div className="w-full bg-white rounded-lg shadow-lg p-3 space-y-3">
              <img src={img2} alt="" className="rounded-lg w-full" />
              {/* Flight offer content */}
              <div>
                <p className="text-lg font-semibold">New York to California</p>
                <span className="text-xs">09 Jun 2022 - 16 Jun 2022</span>
              </div>
              <div>
                <p className="text-xs">Economy from</p>
                <p className="font-semibold">$ 290</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full bg-white rounded-lg shadow-lg p-3 space-y-3">
              <img src={img3} alt="" className="rounded-lg w-full" />
              {/* Flight offer content */}
              <div>
                <p className="text-lg font-semibold">Malaga to Finland</p>
                <span className="text-xs">09 Jun 2022 - 16 Jun 2022</span>
              </div>
              <div>
                <p className="text-xs">Economy from</p>
                <p className="font-semibold">$ 792 </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full bg-white rounded-lg shadow-lg p-3 space-y-3">
              <img src={img4} alt="" className="rounded-lg w-full" />
              {/* Flight offer content */}
              <div>
                <p className="text-lg font-semibold">Dubai to Maldives</p>
                <span className="text-xs">09 Jun 2022 - 16 Jun 2022</span>
              </div>
              <div>
                <p className="text-xs">Economy from</p>
                <p className="font-semibold">$ 980</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full bg-white rounded-lg shadow-lg p-3 space-y-3">
              <img src={img5} alt="" className="rounded-lg w-full" />
              {/* Flight offer content */}
              <div>
                <p className="text-lg font-semibold">Dubai to New York</p>
                <span className="text-xs">09 Jun 2022 - 16 Jun 2022</span>
              </div>
              <div>
                <p className="text-xs">Economy from</p>
                <p className="font-semibold">$ 350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightOffer;
