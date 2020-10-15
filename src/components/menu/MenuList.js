import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import MenuCard from "../common/cards/MenuCard";
import { MenuContext } from "./Menu";

const MenuList = () => {
  const menuContext = useContext(MenuContext);

  return (
    <Row lg={4} md={2} xs={1} className="mt-4">
      {menuContext.menuState.menu.map((item) => (
        <Col key={item.id}>
          <MenuCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default MenuList;
