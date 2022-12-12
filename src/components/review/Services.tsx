import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s1 from '../../assets/png/services/01b.png'

// import required modules
import { Pagination, Navigation } from "swiper";
import CardRb from "../CardRb";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
        <SwiperSlide>
          <CardRb image={s1}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
