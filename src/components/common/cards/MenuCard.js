import React from "react";
import MenuCardFooter from "./MenuCardFooter";
import MenuCardImage from "./MenuCardImage";
import MenuCardBody from "./MenuCardBody";

import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  &:hover {
    background-color: white;
    overflow: hidden;
  }

  &:hover > .card-body {
    top:0;
    background-color: white;
    padding-bottom: 10px;
  }
`;

const CardBodyWrapper = styled.div`
  position: relative;
  top: -25px;
  padding: 15px;
  background-color: #eaeaea;
  width:100%;
`;

const MenuCard = ({category,name,image,price,description}) => {
  return (
    <CardWrapper>
      <MenuCardImage alt="test" src={image} />
      <CardBodyWrapper className="card-body">
        <MenuCardBody
          title={name}
          description={description}
        />
        <MenuCardFooter category={category} price={price} />
      </CardBodyWrapper>
    </CardWrapper>
  );
};

export default MenuCard;
