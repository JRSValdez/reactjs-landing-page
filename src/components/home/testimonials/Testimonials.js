import React, { useState } from "react";
import { CarouselItem, CarouselCaption } from "reactstrap";
import TestimonialsCarousel from "./TestimonialsCarousel";

import styled from "styled-components";

const TestimonialsContainer = styled.section`
  padding-bottom: 200px;
  padding-top: 120px;
  position: relative;
  z-index: 1;
`;

const CItem = styled(CarouselItem)`
  color: black;
  background: transparent;
  width: 100%;
  height: 400px;
  top: -30px;
  @media only screen and (max-width: 600px) {
    & .d-md-block {
      display: block !important;
    }
  }
`;

const CCaption = styled(CarouselCaption)`
  & h3 {
    color: black !important;
    font-size: 36px;
    font-weight: bold;
    line-height: 50px;
  }

  & p {
    color: rgba(0, 0, 0, 0.4) !important;
    font-size: large;
  }
  @media only screen and (max-width: 600px) {
    & h3 {
      font-size: 28px;
      line-height: 35px;
    }
  }
`;

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
      <CItem
        className="carousel"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CCaption
          className="carousel-text"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CItem>
    );
  });

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsCarousel
        {...{
          slides,
          items,
          next,
          previous,
          goToIndex,
          activeIndex,
          setAnimating,
        }}
      />
    </TestimonialsContainer>
  );
};

export default Testimonials;
