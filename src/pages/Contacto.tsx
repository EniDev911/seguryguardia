import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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
      <div className="d-flex justify-content-evenly">
      {/* Contact Info */}
       <div className="info__wrapper"
        style={{
          padding: '20px 30px',
        }}
       >
        <h3>Datos de Contacto</h3>
        <p>Realice todas sus consultas a través de nuestro formulario, o contactenos por medio de los siguientes datos:</p>
        <br />
        <div className="info__box">

        </div>
       </div>
      {/* Contact Form */}
      <div className="form__wrapper"
       style={{
        width: "100%",
        padding: "20px 30px",
        marginLeft: "auto",
        background: "#ccc" ,
       }}>
        <h3>Formulario de Contacto</h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </div>
      </div>
    </>
  );
};

export default Contacto;
