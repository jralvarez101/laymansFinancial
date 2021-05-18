import React, { useState } from 'react';
import { Carousel, } from 'react-bootstrap';


function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const testimonials = [
        {
            content: "This is a simple tool that allows me to take my own initiative on making investments. Reading financial statemetns has always been an intimidating task but this made it so easy. They really do put it Layman's terms.",
            name: "Lisa Reynolds",
            profile: '/assets/images/testimonial1.jpeg'
        },
        {
            content: "This is a simple tool that allows me to take my own initiative on making investments. Reading financial statemetns has always been an intimidating task but this made it so easy. They really do put it Layman's terms.",
            name: "Ross Jacobs",
            profile: '/assets/images/testimonial2.jpeg'
        },
        {
            content: "This is a simple tool that allows me to take my own initiative on making investments. Reading financial statemetns has always been an intimidating task but this made it so easy. They really do put it Layman's terms.",
            name: "Nick Acosta",
            profile: '/assets/images/testimonial3.jpeg'
        }
    ]

    return (
        <div className="container-fluid text-center carousel-div">
            <p className="testimonials-heading font-weight-bold">WHAT OUR CUSTOMERS HAVE TO SAY</p>
            <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {testimonials.map(({ content, name, profile },index) => (
                    <Carousel.Item key={index}>
                        <h3>{content}</h3>
                        <img className="testimonial-image" src={profile} alt="testimonial 1" />
                        <em>{name} </em>
                    </Carousel.Item> 
                ))
                }
            </Carousel>
            </div>
        </div>
    );
}



export default Testimonials;

