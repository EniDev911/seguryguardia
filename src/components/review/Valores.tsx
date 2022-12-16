import React from 'react'
import { Container, Col, Row, Card, Stack } from 'react-bootstrap'
import data from '../../assets/data/valores.json'

const Valores = () => {
  return (
    <Container fluid className="p-5 my-4 bg-body">
      <h4 className="fw-bold text-center fs-2" style={{ color: "#777" }}>NUESTROS VALORES</h4>
      <Row>
        {
          data.map(val => {
            return (
              <Col key={val.id} xs={10} md={6} lg={4} className="mx-auto">
                <Card className="my-2 border-0">
                  <Card.Header className="mx-auto bg-body">
                    <i className={val.icon} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="my-3 fw-bold text-center text-uppercase">
                      {val.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Valores;