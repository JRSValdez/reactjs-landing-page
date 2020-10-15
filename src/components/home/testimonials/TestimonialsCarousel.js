import React from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col,
} from "reactstrap";

import styled from "styled-components";

import ketchup_img from "../../../assets/images/testimonials_bg_ketchup.png";
import splash_right from "../../../assets/images/red_splash_2.svg";
import splash_left from "../../../assets/images/red_splash_1.svg";

const SplashLeft = styled.img`
  position: absolute;
  top: -30px;
  transform: scale(0.9);
  left: -5px;

  @media only screen and (max-width: 600px) {
    display: none;

    & .d-md-block {
      display: block !important;
    }
  }
`;

const SplashRight = styled.img`
  position: absolute;
  top: 25px;
  transform: scale(0.9);
  right: -20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const KetchupImg = styled.img`
  position: absolute;
  transform: scale(0.9);
  right: -10px;
  bottom: -100px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const TestimonialsCarousel = ({
  slides,
  items,
  next,
  previous,
  goToIndex,
  activeIndex,
}) => {
  return (
    <Row>
      <Col xs={1} sm={2} md={2}>
        <SplashLeft className="img-fluid" alt="splash" src={splash_left} />
      </Col>
      <Col xs={12} sm={8} md={8}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Col>
      <Col xs={1} sm={2} md={2}>
        <SplashRight alt="splash" src={splash_right} />
        <KetchupImg alt="ketchup" src={ketchup_img} />
      </Col>
    </Row>
  );
};

export default TestimonialsCarousel;
