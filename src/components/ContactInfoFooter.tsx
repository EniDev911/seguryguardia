import React from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'

const ContactInfoFooter = () => {
    return (
        <Container fluid>
            <Row className="info-footer">
                <Col xs={12} md={5} lg={4} className="text-light">
                    <Stack>
                        <h3 style={{ borderLeft: "3px solid #fff", paddingLeft: "14px", color: "#fff"}} className="">Asiducam</h3>
                    </Stack>
                </Col>
                <Col xs={12} md={7} lg={8} className="text-light">
                    <Stack gap={2} className="text-gray">
                        <h3 style={{ borderLeft: "3px solid #fff", paddingLeft: "14px", color: "#fff"}} className="">Contacto</h3>
                        <div>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <small>Baquedano 963, coquimbo</small>
                        </div>
                            <small>Región de Coquimbo - Chile.</small>
                        <div>
                            <i className="fa-regular fa-envelope me-2"></i>
                            <small>cotizaciones@asiducam.cl</small>
                        </div>
                        <div>
                            <i className="fa-solid fa-phone me-2"></i>
                            <small>+56 51 232 2643</small>
                        </div>
                    </Stack>
                </Col>
                        {/* <div className="d-flex flex-column">
                            <h3 style={{ borderLeft: "3px solid #fff" }} className="">Contacto</h3>
                            <div className="">
                                
                                <small>Región de Coquimbo - Chile.</small>
                            </div>
                            <div className="">
                                <div>
                                    <i className="fa-regular fa-envelope text-light me-2"></i>
                                    <small>info@asiducam.com</small>
                                </div>
                                <small>Región de Coquimbo - Chile.</small>
                            </div>
                            <div className="">
                                <div>
                                    <i className="fa-solid fa-phone text-light me-2"></i>
                                    <small>+56 51 232 2643</small>
                                </div>
                            </div>
                        </div>
                    </Stack> */}
            </Row>
        </Container >
    )
}

export default ContactInfoFooter