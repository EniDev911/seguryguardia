import React from 'react'
import bgImg from '../assets/slider/03.jpeg'
import { Container } from 'react-bootstrap'
import ReviewCliente from '../components/review/Clientes'
import Valores from '../components/review/Valores';


const About = () => {
  return (
    <div className="bg-body">
      <Container className="my-5">
        <div className="bg-body">
          <h3 className="fs-1 text-center text-dark fw-bold">ASIDUCAM</h3>
          <h4 className="px-3 text-center mt-4" style={{ color: "#777" }}>Asociación Gremial de Dueños de Camiones de Coquimbo</h4>
          <hr className="w-25 mx-auto border border-2 border-warning opacity-75" />
          <h4 className="mt-5 fw-bold mb-4" style={{
            color: "#00000070",
            textDecoration: "3px underline #ffc107",
            textUnderlineOffset: "10px"
          }}>ASIDUCAM</h4>
          <p style={{ color: "#33333390" }}>Está compuesta por 78 socios, que mantienen residencia en la región de Coquimbo.</p>
          <h4 className="mt-5 fw-bold mb-4" style={{
            color: "#00000070",
            textDecoration: "3px underline #ffc107",
            textUnderlineOffset: "10px"
          }}>VISIÓN</h4>
          <p style={{ color: "#33333390" }}>Lograr afianzar a ASIDUCAM como una organización consolidada en logística, transferencia y almacenamiento de carga.</p>
          <h4 className="mt-5 fw-bold mb-4" style={{
            color: "#00000070",
            textDecoration: "3px underline #ffc107",
            textUnderlineOffset: "10px"
          }}>MISIÓN</h4>
          <p style={{ color: "#33333390" }}>Reunir a los pequeños empresarios dueños de camiones de la Región de Coquimbo para acceder en conjunto a mejores oportunidades del mercado y lograr eficiencia en la operación. Ofreciendo un servicio a los clientes que destaque por la seguridad, puntualidad y calidad, con personal calificado y competitivo, siendo respetuosos con la ciudadanía y cuidando el medio ambiente.</p>
          <h3 className="mt-5 fw-bold mb-4" style={{
            color: "#00000070",
            textDecoration: "3px underline #ffc107",
            textUnderlineOffset: "10px"
          }}>¿Quiénes Somos?</h3>
          <p style={{ color: "#33333390" }}>
            Somos la asociación Gremial de Dueños de Camiones de Coquimbo y nuestra misión es unificar a los pequeños y medianos transportistas de la región de Coquimbo para poder ser más competitivos en el mercado del transporte de carga, concretando trabajos seguros y pagos de sus facturas a tiempo, proporcionando una red de apoyo logístico para los transportistas y asesorarlos en su gestión. De esa manera se benificia más de 150 familias de la región, esto incluye a los dueños de camiones y sus choferes, lo que permite que la economía de la región avance. Además, Asiducam ayuda a que sus socios puedan renovar sus equipos y de esa manera ir a la vanguardia del transporte, algo que si no fuera por la unión que logra la Asociación Gremial sería casi imposible.<br />Actualmente Asiducam está compueta por 78 socios, de los cuales 65 están activos. <br />Desde el año 2018 Asiducam es miembro activo de la Comunidad Logística Portuaría Coquimbo (<b>CLPC</b>)</p>
          <Valores />
          {/* <h3>VALORES</h3>
      <ul>
        <li>Confianza</li>
        <li>Seguridad</li>
        <li>Trabajo en equipo</li>
        <li>Eficiencia</li>
        <li>Responsabilidad</li>
        <li>Respeto</li>
      </ul> */}
          <h3 className="text-uppercase">Servicios</h3>
          <ul>
            <li>Re pesaje en Batea</li>
            <li>Embarque concentrado en rampla plana</li>
            <li>Desembarque Trigo en Batea</li>
            <li>Movimientos internos en rampla plana</li>
            <li>Algunos servicios especiales de movimiento de maquinarias</li>
          </ul>
        </div>
      </Container >
      <ReviewCliente />
    </div >
  )
}

export default About



  //  Hero
  //     <section
  //       className="hero"
  //       style={{
  //         background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //         height: "100vh",
  //       }}
  //     >
  //       <div className="hero__text" style={{ padding: "50px" }}>
  //         <h2
  //           className="text-light display-1 fw-bold text-uppercase"
  //         >
  //           Misión
  //         </h2>
  //         <h4
  //           className="text-secondary text-uppercase"
  //         >
  //           Nuestros principios
  //         </h4>
  //       </div>
  //     </section>