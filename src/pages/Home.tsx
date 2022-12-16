import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import CarouselRb from '../components/CarouselRb'
import { Stack } from 'react-bootstrap'
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import Valores from "../components/review/Valores";

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-light">
      <CarouselRb />
      <h2 className="display-4 fw-bold my-5 text-center" style={{
        letterSpacing: "3px"
      }}>ASIDUCAM</h2>
      <Stack direction="horizontal" gap={3} className="mx-auto justify-content-center" style={{
        color: "#666",
        fontWeight: "500",
      }}>
        <div className="text-stack d-flex">
          <p className=""><small>DISTRIBUCIÓN</small></p>
          <div className="vr mx-2" />
          <p className=""><small>TRANSPORTE</small></p>
          <div className="vr mx-2" />
          <p className=""><small>LOGISTÍCA, DESDE 2009</small></p>
        </div>
      </Stack>
      <hr className="w-25 border border-3 border-warning mx-auto" style={{
        margin: '110px 0'
      }} />
      <Valores />
      <hr className="w-25 border border-3 border-warning mx-auto" style={{
        margin: '0 0 110px 0'
      }} />
      <ReviewService />
      <hr className="w-25 border border-3 border-warning mx-auto" style={{
        margin: '110px 0'
      }} />
      <ReviewClientes />
    </div >
  );
};

export default Home;
