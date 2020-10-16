import React from "react";
import { Row, Col } from "reactstrap";
import MainText from '../components/common/texts/MainText';
import styled from "styled-components";

import notFoundImage from '../assets/images/404_img.svg';

const NotFoundContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  height: 100% !important;
  width: 100%;
  align-items: center !important;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      {" "}
      <Row xs={1} sm={1} md={1} lg={1} className="text-center">
        <Col>
          <img src={notFoundImage} alt="404" />
        </Col>
        <Col>
          <MainText
            center="true"
            text={`¡No hemos encontrado lo \n que buscas!`}
            color="#000"
            size="30"
          />
        </Col>
      </Row>
    </NotFoundContainer>
  );
};

export default NotFound;
