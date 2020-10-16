import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import MainText from "../../common/texts/MainText";

const ContactHeader = () => {
    return (
        <Row>
        <Col className="text-center">
          <Container className="justify-content-center">
            <MainText
              size="35"
              text="Cuentanos tu experiencia"
              color="#FFF"
              center={true}
            />
            <p className="contact-description">
              Don't miss out on our great offers & Receive deals from all our
              top restaurants via e-mail.
            </p>
          </Container>
        </Col>
      </Row>
    )
}

export default ContactHeader
