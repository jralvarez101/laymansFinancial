import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function MainAbout() {
    const investGirl = '/assets/images/about-us2.jpeg'

    return (
        <div className='main-aboutus'>
            <Container className='hr-line'>
                <Row className='row-about'>
                    <Col md={6} className='left-container'>
                        <p>OUR SIMPLE SOLUTION TO COMPLEX FINANCES</p>
                        <h1>Finances in Layman's Terms</h1>
                        <hr/>
                        <p mt={4}>
                        This project got started out of the need to simplify how we see finances.
                        Financial sheets are a must to gain insight on how a potential investment is 
                        performing, but with so much clutter you sometimes end up with more questions than answers.
                        We focus on eliminating distractions to provide with only the necessary financial data.
                        </p>

                    </Col>
                    <Col md={6} >
                        <img className="aboutus-img mt-5" src={investGirl} alt='investor girl'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainAbout;
