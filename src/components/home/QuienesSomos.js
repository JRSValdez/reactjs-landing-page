import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextButton } from "../common/buttons/LPButtons";
import MainText from "../common/texts/MainText";
import LightText from "../common/texts/LightText";

import styled from "styled-components";

import img from "../../assets/images/section2_img.jpg";
import curly_img from "../../assets/images/curly_img.svg";

const InsideImageText = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    right: 40px;
  }

  @media only screen and (max-width: 600px) {
    right: 30px;
  }
`;

const DescriptionContainer = styled(Container)`
  background: url(${curly_img});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 45px;
  margin: 0;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-top: 70px !important;
    padding-bottom: 130px !important;
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    background: none;
  }
`;

function QuienesSomos() {
  return (
    <section id="quienesSomos">
      <Row>
        <Col xs={12} sm={12} md={12} lg={7} className=" m-0 p-0">
          <InsideImageText>
            <MainText size="45" text={"LA COMIDA ES"} color="white" />
            <MainText size="45" text={"NUESTRO ARTE"} color="#FFD600" />
          </InsideImageText>
          <img
            style={{ width: "100%" }}
            className="img-fluid"
            alt="La comida es arte"
            src={img}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={5} className="align-self-center ">
          <DescriptionContainer>
            <h3>¿Quién es Foodies?</h3>
            <LightText
              text={`Elit irure ad nulla id elit laborum nostrud mollit irure. Velit 
                           reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
                           consequat culpa consectetur Lorem. Reprehenderit dolore culpa 
                           irure eiusmod minim occaecat et id minim ullamco.`}
            />
            <TextButton text="Contáctanos" href='#contact' />
          </DescriptionContainer>
        </Col>
      </Row>
    </section>
  );
}

export default QuienesSomos;
