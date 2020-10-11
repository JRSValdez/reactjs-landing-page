import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";


const LPNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className='bg-transparent'>
        <NavbarBrand href="/">Foodies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#quienesSomos">Acerca de</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Restaurantes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Menú</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contáctanos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LPNavbar;
