import React, { useState } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, Navbar } from "reactstrap";
import styled from "styled-components";

const CustomNavItem = styled(NavItem)`
  font-weight: bold;
  padding-right: 20px;
  text-decoration: none;
  cursor: pointer;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;

const MenuNavbarUI = ({ darkmode, categories, onClick, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="bg-transparent">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {categories &&
            categories.map((category) => (
              <CustomNavItem
                key={category.id}
                onClick={() =>
                  onClick({ type: "SET_CATEGORY", payload: category.id })
                }
                darkmode={darkmode}
                active={active === category.id}
              >
                {category.name}
              </CustomNavItem>
            ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MenuNavbarUI;
