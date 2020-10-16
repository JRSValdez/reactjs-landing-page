import axios from "axios";

const api_url = "https://api.elaniin.dev/api";

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_CATEGORY":
      return {
        ...state,
        resetPagination: true,
        currentCategory:
          action.payload !== state.currentCategory ? action.payload : null,
      };
    case "GET_MENU":
      return {
        ...state,
        menu: action.payload.data,
        totalPages: action.payload.meta.last_page,
        currentPage: action.payload.meta.current_page,
        nextPage: action.payload.links.next,
        prevPage: action.payload.links.prev,
        resetPagination: false,
        showError: action.payload.meta.total === 0
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_SEARCH":
      return { ...state, resetPagination: true, searchQuery: action.payload };
    default:
      return state;
  }
};

export const getCategories = async (dispatch) => {
  const categories = await axios({
    method: "get",
    url: `${api_url}/categories`,
    json: true,
  });
  dispatch({ type: "GET_CATEGORIES", payload: categories.data.data });
};

export const getMenu = async (dispatch, menu) => {
  const { searchQuery, currentCategory, currentPage, resetPagination } = menu;

  const category =
    parseInt(currentCategory) > 0 ? `category=${currentCategory}` : "";
  const query = searchQuery.length > 2 ? `query=${searchQuery}` : "";

  let page = parseInt(currentPage) > 0 ? `page=${currentPage}` : "";

  const menuResponse = await axios({
    method: "get",
    url: `${api_url}/menu?${category}&${query}&${!resetPagination ? page : ""}`,
    json: true,
  });
  dispatch({ type: "GET_MENU", payload: menuResponse.data });
};
