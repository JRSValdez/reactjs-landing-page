import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from "reactstrap";

import ketchup_img from "../../assets/images/testimonials_bg_ketchup.png";
import splash_right from "../../assets/images/red_splash_2.svg";
import splash_left from "../../assets/images/red_splash_1.svg";

const items = [
  {
    id: 1,
    altText:
      "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ",
    caption: "“El mejor lugar para degustar en familia y amigos!”",
  },
  {
    id: 2,
    altText:
      "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ",
    caption: "“El mejor lugar para degustar en familia y amigos!”",
  },
  {
    id: 3,
    altText:
      "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. ",
    caption: "“El mejor lugar para degustar en familia y amigos!”",
  },
];

const Testimonials = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="carousel-text"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section id="testimonials" className="testimonials">
      <Row>
        <Col xs={1} sm={2} md={2} className="splash-left">
          <img className="splash-left img-fluid" alt="splash" src={splash_left} />
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
        <Col xs={1} sm={2} md={2} className="">
          <img className="splash-right" alt="splash" src={splash_right} />
          <img className="ketchup" alt="ketchup" src={ketchup_img} />
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
