import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Logo from '../assets/png/logo.png'
import LogoWhatsApp from '../assets/png/whatsapp.png'

function NavigationRb() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="40"
            className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://api.whatsapp.com/send/?phone=56974455373&text=Hola+Asiducam%3A&app_absent=0" target="_blank">
              <img src={LogoWhatsApp} alt="logo whatsapp" height="30" />
            </Nav.Link>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/empresa">Empresa</Nav.Link>
            <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationRb

  ;