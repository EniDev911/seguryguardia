import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewClientes from '../components/review/Clientes'
import sociosImg from '../assets/items/socios.jpg'

function ClientesRb() {
  return (
    <React.Fragment>
      <Row className="align-items-center text-center flex-column" style={{
        background: `linear-gradient(rgba(240, 250, 234, .6),rgba(250, 250, 254, .9)), url(${sociosImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: '110px 0'
      }}>
        <Col xs={11} sm={10} md={6} lg={4}>
          <h3 className="fs-2 fw-bold text-dark">SOMOS SOCIOS ESTRATÉGICOS</h3>
        </Col>
        <Col xs={3} sm={10} md={1} lg={1} style={{ height: '3px' }} className="bg-danger rounded my-2">
        </Col>
        <Col xs={11} sm={10} md={6} lg={4} className="mt-5">
          <h4 className="text-uppercase fw-bold fs-2 mb-4" style={{ color: "#666" }}>ASIDUCAM</h4>
        </Col>
        <Col xs={11} sm={10} md={6} lg={8}>
          <p className="mt-2 fs-4" style={{ color: "#555" }}>Nuestro esfuerzo y objetivo están en función de la satisfacción de las necesidades de nuestros clientes, aportando soluciones de calidad para cada uno de sus requerimientos.</p>
        </Col>
      </Row>
      <ReviewClientes />
    </React.Fragment>
  )
}

export default ClientesRb