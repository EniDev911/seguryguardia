import React from 'react'
import bgImg from '../assets/slider/03.jpeg'
import {Container} from 'react-bootstrap'
import ReviewCliente from '../components/review/Clientes'

const About = () => {
  return (
    <div className="bg-body">
    <Container className="my-5">
    <div className="page bg-body">
      <h3>VISIÓN</h3>
      <p>Lograr afianzar a ASIDUCAM como una organización consolidada en logística, transferencia y almacenamiento de carga.</p>
      <h3>MISIÓN</h3>
    <p>Reunir a los pequeños empresarios dueños de camiones de la Región de Coquimbo para acceder en conjunto a mejores oportunidades del mercado y lograr eficiencia en la operación. Ofreciendo un servicio a los clientes que destaque por la seguridad, puntualidad y calidad, con personal calificado y competitivo, siendo respetuosos con la ciudadanía y cuidando el medio ambiente.</p>
      <h3 className="text-uppercase">¿Quiénes Somos?</h3>
      <p>
        Somos la asociación Gremial de Dueños de Camiones de Coquimbo y nuestra misión es unificar a los pequeños y medianos transportistas de la región de Coquimbo para poder ser más competitivos en el mercado del transporte de carga, concretando trabajos seguros y pagos de sus facturas a tiempo, proporcionando una red de apoyo logístico para los transportistas y asesorarlos en su gestión. De esa manera se benificia más de 150 familias de la región, esto incluye a los dueños de camiones y sus choferes, lo que permite que la economía de la región avance. Además, Asiducam ayuda a que sus socios puedan renovar sus equipos y de esa manera ir a la vanguardia del transporte, algo que si no fuera por la unión que logra la Asociación Gremial sería casi imposible.<br />Actualmente Asiducam está compueta por 78 socios, de los cuales 65 están activos. <br />Desde el año 2018 Asiducam es miembro activo de la Comunidad Logística Portuaría Coquimbo (<b>CLPC</b>)</p>
      <h3>VALORES</h3>
      <ul>
        <li>Confianza</li>
        <li>Seguridad</li>
        <li>Trabajo en equipo</li>
        <li>Eficiencia</li>
        <li>Responsabilidad</li>
        <li>Respeto</li>
      </ul>
      <h3 className="text-uppercase">Servicios</h3>
      <ul>
        <li>Re pesaje en Batea</li>
        <li>Embarque concentrado en rampla plana</li>
        <li>Desembarque Trigo en Batea</li>
        <li>Movimientos internos en rampla plana</li>
        <li>Algunos servicios especiales de movimiento de maquinarias</li>
      </ul>
      <ReviewCliente/>
    </div>

    </Container>
    </div>
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