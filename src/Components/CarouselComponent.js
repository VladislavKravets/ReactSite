import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const images = [image1, image2, image3];

function CarouselComponent() {
    return (
        <Carousel className="mx-auto w-100" style={{ maxWidth: "800px" }}>
            {
                images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselComponent;
