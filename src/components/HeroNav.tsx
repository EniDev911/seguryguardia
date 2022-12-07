import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarhero.css'

function HeroNav() {
    return (
        <Navbar bg="dark" className="heroNav navFont p-0">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Text className="me-2 text-light">
                        <i className="fa-solid fa-phone text-primary"></i>&nbsp;&nbsp;
                        Teléfono +56 2 261 101 70
                    </Navbar.Text>
                    <Navbar.Text className="me-2 text-light">
                        <i className="fa-solid fa-envelope text-primary"></i>&nbsp;&nbsp;
                        info@asiducam.com
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