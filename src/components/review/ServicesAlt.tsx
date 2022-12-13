import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container, Button } from "react-bootstrap";
import CardRb from "../CardRb";
import {useAppContext} from '../../context/AppCtx'

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function ReviewServiceAlt() {

  const { services } = useAppContext();
  const navigate = useNavigate();

  return (
    <Container fluid className="my-4 text-center">
      <h4 className="text-center my-3 text-uppercase">Algunos de nuestros servicios</h4>
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
            <SwiperSlide key={service.id} style={{
              height: "260px"
            }}>
              <CardRb image={service.img}
                      image2={service.img2}
                      description={service.desc}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
        <Button variant="dark" className="w-50 mt-5" onClick={() => navigate("servicios")}>Ver Más</Button>
    </Container>
  );
}