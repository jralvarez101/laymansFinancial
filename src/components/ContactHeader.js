import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

const ContactHeader = () => {
    return (
        <div className="contact-section">
            <Container>
                <Row className='text-center'>
                    <Col>
                        <p>NEXT STEPS</p>
                        <h1>Let's Talk</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ContactContent/>
                    </Col>
                    <Col md={6} >
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactHeader;
