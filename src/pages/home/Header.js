import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextButton } from "../../components/common/buttons/LPButtons";
import MainText from "../../components/common/texts/MainText";
import LightText from "../../components/common/texts/LightText";
import LPNavbar from "../../components/common/navbar";

import styled from "styled-components";
import hero_img from "../../assets/images/hero_hamburger.svg";
import hero_background from "../../assets/images/hero_yellow_img.svg";

const HeaderStyle = styled.header`
  background: url(${hero_background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right -10px top 0;
  padding-bottom: 120px;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px) {
    header {
      background-size: contain;
      padding-bottom: 10px;
      margin-bottom: 0;
    }
  }
`;

const MainTextHero = styled(MainText)`
  font-size: 60px;
  font-weight: bold;
  line-height: 50px;
`;

const HeaderContainer = styled(Container)`
  margin-top: 100px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <LPNavbar />
      <HeaderContainer>
        <Row xs="1" sm="2" md="2">
          <Col className="order-2 order-md-1 order-sm-1">
            <div className="">
              <MainTextHero
                size="40"
                text={`Un nuevo 
                     sabor esta en`}
              />
              <MainTextHero size="40" text={"la ciudad"} bg={true} />

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
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
