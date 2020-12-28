import React, { useState } from 'react';
import { Carousel, } from 'react-bootstrap';


function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const testimonials = [
        {
            title: "First slide label",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            url:"https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15063/REDESIGN-Speeding-up-Application-Development-with-Bootstrap-Luke_Social-3b49f4c2abf94e39b2f311ed9f0c3785.png",
        },
        {
            title: "Second Slide",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            url:"https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15063/REDESIGN-Speeding-up-Application-Development-with-Bootstrap-Luke_Social-3b49f4c2abf94e39b2f311ed9f0c3785.png",
        },
        {
            title: "Third slide",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            url:"https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15063/REDESIGN-Speeding-up-Application-Development-with-Bootstrap-Luke_Social-3b49f4c2abf94e39b2f311ed9f0c3785.png",
        },
        {
            title: "Fourth slide",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            url:"https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15063/REDESIGN-Speeding-up-Application-Development-with-Bootstrap-Luke_Social-3b49f4c2abf94e39b2f311ed9f0c3785.png",
        },
        {
            title: "Fifth slide",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            url:"https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15063/REDESIGN-Speeding-up-Application-Development-with-Bootstrap-Luke_Social-3b49f4c2abf94e39b2f311ed9f0c3785.png",
        },
    ]

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            { testimonials.map(({title,content,url}) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={url}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
            }
        </Carousel>
    );
}



export default Testimonials;

