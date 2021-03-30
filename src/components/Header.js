import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';




function Header() {

    return (
        <Navbar expand="md" className="navbar-custombg">
            <Navbar.Brand href="/">
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
                    <Nav.Link className="nav-link" href="/" style={{ color: "#ff7e67" }}>Home</Nav.Link>
                    <Nav.Link className="nav-link" href="/about" style={{ color: "#ff7e67" }}>About Us</Nav.Link>
                    <Nav.Link className="nav-link" href="/contact" style={{ color: "#ff7e67" }}>Contact</Nav.Link>
                    <Nav.Link className="nav-link" href="/results" style={{ color: "#ff7e67" }}>Results</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;