import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { FaClock, FaFileAlt, FaGlasses } from "react-icons/fa";

function Features() {

    return (
        <Container fluid className='features-container'>
            <Row className= 'features-row'>
                <Col className= 'text-center mb-5' sm={4}  >
                    <FaClock size={70} className='feature-icon mt-5'/>
                    <p className=" features-text font-weight-bold mt-3 mx-5">
                    Save time by getting a quick financial summary
                    </p>
                </Col>
                <Col className= 'text-center mb-5' sm={4} >
                    <FaFileAlt size={70} className='feature-icon mt-5'/>
                    <p className=" features-text font-weight-bold mt-3 mx-5">
                    View all 3 public financial statements in layman's terms
                    </p>
                </Col>
                <Col className= 'text-center mb-5' sm={4} >
                    <FaGlasses size={70} className='feature-icon mt-5'/>
                    <p className=" features-text font-weight-bold mt-3 mx-5">
                    Our tools are here to help you be smarter about investing
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Features
