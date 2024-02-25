import React from "react";
import { Link } from "react-router-dom";
import "./DestinationArea.css";

const DestinationArea = () => {
  return (
    <div className="destination-area destination-bg my-24 py-20 ">
      <div className="mx-auto container space-y-5 px-4">
        <span className="ml-2 text-white bg-amber-500 uppercase rounded-full tracking-widest py-1 px-2">
          Offer Deals
        </span>
        <h2 className="text-3xl text-white font-bold">
          Your Great Destination
        </h2>
        {/* destination content */}
        <p className="text-slate-300 text-start">
          Get rewarded for your travels – unlock instant savings of 10% <br />{" "}
          or more with a free{" "}
          <span className="text-amber-400">Geairinfo.com</span> account
        </p>
        <div className="space-y-3 md:space-y-0 md:flex">
          <div className="bg-white rounded-lg  w-50 md:w-80 lg:w-80 ">
            <div className="p-4 flex justify-between">
              <div>
                <p className="text-3xl font-bold text-black">5830+</p>
                <p className="text-rose-900 ">Happy Customers</p>
              </div>
              <i class="fa-solid fa-user-group text-rose-900 text-5xl"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg  w-50 md:w-80 lg:w-80   md:ml-3">
            <div className="p-4 flex justify-between">
              <div>
                <p className="text-3xl font-bold text-black">100%</p>
                <p className="text-rose-900">client satisfied</p>
              </div>
              <i className="fa-sharp fa-solid fa-globe text-rose-900 text-5xl"></i>
            </div>
          </div>
        </div>
        <div>
          <span className="text-slate-300">
            Discover the latest offers & news and start planning
          </span>
          <span>
            <Link
              to="/contact"
              className="ml-2 text-white bg-amber-500 uppercase rounded-full tracking-widest py-1 px-2"
            >
              Contact us
            </Link>
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DestinationArea;
