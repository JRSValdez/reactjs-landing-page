import React from "react";
import { Container } from "reactstrap";
import MenuList from "./MenuList";
import MenuSearch from "./MenuSearch";
import styled from "styled-components";
import MenuPagination from "./MenuPagination";
import MenuError from "./MenuError";

const MenuContainer = styled(Container)`
  background-color: #eaeaea;
`;

const scrollToRef = () => window.scrollTo(0, 400);

const MenuUI = ({showError}) => {

  return (
    <MenuContainer className="mt-4 pt-4">
      <MenuSearch  />
      { !showError ? <MenuList /> : <MenuError />}
      <MenuPagination onPaginate={scrollToRef} />
    </MenuContainer>
  );
};

export default MenuUI;
