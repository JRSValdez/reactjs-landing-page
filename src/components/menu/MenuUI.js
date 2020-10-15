import React from "react";
import { Container } from "reactstrap";
import MenuList from "./MenuList";
import MenuSearch from "./MenuSearch";
import styled from "styled-components";
import MenuPagination from "./MenuPagination";

const MenuContainer = styled(Container)`
  background-color: #eaeaea;
`;

const scrollToRef = (ref) => window.scrollTo(0, 400);

const MenuUI = () => {

  return (
    <MenuContainer className="mt-4 pt-4">
      <MenuSearch  />
      <MenuList />
      <MenuPagination onPaginate={scrollToRef} />
    </MenuContainer>
  );
};

export default MenuUI;
