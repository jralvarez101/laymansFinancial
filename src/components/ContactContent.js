import React from 'react'
import {Col, Container} from 'react-bootstrap'

function contactContent() {
    return (
        <div>
            <Container className='container-contact'>
                <h2>Have any questions or concerns? Our friendly support team is here to help.</h2>
                <hr className="hr-line-contact"/>
                <h5 className="mt-5"> Office </h5>
                <p>
                11348 37th Ave Sw <br/>
                Seattle, WA 98125
                </p>
            </Container>
        </div>
        
    )
}

export default contactContent
