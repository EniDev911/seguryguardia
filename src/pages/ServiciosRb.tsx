import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import BgHeroRb from "../components/background/BgHeroRb";
import CardRb from "../components/CardRb";
import { useAppContext } from '../context/AppCtx';
import empresaData from '../assets/data/empresa.json'
import bgServicio from '../assets/items/servicios.jpg'

const Servicios = () => {

  const { services } = useAppContext();

  return (
    <section className="bg-gray bg-gradient animate__animated animate__fadeIn">
      <BgHeroRb title="servicios" subtitle="Soluciones logísticas integrales" image={bgServicio} />
       <ListGroup>
        {
          empresaData.servicios.map((servicio) =>{
            return (<ListGroup.Item key={servicio}>{servicio}</ListGroup.Item>)
          })
        }
       </ListGroup>
       <h3 className="text-uppercase text-center bg-dark text-gray py-2">Nuestros servicios disponen de la siguiente flota</h3>
      <Container fluid="md" className="py-5">
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
    </section>
  );
};

export default Servicios;
