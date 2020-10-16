import React from "react";
import { Row, Container } from "reactstrap";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

import { ContactContainer } from "./styles";

const ContactUI = (props) => {
  return (
    <ContactContainer id="contact" className="contact">
      <ContactHeader />
      <Row className="mt-4">
        <Container>
          <ContactForm {...props} />
        </Container>
      </Row>
    </ContactContainer>
  );
};

export default ContactUI;
