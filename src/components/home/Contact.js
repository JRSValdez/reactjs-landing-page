import React from "react";
import { Col, Row, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { SubmitButton } from "../common/buttons/LPButtons";
import MainText from "../common/texts/MainText";

import styled from "styled-components";

const ContactContainer = styled.section`
  background-color: black;
  color: white;
  position: relative;
  top: -100px;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 100px;
  z-index: 0;

  & input {
    background-color: black;
  }

  & input:focus {
    color: #ffc700;
    background-color: black;
    border-color: #ffc700;
  }

  & textarea {
    background-color: black;
  }

  & textarea:focus {
    color: #ffc700;
    background-color: black;
    border-color: #ffc700;
  }

  & textarea {
    height: 120px !important;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
    padding-bottom: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 300px;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact" className="contact">
      <Row>
        <Col className="text-center">
          <Container className="justify-content-center">
            <MainText size='35' text="Cuentanos tu experiencia" color="#FFF" center={true} />
            <p className="contact-description">
              Don't miss out on our great offers & Receive deals from all our
              top restaurants via e-mail.
            </p>
          </Container>
        </Col>
      </Row>
      <Row className="mt-4">
        <Container>
          <Form style={{ zIndex: "10" }}>
            <Row form>
              <Col sm={12} md={12} lg={4}>
                <FormGroup>
                  <Label for="contactName">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="contactName"
                    placeholder="Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="contactEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="contactEmail"
                    placeholder="example@example.com"
                  />
                </FormGroup>
              </Col>
              <Col sm={12} md={12} lg={8}>
                <FormGroup>
                  <Label for="contactMensaje">Mensaje</Label>
                  <Input
                    type="textarea"
                    name="mensaje"
                    id="contactMensaje"
                    placeholder="El día de ahora mi experiencia fué..."
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 4, offset: 8 }} md={{ size: 4, offset: 8 }}>
                <SubmitButton text="Enviar comentario" />
              </Col>
            </Row>
          </Form>
        </Container>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
