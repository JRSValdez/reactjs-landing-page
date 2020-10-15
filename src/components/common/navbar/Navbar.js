import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import BrandText from "../texts/BrandText";
import styled from "styled-components";

const BrandNavText = styled(BrandText)`
  padding-top: 10px;
  margin-right: 20px;
`;

const CustomNavItem = styled(NavItem)`
  font-weight: bold;
  padding-right: 20px;
  text-decoration: none;

  & a {
    text-decoration: none;
    color: ${props => props.darkMode ? '#FFF' : '#000'} !important;
  }

  & a:hover {
    text-decoration: none;
  }
`;

const LPNavbar = ({darkMode = false}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="lg"
        className="bg-transparent ml-5 pt-4"
      >
        <BrandNavText text="Foodies" color={darkMode ? '#FFF' : '#000'} size="28" href="/" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <CustomNavItem darkMode={darkMode}>
              <NavLink href="/#quienesSomos">Acerca de</NavLink>
            </CustomNavItem>
            <CustomNavItem darkMode={darkMode}>
              <NavLink href="/#sucursales">Restaurantes</NavLink>
            </CustomNavItem>
            <CustomNavItem darkMode={darkMode}>
              <Link className='nav-link' to="/menu">Menú</Link>
            </CustomNavItem>
            <CustomNavItem darkMode={darkMode}>
              <NavLink href="/#contact">Contáctanos</NavLink>
            </CustomNavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LPNavbar;
