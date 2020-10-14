import React from "react";
import Header from "../components/menu/Header";
import Menu from "../components/menu/Menu";
import LPNavbar from '../components/navbar/Navbar';
import '../components/menu/menu.css';


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
