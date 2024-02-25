import React from "react";
import plane from "./Images/plane.jpg";
import zigzag from "./Images/zigzag.png";
import post from "./Images/post.jpg";
import sub from "./Images/sub.png";
import "./blogPageStyle.css";

import {
  BsBookmark,
  BsPerson,
  BsBell,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const AllBlogPage = () => {
  const blogs = [
    {
      id: 1,
      img: plane,
      name: "Purchase flight ticket easily & securely",
      des: "Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking in via a single channel.",
    },
    {
      id: 2,
      img: plane,
      name: "Purchase flight ticket easily & securely",
      des: "Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking in via a single channel.",
    },
    {
      id: 3,
      img: plane,
      name: "Purchase flight ticket easily & securely",
      des: "Enjoy an even safer and more comfortale travel experience with the Top class Airlines mobile apps You can complete all travel processes such as purchasing a ticket the creating a mobile boarding pass, or checking in via a single channel.",
    },
  ];
  return (
    <div>
      <div className="section1 bg-cover relative bg-[#fff]">
        {/* <img src={Banner} alt="" /> */}
        <div className="py-[100px] md:py-[125px] container flex justify-center align-center">
          <div className="flex flex-col ">
            <h2 className="text-[#fff] text-4xl md:text-5xl font-bold ">
              Latest News
            </h2>
            <div className="flex   justify-center py-2">
              <Link className="text-[#fff] text-lg font-medium" to="/">
                Home
              </Link>
              {/* <h6 className="text-[#fff] text-lg font-medium">Home</h6> */}
              <span className="text-[#dad8d8] font-normal mt-[2px] before:content-['|'] before:px-2 "></span>
              <h6 className="text-[#ffa903] text-lg font-medium ">Our Blog</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 py-16 px-5 md:py-24 md:px-28">
        <div className="flex flex-col md:flex-row  w-full">
          <div className=" md:w-4/6">
            {blogs.map((blog) => {
              return (
                <div className="">
                  <div className="thumbnail    ">
                    <Link to={`/blog_details/${blog.id}`}>
                      <img
                        className="object-cover h-96 w-full rounded-lg"
                        src={blog.img}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="blogContent">
                    <div className="part1 flex py-2">
                      <ul className=" flex">
                        <li className="flex space-x-2">
                          <div className="mt-1">
                            <BsBookmark />
                          </div>
                          <i className="not-italic text-normal ">
                            <Link
                              to=""
                              href=""
                              className="all_hover hover_text"
                            >
                              Airline{" "}
                            </Link>
                            <span>,</span>
                            <Link
                              to=""
                              href=""
                              className="all_hover hover_text"
                            >
                              Flight
                            </Link>
                          </i>
                        </li>
                        <span className="px-2 before:content-['/'] "></span>
                        <li className="flex space-x-2">
                          <div className="mt-1">
                            <BsPerson />
                          </div>
                          <i className="not-italic text-normal ">
                            <Link
                              to=""
                              href=""
                              className="all_hover hover_text"
                            >
                              Admin
                            </Link>
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
                    <div className="part2 ">
                      <h2 className="all_hover hover_text  text-2xl md:text-[34px] mb-4 font-bold">
                        <Link to={`/blog_details/${blog.id}`}>{blog.name}</Link>
                      </h2>
                      <p className="mb-4 text-base ">{blog.des}</p>
                      <div className="flex text-lg font-semibold all_hover hover_text">
                        <Link to={`/blog_details/${blog.id}`}>
                          <h5>Read More </h5>
                        </Link>

                        <MdKeyboardArrowRight className="text-2xl text-orange mt-1" />
                      </div>
                      <div className="my-10">
                        <img className="" src={zigzag} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            <div className="newsletter  bg-[#143556]  mb-7">
              <div className=" flex flex-col align-center">
                <img className="mb-6" src={sub} alt="" />

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

export default AllBlogPage;
