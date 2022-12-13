import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"

import { useAppContext } from '../../context/AppCtx'
import { Container } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";

import logoCmp from "../../assets/png/clientes/logos/Logo-CMP_WEB.jpeg";
import logoMc from "../../assets/png/clientes/logos/Logo_mc.jpg";
import TPC from "../../assets/png/clientes/tcp_cliente.png";
import MTA from "../../assets/png/clientes/logos/MTA.png";
import Ulog from "../../assets/png/clientes/logos/Ulog.jpeg";
import Famesa from "../../assets/png/clientes/logos/Famesa.png";

export default function ReviewClientes() {

  const clientes = [logoCmp, TPC, logoMc,  MTA, Ulog, Famesa]
  return (
    <Container className="my-5" fluid>
      <h4 className="text-uppercase text-center my-4">Algunos de nuestros clientes</h4>
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
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{delay: 3000}}
        className="mySwiper"
      >
        {
          clientes.map((cliente, index) => (
            <SwiperSlide key={index}>
              <div className="d-block bg-dark text-light position-relative"
              
              style= {{height: "160px"}}>
                <img src={cliente} alt="" className="d-block w-100 h-100"/>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}
