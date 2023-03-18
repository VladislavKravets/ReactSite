import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    "https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g",
    "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU"
];

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
