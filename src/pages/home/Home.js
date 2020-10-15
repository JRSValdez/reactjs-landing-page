import React from "react";
import Header from "./Header";
import QuienesSomos from "../../components/home/QuienesSomos";
import Sucursales from "../../components/home/sucursales";
import Testimonials from '../../components/home/testimonials';
import Contact from '../../components/home/Contact';
import DescargaApp from "../../components/home/DescargaApp";
import Footer from '../../components/common/footer';

import "../global.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <QuienesSomos />
      <Sucursales />
      <Testimonials />
      <Contact />
      <DescargaApp />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
