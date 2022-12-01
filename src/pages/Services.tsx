import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import CardRb from '../components/CardRb'
import s1 from '../assets/png/services/01.png'

const Services = () => {
  const images = ['01.jpg', '02.jpeg', '03.jpeg', '04.jpeg']

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
        <Col xs={12} md={6} lg={3}>
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
         <CardRb image={s1}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Services