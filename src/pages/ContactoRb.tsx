import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bgImg from "../assets/slider/03.jpeg";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Correo enviado")
    setName("");
    setEmail("");
    setComment("");
  };
  return (
    <section className="animate__animated animate__fadeIn">
      {/* Contact Section */}
      <Container className="my-5">
        <Row>
          <Col xs={12} md={6}>
            <p>
              Realice todas sus consultas a través de nuestro formulario, o
              contactenos por medio de los siguientes medios:
            </p>
            <br />
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 rounded d-flex me-3">
                <i className="fa-solid fa-location-dot fs-3 text-warning"></i>
              </div>
              <div>
                <p>
                  Dirección: <br />
                  <small>Baquedano 963, coquimbo</small>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 rounded d-flex me-3">
                <i className="fa-solid fa-phone fs-4 text-warning"></i>
              </div>
              <div>
                <p>
                  Fono: <br />
                  <small>+56 51 232 2643</small>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center p-1 m-0">
              <div className="py-2 px-3 rounded d-flex me-3">
                <i className="fa-brands fa-whatsapp fs-4 text-warning"></i>
              </div>
              <div>
                <p>
                  Celular: <br />
                  <small>+56 9 7445 5373</small>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form
              action="https://formsubmit.co/7f10ef421f649de5e7fe615b8ccea241"
              method="POST"
              onSubmit={handleSubmit}
            >
              <FloatingLabel
                controlId="floatingInput"
                label="Su nombre"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Su nombre"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Su email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Su email"
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="su mensaje">
                <Form.Control
                  as="textarea"
                  placeholder="su mensaje"
                  style={{ height: "100px" }}
                  name="comment"
                  onChange={(event) => setComment(event.target.value)}
                  value={comment}
                  required
                />
              </FloatingLabel>
              <Button variant="warning" type="submit" className="mt-3 w-100">
                Enviar
              </Button>
              <input
                type="hidden"
                name="_next"
                value="https://enidev911.github.io/asiducam"
              />
              <input
                type="hidden"
                name="_subject"
                value="Nuevo correo desde la Web"
              />
              <input type="hidden" name="_captcha" value="false" />
            </Form>
          </Col>
        </Row>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.513058705983!2d-71.33037575012762!3d-29.964681981822633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c91b9cc384bd%3A0xa224319407e8a56d!2sBaquedano%20963%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1669908012703!5m2!1ses!2scl"
        loading="lazy"
        className="w-100 mt-3"
        height="450"
      ></iframe>
    </section>
  );
};

export default Contacto;
