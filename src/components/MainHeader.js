
import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

function MainHeader() {

    const investor = '/assets/images/investor.jpg'
    return (
        <Container fluid>
            <Row>
                <Col md={6} className='left-section'>
                    <Container className='left-container'>
                        <p>WE DO THINGS DIFFERENTLY</p>
                        <h1>Simplify Your Investment Research</h1>
                        <p className="mt-4 ">We put financial statements in Layman's Terms. A simple solution
                            to make investing fun. A quick search will give the simple financial breakdown
                            with more information and less clutter, just the way we like it.
                        </p>
                    </Container>
                </Col>
                <Col md={6} className ='right-section'>
                    <img className='header-image' src={investor} alt='investor'/>
                </Col>
            </Row>
        </Container>
    )
}

export default MainHeader





