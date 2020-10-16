import styled from "styled-components";
import BrandText from "../texts/BrandText";
import { NavItem } from "reactstrap";

export const BrandNavText = styled(BrandText)`
  padding-top: 10px;
  margin-right: 20px;
`;

export const CustomNavItem = styled(NavItem)`
  font-weight: bold;
  padding-right: 20px;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};

  & a {
    text-decoration: none;
    color: ${(props) => (props.darkmode === 'true' ? "#FFF" : "#000")} !important;
  }

  & a:hover {
    text-decoration: none;
  }
`;
