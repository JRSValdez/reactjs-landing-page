import React from "react";
import { Container } from "reactstrap";
import MenuList from "./MenuList";
import MenuSearch from "./MenuSearch";
import styled from "styled-components";

const MenuContainer = styled(Container)`
  background-color: #eaeaea;
`;

const MenuUI = () => {
  return (
    <MenuContainer className="mt-4 pt-4">
      <MenuSearch />
      <MenuList />
    </MenuContainer>
  );
};

export default MenuUI;
