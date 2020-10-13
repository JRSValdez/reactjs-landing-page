import React from "react";

import { Row, Col, Container } from "reactstrap";
import SearchInput from "../sucursales/SearchInput";
import SucursalType from "../sucursales/SucursalType";
import SucursalesList from "../sucursales/SucursalesList";

import img_map from "../../assets/images/map1.jpg";

import "../sucursales/sucursales.css";

const SucursalesUI = ({
  sucursales,
  changeSucursalType,
  searchValue,
  onChangeSearch,
}) => {
  console.log(sucursales);

  return (
    <section id="sucursales">
      <Row className="mt-5">
        <Col xs={12} sm={12} md={5} lg={5}>
          <SucursalType {...{changeSucursalType}} />
          <SearchInput
            {...{ searchValue, onChangeSearch }}
          />
          <Container>
            <SucursalesList sucursales={sucursales} />
          </Container>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <img className="img-fluid map-img" alt="map" src={img_map} />
        </Col>
      </Row>
    </section>
  );
};

export default SucursalesUI;
