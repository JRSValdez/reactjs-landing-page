import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const PriceText = styled.div`
  display: block;
  font-size: 20px;
  font-weight: bold;
  background: #ffd600;
  border-radius: 8px;
  text-align: center;
`;

const CategoryText = styled.div`
  color: #78909c;
  font-size: medium;
`;

const MenuCardFooter = ({ category, price }) => {
  return (
    <Row>
      <Col>
        <CategoryText>
          {category}
        </CategoryText>
      </Col>
      <Col>
        <PriceText>
          {price}
        </PriceText>
      </Col>
    </Row>
  );
};

export default MenuCardFooter;
