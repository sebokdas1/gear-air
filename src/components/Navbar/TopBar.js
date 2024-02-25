import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#232b38] p-[8px] text-[#cecece]">
        <div className="hidden md:block">
          <Link to="">COVID-19 update & travel requirements</Link>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-4 flex-wrap text-[#cecece]">
            <li className="hover:underline cursor-pointer">Corporate Club</li>
            <li className="hover:underline cursor-pointer">Feedback</li>
            <li className="hover:underline cursor-pointer">Search</li>
            <li className="hover:underline cursor-pointer">Currency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
