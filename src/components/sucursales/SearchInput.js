import React from "react";
import { Row, Col } from "reactstrap";
function SearchInput({ searchValue, onChangeSearch }) {

  const onChangeValue = (e) => {
    const search = e.target.value;
    onChangeSearch(search);
  };

  return (
      <Row className="inputs-container">
        <Col xs={2} sm={2} md={3}>
          icon
        </Col>
        <Col xs={10} sm={10} md={9}>
          <input
            value={searchValue}
            onChange={onChangeValue}
            className="sucursales-input"
            placeholder="Buscar nombre o dirección"
          />
        </Col>
      </Row>
  );
}

export default SearchInput;
