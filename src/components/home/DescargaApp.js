import React from "react";
import { Col, Container, Row } from "reactstrap";
import smarth_phone from "../../assets/images/smartphone.png";
import MainText from "../common/texts/MainText";
import AppCard from "../common/cards/AppCard";

import styled from "styled-components";

const AppContainer = styled.section`
  position: relative;
  top: -200px;
  padding-top: 200px;
  margin-bottom: -600px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    top: -300px;
  }

  @media only screen and (max-width: 600px) {
    top: -300px;
  }
`;

const AppImgContainer = styled(Col)`
  position: relative;
  top: -200px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: -300px;
  }
`;

const AppImg = styled.img`
  top: -70px;
  transform: scale(0.9);
  left: 10%;
  position: relative;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    top: -70px;
    left: -30px;
  }

  @media only screen and (max-width: 600px) {
    top: -220px;
    transform: scale(0.6);
    left: -200px;
  }
`;

const AppBenefitsContainer = styled(Col)`
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    position:relative;
    top:-100px;
    padding-bottom:200px;
  }

  @media only screen and (max-width: 600px) {
    position:relative;
    top:-700px;
    margin-bottom:-400px;
  }
`;

const DescargaApp = () => {
  return (
    <AppContainer id="app">
      <Row>
        <AppImgContainer xs={12} sm={12} md={12} lg={5}>
          <AppImg alt="smartphone" src={smarth_phone} />
        </AppImgContainer>
        <AppBenefitsContainer xs={12} sm={12} md={12} lg={7}>
          <Container>
            <Row>
              <Col>
                <MainText size="35" text="Obten mas beneficios" center={true} />
                <MainText
                  size="35"
                  text="Descarga nuestra app"
                  center={true}
                  bg={true}
                />
              </Col>
            </Row>
            <Row xs={1} sm={1} md={2} lg={2}>
              <Col>
                <AppCard
                  number="01"
                  title="Solicita rápido"
                  desc={`Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.`}
                />
              </Col>
              <Col>
                <AppCard
                  number="02"
                  title="Facil de usar"
                  desc={`Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <AppCard
                  number="03"
                  title="Promociones Especiales"
                  desc={`Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.`}
                />
              </Col>
            </Row>
          </Container>
        </AppBenefitsContainer>
      </Row>
    </AppContainer>
  );
};

export default DescargaApp;
