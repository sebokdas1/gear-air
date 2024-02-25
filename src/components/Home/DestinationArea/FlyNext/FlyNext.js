import React, { useEffect, useState } from "react";
import { FaTaxi, FaPlane } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import "./FlyNext.css";

const FlyNext = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [flyitems, setFlyItems] = useState([]);
  useEffect(() => {
    fetch("flyitems.json")
      .then((res) => res.json())
      .then((data) => setFlyItems(data));
  }, []);
  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-center  mb-4">
        <div className="text-center space-y-3">
          <p className="text-amber-500">FLYNEXT PACKAGE</p>
          <h2 className="text-3xl text-black font-bold">
            Your Great Destination
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 space-x-0 md:space-x-3">
        <div
          className="flex justify-center"
          onClick={() => setActiveTab("tab1")}
        >
          <button
            className={`tab-link  ${
              activeTab === "tab1" ? "active" : "tab-link"
            } w-fit `}
          >
            Flights
            <span className="pl-5">
              <FaPlane />
            </span>
          </button>
        </div>
        <div
          className="flex justify-center"
          onClick={() => setActiveTab("tab2")}
        >
          <button
            className={`tab-link ${
              activeTab === "tab2" ? "active" : "tab-link"
            } w-fit `}
          >
            Car Rantals
            <span className="pl-5">
              <AiTwotoneCar />
            </span>
          </button>
        </div>
        <div
          className="flex justify-center"
          onClick={() => setActiveTab("tab3")}
        >
          <button
            className={`tab-link ${
              activeTab === "tab3" ? "active" : "tab-link"
            } w-fit `}
          >
            Taxis
            <span className="pl-5">
              <FaTaxi />
            </span>
          </button>
        </div>
      </div>

      <div className="my-10 lg:px-12">
        <div
          className={`tab-item ${activeTab === "tab1" ? "active" : "tab-item"}`}
        >
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {flyitems.reverse().map((items) => (
              <div
                className="w-full bg-white rounded-lg shadow-lg p-3 space-y-6 text-center flyItem"
                key={items.id}
              >
                <img
                  src={items.img}
                  alt=""
                  className="w-full rounded-t-lg duration-700 item_img"
                />
                <div>
                  <p className="text-sm">
                    {items?.startdate} - {items?.enddate}
                  </p>
                  <p className="font-semibold text-black">{items?.from}</p>
                  <i className="fa-solid fa-arrow-right-arrow-left text-black"></i>
                  <p className="text-lg font-semibold text-black">{items.to}</p>
                </div>
                <div className="flex justify-center">
                  <img src={items.icon} alt="" />
                </div>
                <div className="text-start content-bottom">
                  <p className="text-sm">{items?.Class}</p>
                  <p className="text-xl font-semibold text-black">
                    ${items?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`tab-item ${activeTab === "tab2" ? "active" : "tab-item"}`}
        >
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {flyitems.map((items) => (
              <div
                className="w-full bg-white rounded-lg shadow-lg p-3 space-y-6 text-center flyItem"
                key={items.id}
              >
                <img
                  src={items.img}
                  alt=""
                  className="w-full rounded-t-lg duration-700 item_img"
                />
                <div>
                  <p className="text-sm">
                    {items?.startdate} - {items?.enddate}
                  </p>
                  <p className="font-semibold text-black">{items?.from}</p>
                  <i className="fa-solid fa-arrow-right-arrow-left text-black"></i>
                  <p className="text-lg font-semibold text-black">{items.to}</p>
                </div>
                <div className="flex justify-center">
                  <img src={items.icon} alt="" />
                </div>
                <div className="text-start content-bottom">
                  <p className="text-sm">{items?.Class}</p>
                  <p className="text-xl font-semibold text-black">
                    ${items?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`tab-item ${activeTab === "tab3" ? "active" : "tab-item"}`}
        >
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            {flyitems.reverse().map((items) => (
              <div
                className="w-full bg-white rounded-lg shadow-lg p-3 space-y-6 text-center flyItem"
                key={items.id}
              >
                <img
                  src={items.img}
                  alt=""
                  className="w-full rounded-t-lg duration-700 item_img"
                />
                <div>
                  <p className="text-sm">
                    {items?.startdate} - {items?.enddate}
                  </p>
                  <p className="font-semibold text-black">{items?.from}</p>
                  <i className="fa-solid fa-arrow-right-arrow-left text-black"></i>
                  <p className="text-lg font-semibold text-black">{items.to}</p>
                </div>
                <div className="flex justify-center">
                  <img src={items.icon} alt="" />
                </div>
                <div className="text-start content-bottom">
                  <p className="text-sm">{items?.Class}</p>
                  <p className="text-xl font-semibold text-black">
                    ${items?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyNext;
