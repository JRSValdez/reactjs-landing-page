import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const AppCardContainer = styled.div`
  text-align: center;
  padding: 10px;
  max-width: 260px;
`;

const Circle = styled.div`
  background: #ffd600;
  width: 40px;
  padding: 8px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: larger;
`;

const Description = styled.p`
  font-size: medium;
`;

const AppCard = ({ number, title, desc, className }) => {
  return (
    <AppCardContainer className='mx-auto'>
      <Row xs={1} sm={1} md={1} lg={1}>
        <Col>
          <Circle className="app-card-circle mx-auto">{number}</Circle>
        </Col>
        <Col>
          <Title className="app-card-title">{title}</Title>
        </Col>
        <Col>
          <Description className="app-card-description">{desc}</Description>
        </Col>
      </Row>
    </AppCardContainer>
  );
};

export default AppCard;
