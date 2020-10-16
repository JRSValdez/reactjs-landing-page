import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { ThankYouContainer } from "./styles";
import MainText from "../../common/texts/MainText";
import LightText from "../../common/texts/LightText";
import {ThankYouButton} from '../../common/buttons/LPButtons';

import thankYouImage from "../../../assets/images/thank_you_img.svg";

const ContactThankYou = (props) => {
  return props.location.state ? (
    <ThankYouContainer>
      <Row xs={1} sm={1} md={1} lg={1} className="text-center">
        <Col>
          <img src={thankYouImage} alt="thank you" />
        </Col>
        <Col>
          <MainText
            center="true"
            text="Gracias por tus comentarios"
            color="#FFF"
            size="30"
          />
        </Col>
        <Col>
          <LightText
            color="#FFF"
            text="Don't miss out on our great offers & Receive deals from all our
                    top restaurants via e-mail."
          />
        </Col>
        <Col>
          <ThankYouButton text='Conoce nuestro menu' to='/menu' />
        </Col>
      </Row>
    </ThankYouContainer>
  ) : (
    <Redirect to="/" exact />
  );
};

export default ContactThankYou;
