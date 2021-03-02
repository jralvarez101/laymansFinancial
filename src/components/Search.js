import React from 'react';
import {Container, Form , Button, InputGroup} from 'react-bootstrap';

function Search() {
    return (
        <Container fluid className='search-container search-image'>
            <Form >
                <div className="form-container rounded foreground">
                <Form.Group controlId="formBasicSearch">
                    <h2 class="text-white">Search Public Company?</h2>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                        <InputGroup.Append>
                            <Button className='search-btn' variant="outline-primary">Search</Button>
                        </InputGroup.Append>
                     </InputGroup>
                </Form.Group>
                </div>
                
            </Form>
        </Container>
    )
}

export default Search
