import React from "react";

import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer
      className="footer-area footer-bg bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/assets/img/bg/footer_bg.jpg')` }}
    >
      <div className="max-w-[1250px] mx-auto py-20 text-white">
        <div className="inline-block w-full sm:w-1/2 lg:w-1/4 px-5 py-10">
          <Link to="/">
            <img src="assets/img/logo/logo.png" alt="" />
          </Link>
          <div className="">
            <p className="text-xl font-semibold my-5">
              Online to make your journey even more memorable access or meet
            </p>
            <hr className="my-5 border-gray-300" />
            <ul className="flex gap-2">
              <li>
                <a
                  href="https://www.facebook.com/sebokdasbd/"
                  className="inline-block bg-black p-3 rounded-full duration-300 hover:scale-110"
                >
                  <GrFacebookOption />
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="inline-block bg-black p-3 rounded-full duration-300 hover:scale-110"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sebokdasbd/"
                  className="inline-block bg-black p-3 rounded-full duration-300 hover:scale-110"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sebokdasbd/"
                  className="inline-block bg-black p-3 rounded-full duration-300 hover:scale-110"
                >
                  <TiSocialLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="inline-block pl-5 sm:pl-20 w-full sm:w-1/2 lg:w-1/4 px-5 py-10 relative sm:-top-[12px] lg:-top-[44px]">
          <h4 className="mb-5 font-bold text-xl">Explore</h4>
          <ul>
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About us</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Awards</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </div>

        <div className="inline-block w-full sm:w-1/2 lg:w-1/4 px-5 py-10 relative sm:-top-[12px] lg:-top-[44px]">
          <h4 className="mb-5 font-bold text-xl">Privacy</h4>
          <ul>
            <li className="footer-link">
              <Link to="/">Airline fees</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Airline guides</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Airport guides</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Low fare tips</Link>
            </li>
            <li className="footer-link">
              <Link to="/">Flights</Link>
            </li>
          </ul>
        </div>
        <div className="inline-block w-full sm:w-1/2 lg:w-1/4 px-5 py-10  ">
          <h4 className="mb-5 font-bold text-xl">Contacts</h4>
          <p>PO Box W75 Street lan West new queens</p>
          <h2 className="text-[#ffa903] text-2xl font-medium my-2">
            <a href="tel:01730661569">+8801 7306 61569</a>
          </h2>
          <a
            href="mailto:sebok.das66@gmail.com"
            className="text-[#ffa903] inline-block mb-2"
          >
            geair@company.com
          </a>
          <form action="#" className="relative w-[222px]">
            <input
              type="email"
              className="h-12 px-4 outline-none text-gray-600 w-[170px] bg-white"
              placeholder="Enter your email"
            />
            <button
              disabled
              type="submit"
              className="absolute top-0 right-2 bg-[#ffa903] w-12 h-12 flex items-center justify-center"
            >
              <FaTelegramPlane className="" />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#13171d] py-[30px]">
        <div className="max-w-[1250px] mx-auto text-white flex flex-col md:flex-row items-center gap-4 justify-between">
          <p>
            Copyright &copy; {currentYear}. All Rights Reserved By{" "}
            <Link to="/" className="text-[#ffa903] font-medium">
              Geair
            </Link>
          </p>
          <img src="assets/img/images/cart.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
