import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

/* Props in this component 
- pic1
- pic1header
- pic1paragraph
- pic2
- pic2header
- pic2paragraph
- pic3
- pic3header
- pic3paragraph
*/

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-controlled"
    >
      <Carousel.Item>
        <img className="d-block w-100" src={props.pic1} alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>{props.pic1header}</h3>
          <p>{props.pic1paragraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.pic2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>{props.pic2header}</h3>
          <p>{props.pic2paragraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.pic3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>{props.pic3header}</h3>
          <p>{props.pic3paragraph}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
