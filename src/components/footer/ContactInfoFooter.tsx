import React from 'react'
import { Row, Col, Stack } from 'react-bootstrap'
import { Link } from "react-router-dom";

const ContactInfoFooter = () => {
    return (
        <Row className="info-footer">
            <Col xs={12} md={5} lg={4} className="text-light">
                <Stack>
                    <h3 style={{ borderLeft: "3px solid #49f", paddingLeft: "14px", color: "#fff" }} className="">SeguryGuardia</h3>
                    <div>
                       <Link to="/servicios" className='link'> 
                        <i className="fa-solid fa-link me-2"></i>
                        <small>Soluciones de Seguridad</small>
                       </Link>
                    </div>
                    <div>
                       <Link to="/empresa" className='link'> 
                        <i className="fa-solid fa-link me-2"></i>
                        <small>Objetivo y Valores</small>
                       </Link>
                    </div>
                </Stack>
            </Col>
            <Col xs={12} md={7} lg={8} className="text-light">
                <Stack gap={2} className="text-gray">
                    <h3 style={{ borderLeft: "3px solid #49f", paddingLeft: "14px", color: "#fff" }} className="">Contacto</h3>
                    <div>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        <small>Brasil N°310, La Serena - Chile</small>
                    </div>
                    <small>Región de Coquimbo - Chile.</small>
                    <div>
                        <i className="fa-regular fa-envelope me-2"></i>
                        <small>seguryguardia@hotmail.com</small>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone me-2"></i>
                        <small>+56 9 4129 0755</small>
                    </div>
                </Stack>
            </Col>
        </Row>
    )
}

export default ContactInfoFooter