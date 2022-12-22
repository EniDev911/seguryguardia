import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import FormEmailjs from '../components/body/FormEmailjs'

export default () => {

  return (
    <React.Fragment>
      {/* Contact Section */}
      <Container className="my-5 animate__animated animate__fadeIn" as="section">
        <Row>
          <Col xs={12} md={6}>
            <p>
              Realice todas sus consultas a través de nuestro formulario, o
              contactenos por medio de los siguientes medios:
            </p>
            <br />
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 d-flex me-3 h-100">
                <i className="fa-solid fa-location-dot fs-3 text-warning"></i>
              </div>
              <div className="d-flex flex-column">
                  Dirección: 
                  <small>Baquedano 963, Coquimbo</small>
              </div>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 rounded d-flex me-3">
                <i className="fa-solid fa-phone fs-4 text-warning"></i>
              </div>
              <div className="d-flex flex-column">
                  Fono: 
                  <small>+56 51 232 2643</small>
              </div>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 rounded d-flex me-3">
                <i className="fa-brands fa-whatsapp fs-3 text-warning"></i>
              </div>
              <div className="d-flex flex-column">
                  Celular: 
                  <small>+56 9 7445 5373</small>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <FormEmailjs/>
          </Col>
        </Row>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.513058705983!2d-71.33037575012762!3d-29.964681981822633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c91b9cc384bd%3A0xa224319407e8a56d!2sBaquedano%20963%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1669908012703!5m2!1ses!2scl"
        loading="lazy"
        className="w-100 mt-3"
        height="450"
      ></iframe>
    </React.Fragment>
  );
};