import React from "react";
import { Container, Row, Col } from "reactstrap";
import LPNavbar from "../../components/common/navbar";
import MainText from "../../components/common/texts/MainText";
import styled from "styled-components";

import hero_img from "../../assets/images/hero_hamburger_menu.png";
import hero_bg from "../../assets/images/hero_yellow_img_menu.svg";
import hero_bg_sm from "../../assets/images/hero_yellow_img_menu_xs.svg";

const HeaderContainer = styled.section`
  background-color: black !important;
  background: url(${hero_bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right -50px top 0;
  padding-bottom: 0 !important;

  @media only screen and (max-width: 600px) {
    background: url(${hero_bg_sm});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right -40px top 0;
  }
`;

const TitleContainer = styled.div`
  padding-top: 50px;
  padding-bottom:20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LPNavbar darkMode={true} />
      <Row xs="1" sm="2" md="2">
        <Col className="order-2 order-md-1 order-sm-1">
          <TitleContainer>
            <MainText
              size="50"
              center={true}
              color="#FFF"
              className="main-text"
              text={`Cada sabor 
                     es una nueva`}
            />
            <MainText
              size="50"
              center={true}
              className="main-text"
              text={"experiencia"}
              bg={true}
            />
          </TitleContainer>
        </Col>
        <Col className="order-1 order-md-2 order-sm-2">
          <img className="img-fluid" alt="hero" src={hero_img} />
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
