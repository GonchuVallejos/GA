import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import './Navigation.css'

function Navegacion(){
    return(
        <Navbar className="navbar" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand className="imagen-logo" href="/">
            <img src="http://jujuy.gob.ar/home/img/logo-footer.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/Solicitud_Informacion">Solicitud de Información</Nav.Link>
                <NavDropdown title="Presupuesto" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Información">Información</NavDropdown.Item>
                    <NavDropdown.Item href="/Presupuesto">Presupuesto Anuales</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Hole/">Home</Nav.Link>
                <Nav.Link href="#Link/">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navegacion;