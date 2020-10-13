import React from "react";
import LPNavbar from "../components/navbar/Navbar";
import Header from "../components/sections/Header";
import QuienesSomos from "../components/sections/QuienesSomos";
import Sucursales from "../components/sections/Sucursales";
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

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
      <Sucursales />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
};

export default Index;
