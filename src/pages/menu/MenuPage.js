import React from "react";
import Header from "./Header";
import Footer from '../../components/common/footer';
import Menu from "../../components/menu";
import styled from 'styled-components';

const MenuWrapper = styled.div`
  background-color:#EAEAEA;
`;

const MenuPage = () => {
  return (
    <MenuWrapper>
      <Header />
      <Menu />
      <Footer />
    </MenuWrapper>
  );
};

export default MenuPage;