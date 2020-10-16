import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { SwitchButton } from "../../common/buttons/LPButtons";

import styled from "styled-components";

import { GiHamburger, GiTruck } from "react-icons/gi";

const ButtonsContainer = styled(Row)`
  border-top-style: groove;
`;

const SucursalType = ({ changeSucursalType }) => {
  const [adomicilio, setAdomicilio] = useState(true);

  const changeOption = (option) => {
    if (option !== adomicilio) {
      setAdomicilio(() => option);
      changeSucursalType(adomicilio ? "delivery" : "takeaway");
    }
  };

  return (
    <ButtonsContainer>
      <Col className="px-0">
        <SwitchButton active={adomicilio} onClick={() => changeOption(true)}>
          <GiHamburger size='30'/>
          <p>Para llevar</p>
        </SwitchButton>
      </Col>
      <Col className="px-0">
        <SwitchButton active={!adomicilio} onClick={() => changeOption(false)}>
          <GiTruck size='30' />
          <p>A domicilio</p>
        </SwitchButton>
      </Col>
    </ButtonsContainer>
  );
};

export default SucursalType;
