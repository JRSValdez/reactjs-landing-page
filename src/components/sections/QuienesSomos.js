import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TextButton } from "../buttons/LPButtons";
import MainText from "../texts/MainText";
import LightText from "../texts/LightText";

import img from "../../assets/images/section2_img.jpg";

function QuienesSomos() {
  return (
    <section id="quienesSomos">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={7}
          className=" m-0 p-0"
        >
          <div className='inside-img-text'>
            <MainText
              className="main-text"
              text={"LA COMIDA ES"}
              color="white"
            />
            <MainText
              className="main-text"
              text={"NUESTRO ARTE"}
              color="#FFD600"
            />
          </div>
          <img className="img-fluid" alt="La comida es arte" src={img} />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={5}
          className="align-self-center p-4 curly"
        >
          <Container>
            <h3>¿Quién es Foodies?</h3>
            <LightText
              text={`Elit irure ad nulla id elit laborum nostrud mollit irure. Velit 
                           reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
                           consequat culpa consectetur Lorem. Reprehenderit dolore culpa 
                           irure eiusmod minim occaecat et id minim ullamco.`}
            />
            <TextButton text="Contáctanos" />
          </Container>
        </Col>
      </Row>
    </section>
  );
}

export default QuienesSomos;
