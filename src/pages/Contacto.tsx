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
      <form>
        
        <div className="input__box">
          <label htmlFor="">Nombre</label><br />
          <input type="text"
            placeholder="Su Nombre"
            style={
              {
                border: "none",
                width: "100%",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
                color: "#444"
              }
            }/>
        </div>
        <div>
          <label htmlFor="">Email</label><br />
          <input type="email" 
            placeholder="email@gmail.com"
            style={
              {
                border: "none",
                width: "100%",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
                color: "#444"
              }} />
        </div>
        <div>
          <label htmlFor="">Mensaje</label><br />
          <textarea
            name="description"
            id=""
            placeholder="Dejanos un mensaje"
                     style={
              {
                border: "none",
                width: "100%",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
                color: "#444"
              }}
          ></textarea>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default Contacto;
