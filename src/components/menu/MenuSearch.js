import React from "react";
import { Row, Col, Container } from "reactstrap";
import MenuNavbar from "./MenuNavbar";
import { MdSearch } from "react-icons/md";

import styled from "styled-components";

const InputWrapper = styled.div`
  & svg {
    position: absolute;
    margin: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
`;

const MenuSearch = () => {
  return (
    <Row>
      <Col xs={9} sm={12} md={12} lg={4} className='order-2 order-sm-1 order-md-1'>
        <InputWrapper>
          <MdSearch size={30} />
          <Input placeholder="Busca tu platillo favorito" />
        </InputWrapper>
      </Col>
      <Col xs={3} sm={12} md={12} lg ={8} className='order-1 order-sm-2 order-md-2'>
        <MenuNavbar darkMode={false} />
      </Col>
    </Row>
  );
};

export default MenuSearch;
