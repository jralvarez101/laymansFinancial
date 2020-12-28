import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {

    return (
        <div className="container-fluid footer-bg">
            <div className="container footer-bg">
                <div className="row pt-4">
                    <div className="col-sm">
                        <img
                            src="/assets/images/mainlogo.png"
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="main logo"
                        />
                    </div>
                    <div className="col-sm">
                        <h3 className="footer-p">Company</h3>
                        <Navbar expand="md">
                            <Nav className="mr-auto flex-column">
                                <Nav.Link className="nav-link" href="#home" style={{ color: "#ff7e67" }}>Home</Nav.Link>
                                <Nav.Link className="nav-link" href="#abouts" style={{ color: "#ff7e67" }}>About Us</Nav.Link>
                                <Nav.Link className="nav-link" href="#contact" style={{ color: "#ff7e67" }}>Contact</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                    <div className="col-sm">
                        <h3 className="footer-p">Contact</h3>
                        <p class="ml-3 nav-text">
                            11348 37th Ave Sw
                     <br />
                    Seattle, WA 98125
                    </p>
                        <div>
                            <a className="ml-3 footer-p" href="mailto: abc@example.com">abc@example.com</a>
                        </div>
                        <div>
                            <a className="ml-3 footer-p" href="tel:+15555551212">555-555-1212</a>
                        </div>
                    </div>
                </div>
                <div className="row footer-border  mt-4">
                    <div className="col-6">
                        <FaFacebookF className="ml-3" color="#ff7e67" />
                        <FaInstagram className="ml-3" color="#ff7e67" />
                        <FaTwitter className="ml-3 " color="#ff7e67" />
                    </div>
                    <div className="col-6">
                        <p className="text-right footer-p">&copy;2020 Layman's financial Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;