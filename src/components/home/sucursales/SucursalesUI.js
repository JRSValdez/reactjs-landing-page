import React from "react";

import { Row, Col, Container } from "reactstrap";
import SearchInput from "./SearchInput";
import SucursalType from "./SucursalType";
import SucursalesList from "./SucursalesList";
import SucursalesNotFound from "./SucursalesNotFound";
import MainText from "../../common/texts/MainText";

import styled from "styled-components";

import img_map from "../../../assets/images/map1.jpg";

const SucursalesSection = styled.section`
  padding-top: 20px !important;
`;

const MapImg = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SucursalesUI = ({
  sucursales,
  changeSucursalType,
  searchValue,
  onChangeSearch,
}) => {
  return (
    <SucursalesSection id="sucursales">
      <Row className="mt-5">
        <Col xs={12} sm={12} md={12} lg={5} className=" px-0 pl-4">
          <div className="text-center">
            <MainText text="Estamos para ti" size="40" />
          </div>
          <SucursalType {...{ changeSucursalType }} />
          <SearchInput {...{ searchValue, onChangeSearch }} />
          <Container>
            {sucursales.length > 0 ? (
              <SucursalesList sucursales={sucursales} />
            ) : (
              <SucursalesNotFound />
            )}
          </Container>
        </Col>
        <Col xs={12} sm={12} md={12} lg={7}>
          <MapImg className="img-fluid" alt="map" src={img_map} />
        </Col>
      </Row>
    </SucursalesSection>
  );
};

export default SucursalesUI;
