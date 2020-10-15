import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 10px;
  margin: 5px;
  line-height: 10px;
  border: 1px solid #000;
  border-radius: 4px;

  &:hover {
    background-color: #fff1bf;
  }
`;

const Title = styled.p`
  font-size: large;
  font-weight: bold;
`;

function SucursalItem({ name, address, opening_time, closing_time }) {
  const opening_hour = parseInt(opening_time.split(":")[0]);
  opening_time = `${opening_time} ${
    opening_hour < 12 ? "AM" : opening_hour === 12 ? "MD" : "PM"
  }`;

  const closing_hour = parseInt(closing_time.split(":")[0]);
  closing_time = `${closing_time} ${
    closing_hour < 12 ? "AM" : closing_hour === 12 ? "MD" : "PM"
  }`;

  return (
    <ItemContainer>
      <Title className="title">{name}</Title>
      <p>
        Abierto de {opening_time} - {closing_time}{" "}
      </p>
      <p>{address}</p>
    </ItemContainer>
  );
}

export default SucursalItem;
