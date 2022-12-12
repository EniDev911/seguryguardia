import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/png/logo.png'

function NavigationRb() {
  const location = useLocation();
  
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="60"
            className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname==="/" ? "active":""}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios" className={location.pathname==="/servicios" ? "active":""}>Servicios</Nav.Link>
            <Nav.Link as={Link} to="/empresa" className={location.pathname==="/empresa" ? "active":""}>Empresa</Nav.Link>
            <Nav.Link as={Link} to="/clientes" className={location.pathname==="/clientes" ? "active":""}>Clientes</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className={location.pathname==="/contacto" ? "active":""}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationRb

  ;