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
      {/* <div className="w-full h-24">
        <h2 className="text-3xl font-bold ">
          Some comments from our customers.
        </h2>
      </div> */}
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
              mensaje="Excelente servicio, el soporte esta las 24/7 a disposicion del cliente. Aguacates frescos y de la mejor calidad me encanta esta plataforma la recomiendo un 100%"
              foto="p1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserOpinions
              nombre="Mireya Peña."
              pais="Venezuela."
              mensaje="Excelente servicio, el soporte esta las 24/7 a disposicion del cliente. Aguacates frescos y de la mejor calidad me encanta esta plataforma la recomiendo un 100%"
              foto="p3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserOpinions
              nombre="Julio Diaz."
              pais="USA."
              mensaje="Excelente servicio, el soporte esta las 24/7 a disposicion del cliente. Aguacates frescos y de la mejor calidad me encanta esta plataforma la recomiendo un 100%"
              foto="p2"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}
