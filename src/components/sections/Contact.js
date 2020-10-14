import React from "react";
import { Col, Row, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { SubmitButton } from "../buttons/LPButtons";
import MainText from "../texts/MainText";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Row>
        <Col className="text-center">
          <Container className="justify-content-center">
            <MainText text="Cuentanos tu experiencia" color="#FFF" />
            <p className='contact-description'>
              Don't miss out on our great offers & Receive deals from all our
              top restaurants via e-mail.
            </p>
          </Container>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Container>
          <Form>
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
    </section>
  );
};

export default Contact;
