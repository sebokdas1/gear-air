import React from "react";
import { AiFillWechat } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import "./CustomarService.css";

const CustomarService = () => {
  return (
    <div className="lg:flex lg:gap-3 items-center justify-center">
      <div className="flex gap-2 items-center bg-[#fff] p-[35px] lg:mb-[30px] customarService rounded-[15px]]">
        <div>
          {/* <img src={AiFillWechat} alt="" /> */}
          <h1 className="text-5xl text-[#622243]">
            <AiFillWechat />
          </h1>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold mb-[5px]">
            We are now available
          </h1>
          <h2 className="text-[14px] text-[#606575] mb-0 font-medium leading-[1.3]">
            call +880 1730 661569 for <br />
            contuct with us
          </h2>
        </div>
      </div>

      <div className="flex gap-2 items-center bg-[#fff] p-[35px] lg:mb-[30px]  rounded-[15px]] customarService">
        <div>
          <h1 className="text-5xl text-[#622243]">
            <FaPlane />
          </h1>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold mb-[5px]">
            International Flight
          </h1>
          <h2 className="text-[14px] text-[#606575] mb-0 font-medium leading-[1.3]">
            call +880 1730 661569 for <br />
            booking assistance
          </h2>
        </div>
      </div>

      <div className="flex gap-2 items-center bg-[#fff] p-[35px] lg:mb-[30px] customarService rounded-[15px]]">
        <div>
          <h1 className="text-5xl text-[#622243]">
            <RiRefund2Fill />
          </h1>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold mb-[5px]">Check Refund</h1>
          <h2 className="text-[14px] text-[#606575] mb-0 font-medium leading-[1.3]">
            call +880 1730 661569 for <br />
            refund status
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CustomarService;
