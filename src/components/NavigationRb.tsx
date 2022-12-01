import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Logo from '../assets/png/logo.png'

function NavigationRb() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="40"
            className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="mailto:asocgremial.camionescoquimbo@gmail.com?subject=Cotizar">📧 asocgremial.camionescoquimbo@gmail.com</Nav.Link>
            <Nav.Link  as={Link} to="/servicios">🚀 Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contacto">🧑‍💻 Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationRb

;