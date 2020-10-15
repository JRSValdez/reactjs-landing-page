import React from "react";
import { Link } from "react-router-dom";
import MainText from "./MainText";

import styled from "styled-components";

const BrandLink = styled(Link)`
  text-decoration: none;
  margin-right:30px;
  &:hover {
    text-decoration: none;
  }
`;

const BrandText = ({ text, color, size, href }) => {
  return (
    <BrandLink to={href}>
      <MainText {...{ text, color, size }} />
    </BrandLink>
  );
};

export default BrandText;
