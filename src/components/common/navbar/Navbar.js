import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import BrandText from "../texts/BrandText";
import styled from "styled-components";

const BrandNavText = styled(BrandText)`
  padding-top: 10px;
`;

const LPNavbar = (props) => {
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
        <BrandNavText text="Foodies" color="#000" size="28" href="/" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#quienesSomos">Acerca de</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="sucursales">Restaurantes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">Menú</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contacto">Contáctanos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LPNavbar;
