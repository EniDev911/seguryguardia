import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../context/AppCtx";
import Carrousel from '../components/Carousel';
import CarouselRb from '../components/CarouselRb'
import { Stack, Container, Row, Col, Button } from 'react-bootstrap'
import cmpCliente from '../assets/png/clientes/cmp.png';
import enaexCliente from '../assets/png/clientes/enaex.png';
import tcpCliente from '../assets/png/clientes/logos/TPC.png';
import ulogCliente from '../assets/png/clientes/logos/Ulog.jpeg';
import famesaCliente from '../assets/png/clientes/logos/Famesa.png';
import mtaCliente from '../assets/png/clientes/logos/MTA.png';
import s1 from "../assets/png/services/01b.png";
import CardRb from "../components/CardRb";
import ClientesCarousel from "../components/ClientesCarousel";
import ReviewClientes from "../components/review/Services";

const Home: React.FC = () => {

  const navigate = useNavigate();


  return (
    <div className="bg-light">
      <CarouselRb />
      <ReviewClientes />
      <Container>
        <h3 className="text-center my-5">QUIENES CONFÍAN EN NOSOTROS</h3>
        <Stack direction="horizontal" gap={3} className="my-3">
          <div style={{ height: "180px" }} className="w-100 rounded">
            <img src={cmpCliente} alt="cliente png" className="shadow w-100 h-100 hover" />
          </div>
          <div style={{ height: "180px" }} className="hover w-100 rounded">
            <img src={enaexCliente} alt="cliente png" className="shadow h-100" />
          </div>
          <div style={{ height: "180px" }} className="w-100 hover">
            <img src={tcpCliente} alt="cliente png" className="rounded shadow w-100 h-100" />
          </div>
          <div style={{ height: "180px" }} className="w-100 rounded hover">
            <img src={ulogCliente} alt="cliente png" className="shadow w-100 h-100" />
          </div>
          <div style={{ height: "180px" }} className="w-100 rounded hover">
            <img src={famesaCliente} alt="cliente png" className="shadow w-100 h-100" />
          </div>
          <div style={{ height: "180px" }} className="w-100 rounded hover">
            <img src={mtaCliente} alt="cliente png" className="shadow w-100 h-100" />
          </div>
        </Stack>
      </Container>
    </div >
  );
};

export default Home;
