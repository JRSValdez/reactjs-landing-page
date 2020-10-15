import React from "react";
import { Row, Col } from "reactstrap";

import styled from "styled-components";

const InputsContainer = styled(Row)`
  border-bottom-style: groove;
  border-top-style: groove;
`;

const Input = styled.input`
  font-size: large;
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;

  &:focus{
    outline: none;
  }
`;

const SearchInput = ({ searchValue, onChangeSearch }) => {
  const onChangeValue = (e) => {
    const search = e.target.value;
    onChangeSearch(search);
  };

  return (
    <InputsContainer>
      <Col xs={2} sm={2} md={3}>
        icon
      </Col>
      <Col xs={10} sm={10} md={9}>
        <Input
          value={searchValue}
          onChange={onChangeValue}
          placeholder="Buscar nombre o dirección"
        />
      </Col>
    </InputsContainer>
  );
};

export default SearchInput;
