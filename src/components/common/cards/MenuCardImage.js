import React from "react";
import styled from "styled-components";

const CardImage = styled.img`
  width: 100%;
`;

const MenuCardImage = ({ alt, src }) => {
  return (
    <div>
      <CardImage alt={alt} src={src} />
    </div>
  );
};

export default MenuCardImage;
