import React from "react";
import { Row, Col } from "reactstrap";
import MainText from "../../common/texts/MainText";
import styled from "styled-components";

import notFoundImg from "../../../assets/images/404_img.svg";

const MenuErrorContainer = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  align-items: center !important;
  justify-content: center;
  margin-top:25px;
`;

const SucursalesNotFound = () => {
  return (
    <MenuErrorContainer>
      <Row xs={1} sm={1} md={1} lg={1} className="text-center">
        <Col>
          <img src={notFoundImg} alt="Sucursal no encontrada" />
        </Col>
        <Col>
          <MainText
            center="true"
            text="¡No hemos encontrado lo que buscas!"
            color="#000"
            size="20"
          />
        </Col>
      </Row>
    </MenuErrorContainer>
  );
};

export default SucursalesNotFound;
