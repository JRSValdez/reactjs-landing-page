import React from "react";
import Header from "./Header";
import QuienesSomos from "../../components/home/QuienesSomos";
import Sucursales from "../../components/home/sucursales";
import Testimonials from '../../components/home/testimonials';
import Contact from '../../components/home/contact';
import DescargaApp from "../../components/home/app";
import Footer from '../../components/common/footer';
import styled from 'styled-components';
import "../global.css";

const HomeWrapper = styled.div`
  background-color:#FFF;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <QuienesSomos />
      <Sucursales />
      <Testimonials />
      <Contact />
      <DescargaApp />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
