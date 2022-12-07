import React, { useState } from "react";
import { useAppContext } from "../context/AppCtx";
import Carrousel from '../components/Carousel';
import CarouselRb from '../components/CarouselRb'
import {Stack, Container} from 'react-bootstrap'
import cmpCliente from '../assets/png/clientes/cmp.png';
import enaexCliente from '../assets/png/clientes/enaex.png';
import tcpCliente from '../assets/png/clientes/tcp_cliente.png';
import ulogCliente from '../assets/png/clientes/ulog_cliente.png';

const Home: React.FC = () => {
  const { pizzas } = useAppContext();

  const images = ['01.jpg', '02.jpeg', '03.jpeg', '04.jpeg']

  return (
    <div className="bg-light">
      <CarouselRb />
      {/* <section className="hero__container">
        <div className="hero__texts">
          <h2 className="hero__title"></h2>
          <h4 className="hero__subtitle">
          </h4>
          <hr />
        </div>
      </section>*/}
    <Container>
      <h3 className="text-center my-5">QUIENES CONFÍAN EN NOSOTROS</h3>
    <Stack direction="horizontal" gap={3} className="my-3">
      <div>
        <img src={cmpCliente} alt="cliente png" className="rounded-circle shadow"/>
      </div>
        <div>
        <img src={enaexCliente} alt="cliente png" className="rounded-circle shadow"/>
      </div>
        <div>
        <img src={tcpCliente} alt="cliente png" className="rounded shadow"/>
      </div>
        <div>
        <img src={ulogCliente} alt="cliente png" className="rounded shadow"/>
      </div>
    </Stack>
</Container>
    </div>
  );
};

export default Home;
