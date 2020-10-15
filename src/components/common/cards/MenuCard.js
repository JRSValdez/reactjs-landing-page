import React from "react";
import MenuCardFooter from "./MenuCardFooter";
import MenuCardImage from "./MenuCardImage";
import MenuCardBody from "./MenuCardBody";

import styled from "styled-components";

import card_img from "../../../assets/images/imageProduct.png";

const CardWrapper = styled.div`
    &:hover{
        background-color:white;
        transform:scale(1.2);
    }
`;

const MenuCard = () => {
  return (
    <CardWrapper>
      <MenuCardImage alt="test" src={card_img} />
      <MenuCardBody
        title="Test test"
        description="1/2 Libra de carne envuelta en tocíno, con cebolla morada, queso cheddar, especias... "
      />
      <MenuCardFooter category="Recomendaciones" price="$794.00" />
    </CardWrapper>
  );
};

export default MenuCard;
