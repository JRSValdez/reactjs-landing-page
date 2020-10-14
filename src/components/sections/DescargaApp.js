import React from "react";
import { Col, Container, Row } from "reactstrap";
import smarth_phone from "../../assets/images/smartphone.png";
import MainText from "../texts/MainText";
import AppCard from "../cards/AppCard";

const DescargaApp = () => {
  return (
    <section id="app" className="app">
      <Row>
        <Col xs={12} sm={12} md={12} lg={5} className="app-img-container">
          <img className="app-img" alt="smartphone" src={smarth_phone} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={7} className="app-benefits-container">
          <Container>
            <Row>
              <Col className="mx-auto">
                <MainText
                  className="app-title mx-auto"
                  text="Obten mas beneficios"
                />
                <MainText
                  className="app-title mx-auto"
                  text="Descarga nuestra app"
                  bg={true}
                />
              </Col>
            </Row>
            <Row xs={1} sm={1} md={2} lg={2}>
              <Col>
                <AppCard
                  className="mx-auto"
                  number="01"
                  title="Solicita rápido"
                  desc={`Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.`}
                />
              </Col>
              <Col>
                <AppCard
                  className="mx-auto"
                  number="02"
                  title="Facil de usar"
                  desc={`Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <AppCard
                  className="mx-auto"
                  number="03"
                  title="Promociones Especiales"
                  desc={`Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.`}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default DescargaApp;
