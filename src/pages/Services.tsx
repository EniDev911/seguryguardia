import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardRb from "../components/CardRb";
import s1 from "../assets/png/services/01b.png";
import s2 from "../assets/png/services/02b.png";
import s3 from "../assets/png/services/03b.png";
import s4 from "../assets/png/services/04b.png";
import s5 from "../assets/png/services/05b.png";
import s6 from "../assets/png/services/06b.png";
import s7 from "../assets/png/services/07b.png";
import s8 from "../assets/png/services/08b.png";
import s9 from "../assets/png/services/09b.png";
import s10 from "../assets/png/services/10b.png";
import s11 from "../assets/png/services/11b.png";
import sm1 from "../assets/png/services/01.png";
import sm2 from "../assets/png/services/02.png";
import sm3 from "../assets/png/services/03.png";
import sm4 from "../assets/png/services/04.png";
import sm5 from "../assets/png/services/05.png";
import sm6 from "../assets/png/services/06.png";
import sm7 from "../assets/png/services/07.png";
import sm8 from "../assets/png/services/08.png";
import sm9 from "../assets/png/services/09.png";
import sm10 from "../assets/png/services/10.png";

const Services = () => {
  const images = ["01.jpg", "02.jpeg", "03.jpeg", "04.jpeg"];

  return (
    <div className="bg-gray bg-gradient">
      <Container className="py-5">
        <Row>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s1}
              image2={sm1}
              title="Camión plataforma"
              description="Transporte de carga general de todo tipo, sin protección o con carpas."
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s2}
              title="Camión Tolva"
              description="Transporte de materiales a granel, incluyendo movimiento de tierra."
              image2={sm2}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s3}
              title="Tractor convencional liviano, 4x2"
              description="Transporte de todo tipo de cargas sobre carreteras"
              image2={sm3}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s4}
              title="Tractor convencional cabina extendida, 4x2"
              description="Transporte de todo tipo de cargas sobre carreteras, con capacidad de instalar litera para conducir."
              image2={sm4}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s5}
              title="Tractor frontal 6x2"
              description="Transporte de todo tipo de carga, mayor capacidad de carga debido a los tres ejes."
              image2={sm5}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s6}
              title="Tractor frontal cabina extendida alta, 6x4"
              description="Transporte de todo tipo de cargas sobre carreteras a larga distancias, con capacidad de instalar litera para conductor y altura suficiente para permanecer de pie."
              image2={sm6}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s7}
              title="Tractor frontal 6x6"
              description="Aplicaciones de todo terreno, minería, operaciones forestales"
              image2={sm7}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s8}
              title="Semirremolque plataforma plana"
              description="Carga general sin protección al clima. Ampliamente usado en muchas aplicaciones."
              image2={sm8}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb
              image={s9}
              title="Semirremolque plataforma extensible"
              description="Transporte de cargas especialmente largas, La longitud del semirremolque se adapta a la carga."
              image2={sm9}
            />
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb image={s10} 
            title="Semirremolque plataforma baja"
            description="Transporte de equipamiento de construcción y soporte industrial, tales como dozers, grúa, etc."
            image2={sm10}/>
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb image={s11} title="Semirremolque portacontenedores"
            description="Transporte de contenedores sin exceso de peso debido a la plataforma, que no es necesario en esta operación"/>
          </Col>
          <Col xs={10} md={6} lg={3} className="mb-3 mx-auto">
            <CardRb image={s1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
