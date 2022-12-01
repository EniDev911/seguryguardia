import React from 'react'
import Carrousel from '../components/Carousel'

const Services = () => {
  const images = ['01.jpg', '02.jpeg', '03.jpeg', '04.jpeg']

  return (
    <div className="page">

      <h2 className="page__title cr-primary">¿Quiénes Somos?</h2>
      <p>
        Somos la asociación Gremial de Dueños de Camiones de Coquimbo y nuestra misión es unificar a los pequeños y medianos transportistas de la región de Coquimbo para poder ser más competitivos en el mercado del transporte de carga, concretando trabajos seguros y pagos de sus facturas a tiempo, proporcionando una red de apoyo logístico para los transportistas y asesorarlos en su gestión. De esa manera se benificia más de 150 familias de la región, esto incluye a los dueños de camiones y sus choferes, lo que permite que la economía de la región avance. Además, Asiducam ayuda a que sus socios puedan renovar sus equipos y de esa manera ir a la vanguardia del transporte, algo que si no fuera por la unión que logra la Asociación Gremial sería casi imposible.<br />Actualmente Asiducam está compueta por 78 socios, de los cuales 65 están activos. <br />Desde el año 2018 Asiducam es miembro activo de la Comunidad Logística Portuaría Coquimbo (<b>CLPC</b>)</p>
    </div>
  )
}

export default Services