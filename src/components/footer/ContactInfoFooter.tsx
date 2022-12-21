import React from 'react'
import { Row, Col, Stack } from 'react-bootstrap'

const ContactInfoFooter = () => {
    return (
        <Row className="info-footer">
            <Col xs={12} md={5} lg={4} className="text-light">
                <Stack>
                    <h3 style={{ borderLeft: "3px solid #fff", paddingLeft: "14px", color: "#fff" }} className="">Asiducam</h3>
                </Stack>
            </Col>
            <Col xs={12} md={7} lg={8} className="text-light">
                <Stack gap={2} className="text-gray">
                    <h3 style={{ borderLeft: "3px solid #fff", paddingLeft: "14px", color: "#fff" }} className="">Contacto</h3>
                    <div>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <small>Baquedano 963, Coquimbo</small>
                    </div>
                    <small>Región de Coquimbo - Chile.</small>
                    <div>
                        <i className="fa-regular fa-envelope me-2"></i>
                        <small>cotizaciones@asiducam.cl</small>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone me-2"></i>
                        <small>+56 9 7445 5373</small>
                    </div>
                </Stack>
            </Col>
        </Row>
    )
}

export default ContactInfoFooter