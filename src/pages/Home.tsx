import React, { lazy } from "react";
import { useNavigate } from 'react-router-dom'
const CarouselRb = lazy(() => import('../components/CarouselRb'))
import { Stack, Row } from 'react-bootstrap'
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import Valores from "../components/review/Valores";

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <section  className="bg-light w-100">
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
      <Valores />
      <ReviewService />
      <ReviewClientes />
    </section>
  );
};

export default Home;
