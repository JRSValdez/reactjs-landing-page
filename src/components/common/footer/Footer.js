import React from "react";
import { Row, Col } from "reactstrap";
import StoreButtons from "../buttons/StoreButtons";
import BrandText from "../texts/BrandText";
import { TextButton } from "../buttons/LPButtons";

import styled from "styled-components";

const FooterContainer = styled.div`
  & hr {
    height: 1px;
    background-color: #ffc700;
    border: none;
  }
`;

const FooterBrandText = styled(Col)`
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Footer = () => {
  const options = [
    { text: "Conoce nuestras sucursales", href: "#sucursales" },
    { text: "Acerca de", href: "#quienesSomos" },
    { text: "Menú", href: "/menu" },
    { text: "Que hablan de nosotros?", href: "#testimonials" },
    { text: "Contactanos", href: "#contact" },
  ];

  return (
    <FooterContainer className="mx-5">
      <Row xs={1} sm={2} md={2} lg={2}>
        <FooterBrandText>
          <BrandText text="Foodies" href="/" color='#7B7B7B' size='25' />
        </FooterBrandText>
        <Col>
          <StoreButtons
            apple_url="https://www.apple.com/la/ios/app-store/"
            play_url="https://play.google.com/store"
            className="float-right"
          />
        </Col>
      </Row>
      <hr />
      <Row xs={1} md={options.length}>
        {options.map((item, i) => (
          <Col key={i}>
            <TextButton
              className="text-muted"
              text={item.text}
              href={item.href}
            />
          </Col>
        ))}
      </Row>
    </FooterContainer>
  );
};

export default Footer;
