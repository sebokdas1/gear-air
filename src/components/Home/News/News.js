import React, { useState } from "react";
import { SlUser } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./News.css";
import { Link } from "react-router-dom";

const News = () => {
  const [smallNews] = useState([
    {
      id: "news1",
      writer: "Emely Watson",
      date: "January 19, 2023",
      img: "assets/img/blog/blog_img02.jpg",
      subject: "Happy International Country Flight Attendant Day",
    },
    {
      id: "news2",
      writer: "Khandaker Sajjat",
      date: "January 27, 2023",
      img: "assets/img/blog/blog_img03.jpg",
      subject: "The US is a Large Country, Climate Varies by Region",
    },
    {
      id: "news3",
      writer: "Rifat Hossen",
      date: "February 04, 2023",
      img: "assets/img/blog/blog_img04.jpg",
      subject: "But There are Dozen of Low-cost Airlines Including",
    },
  ]);

  return (
    <section class="py-20 px-6 md:px-10 lg:px-12 bg-[#fdfdfb]">
      <div class="max-w-[1250px] mx-auto">
        <div class="text-center">
          <div class="">
            <span class="text-[#ffa903] font-medium">OUR NEWS FEEDS</span>
            <h2 class="text-[#21283f] font-bold text-3xl md:text-4xl">
              Latest News Update
            </h2>
          </div>
        </div>
        <div class="mt-16 lg:flex gap-8">
          <div class="relative text-white mb-8 mx-auto __main-news">
            <Link to="/news/news">
              <div class="rounded-2xl overflow-hidden">
                <img
                  src="assets/img/blog/blog_img01.jpg"
                  alt=""
                  className="duration-700 rounded-2xl w-full"
                />
              </div>
              <div class="absolute bottom-5 left-5 md:bottom-10 md:left-10">
                <ul className="sm:flex gap-10">
                  <li className="flex items-center gap-2">
                    <SlUser /> Emely Watson
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCalendarAlt /> February 19, 2022
                  </li>
                </ul>
                <h2 class="font-semibold md:font-bold text-xl sm:text-2xl md:text-3xl sm:mt-4">
                  Depending on your departure point and destination flights
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-5 __small-news-div">
            {smallNews.map((news) => (
              <>
                <div class="flex gap-5">
                  <div class="rounded-xl overflow-hidden w-[200px] max-w-1/4">
                    <Link to={`/news/${news.id}`}>
                      <img
                        src={news.img}
                        alt=""
                        className="rounded-xl duration-700"
                      />
                    </Link>
                  </div>
                  <div class="flex flex-col">
                    <ul className="flex flex-col sm:flex-row gap-0 sm:gap-10 text-[#878d96]">
                      <li className="flex items-center gap-2">
                        <SlUser />{" "}
                        <Link to={`/news/all?author=${news.writer}`}>
                          {news.writer}
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCalendarAlt />{" "}
                        <Link to={`/news/all?date=${news.date}`}>
                          {news.date}
                        </Link>
                      </li>
                    </ul>
                    <h2 class="text-lg md:text-2xl font-semibold sm:mt-3">
                      <Link to={`/news/${news.id}`}>{news.subject}</Link>
                    </h2>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
