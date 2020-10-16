import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { BrandNavText, CustomNavItem } from "./styles";

const items = [
  {
    id: 1,
    name: "Acerca de",
    to: "/#quienesSomos",
  },
  {
    id: 2,
    name: "Restaurantes",
    to: "/#sucursales",
  },
  {
    id: 3,
    name: "Menú",
    to: "/menu",
    externalLink: true,
  },
  {
    id: 4,
    name: "Contáctanos",
    to: "/#contact",
  },
];

const LPNavbar = ({ darkmode = 'false' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  const options = items.map(({ id, name, externalLink,to }) => {
    return externalLink ? (
      <CustomNavItem
        key={id}
        darkmode={darkmode}
        active={id === active}
        onClick={() => setActive(id)}
      >
        <Link className="nav-link" to={to}>
          {name}
        </Link>
      </CustomNavItem>
    ) : (
      <CustomNavItem
        key={id}
        darkmode={darkmode}
        active={id === active}
      >
        <NavLink href={to}>{name}</NavLink>
      </CustomNavItem>
    );
  });

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="lg"
        className="bg-transparent ml-5 pt-4"
      >
        <BrandNavText
          text="Foodies"
          color={darkmode == 'true' ? "#FFF" : "#000"}
          size="28"
          href="/"
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {options}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LPNavbar;
