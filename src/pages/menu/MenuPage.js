import React from "react";
import Header from "./Header";
import LPNavbar from '../../components/common/navbar';
import Menu from "../../components/menu";

const MenuPage = () => {
  return (
    <React.Fragment>
      <header>
        <LPNavbar />
        <Header />
      </header>
      <Menu />
    </React.Fragment>
  );
};

export default MenuPage;