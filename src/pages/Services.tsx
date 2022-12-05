import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardRb from "../components/CardRb";
import s1 from "../assets/png/services/01b.png";
import s2 from "../assets/png/services/02b.png";
import s3 from "../assets/png/services/03b.png";
import s4 from "../assets/png/services/04b.png";
import s5 from "../assets/png/services/05b.png";
import sm1 from "../assets/png/services/01.png";
import sm2 from "../assets/png/services/02.png";
import sm5 from "../assets/png/services/05.png";

const Services = () => {
  const images = ["01.jpg", "02.jpeg", "03.jpeg", "04.jpeg"];

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb
            image={s1}
            image2={sm1}
            title="Camión plataforma"
            description="Transporte de carga general de todo tipo, sin protección o con carpas."
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb
            image={s2}
            title="Camión Tolva"
            description="Transporte de materiales a granel, incluyendo movimiento de tierra."
            image2={sm2}
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s3} title="Tractor convencional liviano, 4x2" />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb
            image={s4}
            title="Tractor convencional cabina extendida, 4x2"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb
            image={s5}
            title="Tractor frontal 6x2"
            description="Transporte de todo tipo de carga, mayor capacidad de carga debido a los tres ejes."
            image2={sm5}
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <CardRb image={s1} />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
