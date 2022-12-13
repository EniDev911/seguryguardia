import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useAppContext } from '../../context/AppCtx'
import CardRb from "../CardRb";
import { Container } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ReviewService() {
  const { services } = useAppContext();
  return (
    <Container className="my-4" fluid>
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
        {
          services.map((service) => (
            <SwiperSlide key={service.id}>
              <CardRb
                image={service.img}
                image2={service.img2}
                title={service.title}
                description={service.desc}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}






