import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';



function Header() {

    return (
        <Navbar expand="md" className="navbar-custombg">
            <Navbar.Brand href="#home">
                <img
                    src="/assets/images/mainlogo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="main logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="nav-link" href="#home" style={{ color: "#ff7e67" }}>Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#abouts" style={{ color: "#ff7e67" }}>About Us</Nav.Link>
                    <Nav.Link className="nav-link" href="#contact" style={{ color: "#ff7e67" }}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;