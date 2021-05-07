import React,{useState} from 'react';
import {Container, Form , Button, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Search() {
 const [search, setSearch] = useState(null)
 console.log([search])

 const handleChange = (e) => {
     const inputValue = e.target.value.toUpperCase();
     console.log(inputValue);
     setSearch(inputValue)
 }

    return (
        <Container fluid className='search-container search-image'>
            <Form >
                <div className="form-container rounded foreground">
                <Form.Group controlId="formBasicSearch">
                    <h2 className="text-white">Search Public Company?</h2>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search by Ticker"
                            aria-label="Search by Ticker"
                            aria-describedby="basic-addon2"
                            value={search||''} 
                            onChange = {handleChange}
                            />
                        <Link to={`/results/${search}`}>
                            <InputGroup.Append>
                                <Button className='search-btn' variant="outline-primary">Search</Button>
                            </InputGroup.Append>
                        </Link>
                        
                     </InputGroup>
                </Form.Group>
                </div>
                
            </Form>
        </Container>
    )
}

export default Search
