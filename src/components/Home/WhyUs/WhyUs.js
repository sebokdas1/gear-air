import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCheck2Square } from "react-icons/bs";
import { Navigation } from "swiper";

import "./WhyUs.css";

const WhyUs = () => {
  const [items] = useState([1, 2, 3, 4]);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="bg-[#fbf9f2] py-24 px-6 md:px-10">
      <div className="max-w-[1250px] mx-auto __why_us">
        <div className="sm:flex sm:justify-between">
          <div>
            <span className="__subtitle">Why Air geair</span>
            <h2 className="__title text-2xl md:text-3xl">
              Our Great Flight Options
            </h2>
          </div>
          <div
            class="service-nav flex gap-5"
            style={{ justifyContent: "flex-end" }}
          >
            <span
              class="cursor-pointer bg-white shadow-lg rounded-md flex justify-center items-center w-12 h-12 duration-300 hover:bg-gray-100"
              ref={(node) => setPrevEl(node)}
            >
              <HiArrowLeft />
            </span>
            <span
              class="cursor-pointer bg-white shadow-lg rounded-md flex justify-center items-center w-12 h-12 duration-300 hover:bg-gray-100"
              ref={(node) => setNextEl(node)}
            >
              <HiArrowRight />
            </span>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          className="flex mt-10"
          pagination={{ clickable: true }}
          navigation={{ nextEl, prevEl }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((i) => (
            <SwiperSlide key={i}>
              <div className="__service-item duration-300 user-select-none hover:bg-green-100 ">
                <div className="__service-icon">
                  <img
                    src={`assets/img/icon/service_icon0${i}.png`}
                    alt=""
                    className="duration-3000"
                  />
                </div>
                <div className="__service-content">
                  <span>Service 0{i}</span>
                  <h2>Pre-Book Your Baggage</h2>
                  <div className="__service-list">
                    <ul>
                      <li>
                        <BsCheck2Square className="text-[#571336]" /> Pre-book
                        your baggage <i className="flaticon-check-mark"></i>
                      </li>
                      <li>
                        <BsCheck2Square className="text-[#571336]" /> Allowance
                        now and save up <i className="flaticon-check-mark"></i>
                      </li>
                      <li>
                        <BsCheck2Square className="text-[#571336]" /> 90% of
                        baggage charges <i className="flaticon-check-mark"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyUs;
