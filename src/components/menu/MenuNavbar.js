import React, { useContext } from "react";
import { MenuContext } from "./Menu";
import MenuNavbarUI from "./MenuNavbarUI";

const MenuNavbar = ({ darkmode }) => {
  const menuContext = useContext(MenuContext);

  return (
    <MenuNavbarUI
      darkmode={darkmode}
      active = {menuContext.menuState.currentCategory}
      categories={menuContext.menuState.categories}
      onClick={menuContext.menuDispatch}
    />
  );
};

export default MenuNavbar;
