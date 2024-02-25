import React from "react";
import plane from "./Images/plane.jpg";
import zigzag from "./Images/zigzag.png";
import post from "./Images/post.jpg";
import sub from "./Images/sub.png";
import bg1 from "./Images/blog_details_img01.jpg";
import bg2 from "./Images/blog_details_img02.jpg";
import prev from "./Images/preview_arrow.png";
import fb from "./Images/facebook.png";
import insta from "./Images/instagram.png";
import twit from "./Images/twitter.png";
import "./blogPageStyle.css";

import {
  BsBookmark,
  BsPerson,
  BsBell,
  BsChevronDoubleRight,
} from "react-icons/bs";

import { GiMagnifyingGlass } from "react-icons/gi";

import { Link } from "react-router-dom";

const NewsDetailsPage = ({ blogDetails }) => {
  return (
    <div>
      <div className="section1 bg-cover relative bg-[#fff]">
        {/* <img src={Banner} alt="" /> */}
        <div className="py-[100px] md:py-[125px] container flex justify-center align-center">
          <div className="flex flex-col ">
            <h2 className="text-[#fff] text-4xl md:text-5xl font-bold ">
              News Details
            </h2>
            <div className="flex   justify-center py-2">
              <h6 className="text-[#fff] text-lg font-medium">Home</h6>
              <span className="text-[#dad8d8] font-normal mt-[2px] before:content-['|'] before:px-2 "></span>
              <h6 className="text-[#ffa903] text-lg font-medium ">
                Blog Single
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 py-16 px-5 md:py-24 md:px-28">
        <div className="flex flex-col md:flex-row  w-full">
          <div className=" md:w-4/6">
            <div className="">
              <div className="thumbnail    ">
                <img
                  className="object-cover h-96 w-full rounded-lg"
                  src={plane}
                  alt=""
                />
              </div>
              <div className="blogContent">
                <div className="part1 flex py-2">
                  <ul className=" flex">
                    <li className="flex space-x-2">
                      <div className="mt-1">
                        <BsBookmark />
                      </div>
                      <i className="not-italic text-normal">
                        <a href="">Airline </a>
                        <span>,</span>
                        <a href="">Flight</a>
                      </i>
                    </li>
                    <span className="px-2 before:content-['/'] "></span>
                    <li className="flex space-x-2">
                      <div className="mt-1">
                        <BsPerson />
                      </div>
                      <i className="not-italic text-normal">
                        <a href="">Admin</a>
                      </i>
                    </li>
                    <span className="px-2 before:content-['/'] "></span>
                    <li className="flex space-x-2">
                      <div className="mt-1">
                        <BsBell />
                      </div>
                      <i className="not-italic text-normal">Mar 10, 2023</i>
                    </li>
                  </ul>
                </div>
                <div className="part2">
                  <h2 className="text_heading all_hover text-2xl md:text-[34px] mb-[20px] font-bold">
                    Purchase flight ticket easily & securely
                  </h2>
                  <div className=" text-base ">
                    <div className="bodyPart1">
                      <p className="blogPara  font-semibold ">
                        Enjoy an even safer and more comfortale travel
                        experience with the Top class Airlines mobile apps You
                        can complete all travel processes such as purchasing a
                        ticket the creating a mobile boarding pass, or checking
                        in via a single channel. There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form.
                      </p>
                    </div>
                    <div className="bodyPart2 ">
                      <p className="blogPara  font-semibold">
                        Comfortale travel experience with the Top class Airlines
                        mobile apps You can complete all travel processes such
                        as purchasing a ticket the creating a mobile boarding
                        pass, or checking in via a single channel. There are
                        many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                      </p>
                    </div>
                    <blockquote>
                      <p>
                        “ Comfortale travel experience with the Top class
                        Airlines mobile apps You can complete all travel
                        processes such as purchasing registered user profile
                        through the mobile ”
                      </p>
                      <cite>Tomas Alexander</cite>
                    </blockquote>
                    <div className="bodyPart3 ">
                      <p className="blogPara  font-semibold">
                        Enjoy an even safer and more comfortale travel
                        experience with the Top class Airlines mobile apps You
                        can complete all travel processes such as purchasing a
                        ticket the creating a mobile boarding pass, or checking
                        in via a single channel. There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form.
                      </p>
                    </div>
                    <div className="bodyPart4 blog_images flex flex-col md:flex-row w-full my-6 md:space-x-5 space-y-5 md:space-y-0">
                      <div className=" md:w-1/2 ">
                        <img className="rounded-md w-full" src={bg1} alt="" />
                      </div>
                      <div className="md:w-1/2">
                        <img className="rounded-md w-full" src={bg2} alt="" />
                      </div>
                    </div>
                    <div className="bodyPart5">
                      <p className="blogPara  font-semibold">
                        Enjoy an even safer and more comfortale travel
                        experience with the Top class Airlines mobile apps You
                        can complete all travel processes such as purchasing a
                        ticket the creating a mobile boarding pass, or checking
                        in via a single channel. There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form.
                      </p>
                    </div>
                    <div className="bodyPart6">
                      <div className="flex flex-col md:flex-row  align-center  justify-between mt-14">
                        <div className="taglist">
                          <ul className="flex align-center flex-wrap">
                            <li className="text-[16px] text-[#21283f] mb-[5px] uppercase font-semibold mr-[12px] pr-0">
                              Tags :
                            </li>
                            <li className="list_common">Airline </li>
                            <li className="list_common">Travel </li>
                            <li className="list_common">Booking </li>
                            <li>Hotel </li>
                          </ul>
                        </div>

                        <div className="">
                          <ul className="flex align-center justify-start md:justify-center space-x-2">
                            <li className="">
                              <Link to="">
                                <img className="h-8 " src={fb} alt="" />
                              </Link>
                            </li>

                            <li className="">
                              <Link to="">
                                <img className="h-8 " src={insta} alt="" />
                              </Link>
                            </li>

                            <li className="">
                              <Link to="">
                                <img className="h-8 " src={twit} alt="" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-10">
                    <img className="" src={zigzag} alt="" />
                  </div>

                  <div className="avatar md:p-[35px]">
                    <div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                      <img
                        class="_image w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto"
                        src={plane}
                        alt=""
                      />
                      <div class="pt-6 md:pt-2 md:px-4 text-center md:text-left ">
                        <h4 class="text-lg font-medium font">
                          Tomas Alexander
                        </h4>
                        <p className="py-3 font-normal text-[#888787]">
                          Dnjoy an even safer and more comfortale travel
                          experience with the Top class Airlines mobile apps You
                          can complete
                        </p>

                        <div className="">
                          <ul className="flex align-center md:justify-start justify-center  space-x-3">
                            <li className="">
                              <Link to="">
                                <img className="h-6 " src={fb} alt="" />
                              </Link>
                            </li>

                            <li className="">
                              <Link to="">
                                <img className="h-6 " src={insta} alt="" />
                              </Link>
                            </li>

                            <li className="">
                              <Link to="">
                                <img className="h-6 " src={twit} alt="" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prev_button uppercase mb-[100px]">
                    <Link to="" className="text-lg font-bold flex">
                      <img className="mr-[15px]" src={prev} alt="" />
                      <h3 className="mt-3"> Previous post</h3>
                    </Link>
                  </div>

                  <div className="comment mb-[100px] p-[35px] md:p-[40px]  ">
                    <h4 className="comment_title text-2xl font-bold relative pb-2 mb-8 ">
                      Leave a Reply
                    </h4>
                    <form action="">
                      <div className=" ">
                        <div className="flex flex-col md:flex-row  md:p-0 space-y-4 md:space-y-0 md:space-x-4">
                          <div className="w-full md:w-1/2 ">
                            <input
                              className="bg-[#fff]"
                              type="text"
                              placeholder="Author*"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <input
                              className="bg-[#fff]"
                              type="email"
                              placeholder="Your Email*"
                            />
                          </div>
                        </div>
                        <div className=" md:px-0 py-4">
                          <textarea
                            className="bg-[#fff]"
                            placeholder="Type Comment Here..."
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>

                        <div className="ml-5 md:ml-0">
                          <div className="flex items-start mb-6  ">
                            <input
                              className=" w-auto mt-1 mr-2"
                              type="checkbox"
                              name=""
                              id="checkbox"
                            />
                            <label htmlFor="checkbox">
                              Don't show your email address
                            </label>
                          </div>
                          <button className=" transition ease-in-out text-[#fff] uppercase bg-orange hover:bg-[#d63384] duration-300 rounded-lg text-medium align-center font-bold py-4 px-6 ">
                            Submit now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right part */}

          <div className="md:w-2/6 md:ml-[15px] md:space-x-10 ">
            <div></div>
            <div className="search1 common  py-10  mb-7">
              <h4 className="_headingName">Search</h4>
              <form className="relative">
                <input type="text" placeholder="search ..." />
                <button type="submit">
                  <GiMagnifyingGlass />
                </button>
              </form>
            </div>
            <div className="categories common  mb-7">
              <h4 className="_headingName">Categories</h4>
              <div>
                <ul className="all_hover">
                  <li className="  ">
                    <div className="flex justify-between">
                      <Link to="" className="categoryName">
                        Insuarence
                      </Link>
                      <span className="mt-1">
                        <BsChevronDoubleRight />
                      </span>
                    </div>
                  </li>
                  <li className="">
                    <div className="flex justify-between">
                      <Link to="" className="categoryName">
                        Insuarence
                      </Link>
                      <span className="mt-1">
                        <BsChevronDoubleRight />
                      </span>
                    </div>
                  </li>
                  <li className="">
                    <div className="flex justify-between">
                      <Link to="" className="categoryName">
                        Insuarence
                      </Link>
                      <span className="mt-1">
                        <BsChevronDoubleRight />
                      </span>
                    </div>
                  </li>
                  <li className="">
                    <div className="flex justify-between">
                      <Link to="" className="categoryName">
                        Insuarence
                      </Link>
                      <span className="mt-1">
                        <BsChevronDoubleRight />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="recentPost common   mb-7">
              <h4 className="_headingName">Recent Post</h4>
              <div>
                <div className="flex mb-4 align-center ">
                  <div className="mr-3.5 ">
                    <img className="rounded" src={post} alt="" />
                  </div>
                  <div>
                    <p className="flex space-x-2">
                      <BsBell className=" mt-1" />
                      <h3> Mar 10, 2023</h3>
                    </p>
                    <h4 className="text-[15px] font-bold all_hover hover_text">
                      Car Rental Provider
                    </h4>
                    <p className="text-orange">Alex Json</p>
                  </div>
                </div>
                <div className="flex mb-4 rounded align-center">
                  <div className="mr-3.5 ">
                    <img className="rounded" src={post} alt="" />
                  </div>
                  <div>
                    <p className="flex space-x-2">
                      <BsBell className=" mt-1" />
                      <h3> Mar 10, 2023</h3>
                    </p>
                    <h4 className="text-[15px] font-bold">
                      Car Rental Provider
                    </h4>
                    <p className="text-orange">Alex Json</p>
                  </div>
                </div>
                <div className="flex mb-4 rounded align-center">
                  <div className="mr-3.5 ">
                    <img className="rounded" src={post} alt="" />
                  </div>
                  <div>
                    <p className="flex space-x-2">
                      <BsBell className=" mt-1" />
                      <h3> Mar 10, 2023</h3>
                    </p>
                    <h4 className="text-[15px] font-bold">
                      Car Rental Provider
                    </h4>
                    <p className="text-orange">Alex Json</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter bg-[#143556]  mb-7">
              <div className=" flex flex-col align-center">
                <img className="mb-6  w-56 flex mx-auto" src={sub} alt="" />

                <div className="mb-6  text-center">
                  <h4 className="text-[#fff] font-semibold mb-2.5 text-2xl">
                    Subscribe Newsletter
                  </h4>
                  <hp className="text-[#fff] ">Signup For Latest News</hp>
                </div>
                <div className="">
                  <form className="flex flex-col">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit" className="uppercase">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="Tags common   all_hover">
              <h4 className="_headingName">Tags</h4>
              <ul className="flex flex-wrap py-4 align-center m-[0 -3px -6px]">
                <li className="">
                  <Link to="" className="list">
                    Airlines
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Travel
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Booking
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Themeforest
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Creative
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Hotel
                  </Link>
                </li>
                <li className="">
                  <Link to="" className="list ">
                    Slider
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
