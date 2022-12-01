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
        <div className="d-flex border border-primary align-items-center p-2">
          <div className="bg-dark py-2 px-3 rounded-circle border border-warning d-flex h-100 my-auto me-3">
            <i className="fa-solid fa-location-dot fs-3 text-warning m-auto"></i>
          </div>
          <div>
            <p>Dirección: <br /><small>Baquedano 963, coquimbo</small></p>
          </div>
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
      </div>
      </div>
    </>
  );
};

export default Contacto;
