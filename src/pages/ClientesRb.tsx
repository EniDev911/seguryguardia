import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewClientes from '../components/review/Clientes'
import sociosImg from '../assets/items/socios.jpg'

function ClientesRb() {
  return (
    <>
      <div className="bg-hero-clientes" style={{
        background: `linear-gradient(rgba(240, 250, 234, .5),rgba(250, 250, 254, .9)), url(${sociosImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h3 className="fs-2 fw-bold text-dark">SOMOS SOCIOS ESTRATÉGICOS</h3>
        <hr className="border border-3 border-danger w-50 opacity-1" />
        <div className="text">
          <h4 className="text-uppercase fw-bold fs-2 mb-4">ASIDUCAM</h4>
          <p className="mt-4" style={{ color: "#00000090" }}>Nuestro esfuerzo y objetivo están en función de la satisfacción de las necesidades de nuestros clientes, aportando soluciones de calidad para cada uno de sus requerimientos.</p>
        </div>
      </div>
      <ReviewClientes />
    </>
  )
}

export default ClientesRb