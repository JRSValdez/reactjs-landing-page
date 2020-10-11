import React from "react";
import LPNavbar from "../components/navbar/Navbar";
import Header from "../components/sections/Header";
import QuienesSomos from "../components/sections/QuienesSomos";

import "./pages.css";
import "../components/sections/sections.css";

const Index = () => {
  return (
    <React.Fragment>
      <header>
        <LPNavbar />
        <Header />
      </header>
      <QuienesSomos />
    </React.Fragment>
  );
};

export default Index;
