import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeroNav() {
    return (
        <Navbar bg="dark" className="heroNav navFont p-0">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Text className="me-3 text-light">
                         <a href="https://api.whatsapp.com/send/?phone=56974455373&text=Consulta&app_absent=0" target="_blank"
                         className="text-decoration-none text-light"
                         >
                        <i className="fab fa-whatsapp text-primary"></i>&nbsp;&nbsp;
                        Teléfono +56 9 7445 5373
                         </a>
                    </Navbar.Text>
                    <Navbar.Text className="me-3 text-light">
                        <a href="mailto:cotizaciones@asiducam.cl?subject=Consulta" 
                        target="_blank" 
                        className="text-decoration-none text-light">
                        <i className="fa-solid fa-envelope text-primary"></i>&nbsp;&nbsp;
                        cotizaciones@asiducam.cl
                        </a>
                    </Navbar.Text>
                    <Navbar.Text className="me-2 text-light">
                        <i className="fa-solid fa-sheet-plastic text-primary"></i>&nbsp;&nbsp;
                        intranet
                    </Navbar.Text>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default HeroNav