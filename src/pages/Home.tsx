import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../context/AppCtx";
import Carrousel from '../components/Carousel';
import CarouselRb from '../components/CarouselRb'
import { Stack, Container, Row, Col, Button } from 'react-bootstrap'
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";

const Home: React.FC = () => {

  const navigate = useNavigate();
  const {services} = useAppContext();

  return (
    <div className="bg-light">
      <CarouselRb />
      <ReviewClientes />
      <Container fluid style={{margin: "70px 0"}}>
      <ReviewService />
      {/* <Row>
      {
        services?.filter((service, index) => index < 4)
        .map(service => {
          return (
          <Col key={service.id} xs={6} md={6} lg={3} className="mx-auto">
              <div>
              <img src={service.img} className="img-fluid"/>
              </div>
          </Col>) 
        })
      }

        <Button variant="dark" className="w-50 mx-auto mt-5" onClick={() => navigate("servicios")}>Ver Más</Button>
      </Row> */}
      </Container>
    </div >
  );
};

export default Home;
