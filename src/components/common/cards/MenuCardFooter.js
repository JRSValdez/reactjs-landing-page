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
  font-size: small;
`;

const MenuCardFooter = ({ category, price }) => {
  return (
    <Row xs={2} sm={2} md={2} lg={2}>
      <Col>
        <CategoryText>
          {category}
        </CategoryText>
      </Col>
      <Col>
        <PriceText>
          ${price}
        </PriceText>
      </Col>
    </Row>
  );
};

export default MenuCardFooter;
