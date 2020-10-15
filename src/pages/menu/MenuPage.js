import React from "react";
import Header from "./Header";
import Footer from '../../components/common/footer';
import Menu from "../../components/menu";

const MenuPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
};

export default MenuPage;