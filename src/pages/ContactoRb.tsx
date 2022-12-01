import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Contacto = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/02.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="hero__text" style={{ padding: "50px"}}>
          <h2
            className="hero__title"
            style={{
              color: "#fff",
              fontSize: "6em",
              textTransform: "uppercase"
            }}
          >
            Contactenos
          </h2>
          <h4
            className="hero__subtitle"
            style={{
              color: "#fff",
              textTransform: "uppercase"

            }}
          >
            Hablemos sobre sus requerimientos
          </h4>
        </div>
      </section>
      {/* Contact Section */}
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6}>
         <h3>Datos de Contacto</h3>
        <p>Realice todas sus consultas a través de nuestro formulario, o contactenos por medio de los siguientes datos:</p>
        <br />
        <div className="d-flex align-items-center p-1 m-0">
          <div className="py-2 px-3 rounded d-flex me-3">
            <i className="fa-solid fa-location-dot fs-3 text-warning"></i>
          </div>
          <div>
            <p>Dirección: <br /><small>Baquedano 963, coquimbo</small></p>
          </div>
          </div>
          <div className="d-flex align-items-center p-1 m-0">
          <div className="py-2 px-3 rounded d-flex me-3">
            <i className="fa-solid fa-phone fs-4 text-warning"></i>
          </div>
          <div>
            <p>Fono: <br /><small>+56 51 232 2643</small></p>
          </div>
          </div>
          <div className="d-flex align-items-center p-1 m-0">
          <div className="py-2 px-3 rounded d-flex me-3">
            <i className="fa-solid fa-square-phone fs-4 text-warning"></i>
          </div>
          <div>
            <p>Celular: <br /><small>+56 9 7445 5373</small></p>
          </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
      <FloatingLabel
          controlId="floatingInput"
          label="email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="su email" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="su mensaje">
          <Form.Control
            as="textarea"
            placeholder="su mensaje"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Contacto;
