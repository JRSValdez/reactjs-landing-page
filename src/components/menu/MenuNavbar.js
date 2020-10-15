import React, { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  Navbar,
} from "reactstrap";
import styled from "styled-components";

const CustomNavItem = styled(NavItem)`
  font-weight: bold;
  padding-right: 20px;
  text-decoration: none;
  cursor: pointer;

`;

const MenuNavbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="bg-transparent">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <CustomNavItem darkMode={darkMode}>
            Todas
          </CustomNavItem>
          <CustomNavItem darkMode={darkMode}>
            Las Tradicionales
          </CustomNavItem>
          <CustomNavItem darkMode={darkMode}>
            Recomendaciones
          </CustomNavItem>
          <CustomNavItem darkMode={darkMode}>
            Para compartir
          </CustomNavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MenuNavbar;
