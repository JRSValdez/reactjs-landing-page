import React from "react";
import { Form, Row, Col, FormGroup, Input, Label } from "reactstrap";
import { SubmitButton } from "../../common/buttons/LPButtons";

const ContactForm = ({ onSubmit, onChange, formValues }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Row form>
        <Col sm={12} md={12} lg={4}>
          <FormGroup>
            <Label for="contactName">Name</Label>
            <Input
              required
              type="text"
              name="name"
              id="contactName"
              onChange={onChange}
              value={formValues.name}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactEmail">Email</Label>
            <Input
              required
              type="email"
              name="email"
              id="contactEmail"
              onChange={onChange}
              value={formValues.email}
              placeholder="example@example.com"
            />
          </FormGroup>
        </Col>
        <Col sm={12} md={12} lg={8}>
          <FormGroup>
            <Label for="contactMensaje">Mensaje</Label>
            <Input
              required
              type="textarea"
              name="message"
              id="contactMensaje"
              onChange={onChange}
              value={formValues.message}
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
  );
};

export default ContactForm;
