import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const Title = styled.p`
  font-size: larger;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: large;
`;

const MenuCardFooter = ({ title, description }) => {
  return (
    <div>
      <Row>
        <Col>
          <Title>{title}</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Description>{description}</Description>
        </Col>
      </Row>
    </div>
  );
};

export default MenuCardFooter;
