import React from "react";
import { Row, Col } from "reactstrap";
import StoreButtons from "../buttons/StoreButtons";
import BrandText from "../texts/BrandText";
import { TextButton } from "../buttons/LPButtons";

const Footer = () => {
  const options = [
    { text: "Conoce nuestras sucursales", href: "#sucursales" },
    { text: "Acerca de", href: "#quienesSomos" },
    { text: "Conoce nuestras sucursales", href: "#sucursales" },
    { text: "Que hablan de nosotros?", href: "#testimonials" },
    { text: "Contactanos", href: "#contact" },
  ];

  return (
    <div className="footer m-5">
      <Row xs={1} sm={2} md={2} lg={2}>
        <Col className="footer-brand-text">
          <BrandText className="brand-text" text="Foodies" href="/" />
        </Col>
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
        {options.map(({ text, href }) => (
          <Col>
            <TextButton className='text-muted' text={text} href={href} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;
