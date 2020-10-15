import React, { useReducer, useEffect } from "react";
import { reducer, getCategories, getMenu } from "./MenuReducer";
import MenuUI from "./MenuUI";

export const MenuContext = React.createContext();

const initialState = {
  currentCategory: null,
  nextPage: null,
  prevPage: null,
  currentPage: null,
  resetPagination: false,
  totalPages: null,
  categories: [],
  menu: [],
  searchQuery: "",
};

const Menu = () => {
  const [menu, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  useEffect(() => {
    getMenu(dispatch, menu);
  }, [menu.currentCategory, menu.searchQuery, menu.currentPage]);

  return (
    <MenuContext.Provider value={{ menuState: menu, menuDispatch: dispatch }}>
      <MenuUI />
    </MenuContext.Provider>
  );
};

export default Menu;
