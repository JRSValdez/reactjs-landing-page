import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { MenuContext } from "./Menu";

import styled from "styled-components";

const PaginationContainer = styled(Row)`
  margin-right: auto;
  margin-left: auto;
`;

const PageNumber = styled(Col)`
  max-width: ${({ istext = false }) => (istext ? "100px" : "30px")};
  margin: 2px;
  padding: 2px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  background-color: ${(props) =>
    props.active ? "black" : props.istext ? "#FFD600" : "white"};
  text-align: center;
  color: ${({ active = false }) => (active ? "#FFD600" : "black")};
  cursor: default;
`;

const PageButton = styled(PageNumber)`
  max-width: 100px;
  background-color: #ffd600;
  cursor: pointer;

  &:hover {
    background-color: #fff1bf;
  }
`;

const MenuPagination = ({ onPaginate }) => {
  const menuContext = useContext(MenuContext);

  const { totalPages, nextPage, prevPage, currentPage } = menuContext.menuState;
  const dispatch = menuContext.menuDispatch;

  const pages = Array.apply(null, { length: totalPages }).map((item, i) => (
    <PageNumber key={i} active={(i + 1) === currentPage ? 1 : 0}>
      {i + 1}
    </PageNumber>
  ));

  const handlePaginate = (op) => {
    onPaginate();
    dispatch({ type: "CHANGE_PAGE", payload: currentPage + op });
  };

  if (totalPages > 1) {
    return (
      <PaginationContainer className="d-flex justify-content-center">
        {prevPage && (
          <PageButton onClick={() => handlePaginate(-1)}>Anterior</PageButton>
        )}
        {pages}
        {nextPage && (
          <PageButton onClick={() => handlePaginate(1)}>Siguiente</PageButton>
        )}
      </PaginationContainer>
    );
  } else {
    return <div></div>;
  }
};

export default MenuPagination;
