import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { SwitchButton } from "../buttons/LPButtons";

const SucursalType = ({ changeSucursalType }) => {
  const [adomicilio, setAdomicilio] = useState(true);

  const changeOption = (option) => {
    if (option !== adomicilio) {
      setAdomicilio(() => option);
      changeSucursalType(adomicilio ? "delivery" : "takeaway");
    }
  };

  return (
    <Row>
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
    </Row>
  );
};

export default SucursalType;
