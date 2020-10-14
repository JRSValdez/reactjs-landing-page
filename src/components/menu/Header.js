import React from "react";
import { Container, Row, Col } from "reactstrap";
import MainText from "../texts/MainText";

import hero_img from "../../assets/images/hero_hamburger_menu.png";

const Header = () => {
  return (
    <Container className="header-container">
      <Row xs="1" sm="2" md="2">
        <Col className="order-2 order-md-1 order-sm-1">
          <div >
            <MainText
              color="#FFF"
              className="main-text"
              text={`Cada sabor 
                     es una nueva`}
            />
            <MainText
              className="main-text"
              text={"experiencia"}
              bg={true}
            />
          </div>
        </Col>
        <Col className="order-1 order-md-2 order-sm-2">
          <img className="img-fluid" alt="hero" src={hero_img} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
