import React from "react";
import { Carousel } from "react-bootstrap";
import SliderImg1 from "../images/SliderImg1.jpg";
import SliderImg2 from "../images/SliderImg2.jpg";
import SliderImg3 from "../images/SliderImg3.jpg";

const CarouselContainer = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={SliderImg1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={SliderImg2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={SliderImg3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
