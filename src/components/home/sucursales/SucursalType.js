import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { SwitchButton } from "../../common/buttons/LPButtons";

import styled from "styled-components";

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
        <SwitchButton
          active={adomicilio}
          text="Para llevar"
          onClick={() => changeOption(true)}
        />
      </Col>
      <Col className="px-0">
        <SwitchButton
          active={!adomicilio}
          text="A domicilio"
          onClick={() => changeOption(false)}
        />
      </Col>
    </ButtonsContainer>
  );
};

export default SucursalType;
