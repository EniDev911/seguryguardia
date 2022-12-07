import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'

const ContactInfoFooter = () => {
    return (
        <Container style={{ background: "#151449" }} fluid className="py-5">
            <Row>
                <Col xs={12} md={6} className="ps-5 text-light p-4">
                    <Stack direction="horizontal" className="align-items-start ps-5">
                        <div className="d-flex flex-column me-3">
                            <h3 style={{ borderLeft: "3px solid #fff" }} className="ps-3">Asiducam</h3>
                            <p>Distribución, Transporte y Logística</p>
                        </div>
                        <div className="d-flex flex-column">
                            <h3 style={{ borderLeft: "3px solid #fff" }} className="ps-3">Contacto</h3>
                            <div className="py-2 px-3 rounded d-flex flex-column me-3">
                                <div>
                                    <i className="fa-solid fa-location-dot text-light me-2"></i>
                                    <small>Baquedano 963, coquimbo</small>
                                </div>
                                <small>Región de Coquimbo - Chile.</small>
                            </div>
                            <div className="py-2 px-3 rounded d-flex flex-column me-3">
                                <div>
                                    <i className="fa-regular fa-envelope text-light me-2"></i>
                                    <small>info@asiducam.com</small>
                                </div>
                                <small>Región de Coquimbo - Chile.</small>
                            </div>
                            <div className="py-2 px-3 rounded d-flex flex-column me-3">
                                <div>
                                    <i className="fa-solid fa-phone text-light me-2"></i>
                                    <small>+56 51 232 2643</small>
                                </div>
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container >
    )
}

export default ContactInfoFooter