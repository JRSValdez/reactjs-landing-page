import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import BrandText from '../texts/BrandText';


const LPNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className='bg-transparent'>
        <BrandText className='brand-text' text='Foodies' href='/' />
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
