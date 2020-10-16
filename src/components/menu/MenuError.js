import React from "react";
import { Row, Col } from "reactstrap";
import MainText from "../common/texts/MainText";
import styled from "styled-components";
import LightText from "../common/texts/LightText";

import menuErrorImg from "../../assets/images/menu_error_img.svg";

const MenuErrorContainer = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  align-items: center !important;
  justify-content: center;
  margin-bottom:25px;
`;

const MenuError = () => {
  return (
    <MenuErrorContainer>
      <Row xs={1} sm={1} md={1} lg={1} className="text-center">
        <Col>
          <img src={menuErrorImg} alt="Platillo no encontrado" />
        </Col>
        <Col>
          <MainText
            center="true"
            text="¡Platillo no encontrado!"
            color="#000"
            size="20"
          />
        </Col>
        <Col>
          <LightText
            text="Te invitamos a que verifiques si el nombre esta 
                    bien escrito o prueba buscando un nuevo platillo."
            color="#000"
            size="20"
          />
        </Col>
      </Row>
    </MenuErrorContainer>
  );
};

export default MenuError;
