import React from "react";
import { Col, Container, Row } from "reactstrap";
import smarth_phone from "../../../assets/images/smartphone.png";
import MainText from "../../common/texts/MainText";
import AppCard from "../../common/cards/AppCard";

import {AppContainer,AppImgContainer,AppImg,AppBenefitsContainer} from './styles';

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
                <MainText size="35" text="Obten más beneficios" center={true} />
                <MainText
                  size="35"
                  text="Descarga nuestra App"
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
                  title="Fácil de usar"
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
