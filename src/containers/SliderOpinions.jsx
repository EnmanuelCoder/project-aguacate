// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import UserOpinions from "../components/UserOpinions";

export default function App() {
  return (
    <section className="conatiner mx-auto">
      <h2 className="text-center text-3xl py-20">Comments from our clients</h2>
      <section className="w-full mx-auto px-4 h-96 flex justify-center p-4">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <UserOpinions
              nombre="Juan Perez."
              pais="Colombia."
              mensaje="Excellent service, support is available 24/7 for the customer. Fresh avocados of the best quality I love this platform I recommend it 100%"
              foto="p1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserOpinions
              nombre="Mireya Peña."
              pais="Venezuela."
              mensaje="Excellent service, support is available 24/7 for the customer. Fresh avocados of the best quality I love this platform I recommend it 100%"
              foto="p3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserOpinions
              nombre="Julio Diaz."
              pais="USA."
              mensaje="Excellent service, support is available 24/7 for the customer. Fresh avocados of the best quality I love this platform I recommend it 100%"
              foto="p2"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}
