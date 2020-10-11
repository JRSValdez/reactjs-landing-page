import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextButton } from "../buttons/LPButtons";
import MainText from "../texts/MainText";
import LightText from "../texts/LightText";

import hero_img from "../../assets/images/hero_hamburger.svg";

const Header = () => {
  return (
    <Container className="header-container">
      <Row xs="1" sm="2" md="2">
        <Col className="order-2 order-md-1 order-sm-1">
          <div className="">
            <MainText
              className="main-text"
              text={`Un nuevo 
                     sabor esta en`}
            />
            <MainText
              className="main-text"
              text={"la ciudad"}
              bg={true}
            />

            <LightText
              size={18}
              text={`Estamos a punto de descubrir un mundo lleno de sabores 
                      y de emociones inigualables.`}
            />

            <br></br>
            <TextButton text="Encuentranos" className="mt-3" />
          </div>
        </Col>
        <Col className="order-1 order-md-2 order-sm-2">
          <img className="img-fluid p-4" alt="hero" src={hero_img} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
