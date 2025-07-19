'use client'
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
     <>
      <Navbar className="bg-success" >
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">Socios</Nav.Link>
            <Nav.Link className="text-light" href="#features">Cuotas</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Credenciales</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">
            Logueado como: <span className="text-light">userName</span>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar