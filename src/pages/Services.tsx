import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardRb from "../components/CardRb";
import { useAppContext } from '../context/AppCtx';

const Services = () => {
  const images = ["01.jpg", "02.jpeg", "03.jpeg", "04.jpeg"];

  const { services } = useAppContext();

  return (
    <div className="bg-gray bg-gradient">
      <Container className="py-5">
        <Row>
          {
            services?.map(service => {
              return (
                <Col xs={10} md={6} lg={3} key={service.id} className="mb-3 mx-auto">
                  <CardRb
                    image={service.img}
                    image2={service.img2}
                    title={service.title}
                    description={service.desc}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Services;
