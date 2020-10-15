import React from "react";
import styled from "styled-components";

const SubmitButtonStyle = styled.button`
  color: black;
  font-weight: bold;
  background: #ffd600;
  font-size: large;
  padding: 5px;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: #ffea79;
  }
`;

const SubmitButton = ({ text }) => {
  return <SubmitButtonStyle type="button">{text}</SubmitButtonStyle>;
};

const TextBtutonStyle = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const TextButton = ({ text, href, className = "text-button" }) => {
  return (
    <a href={href}>
      <TextBtutonStyle className={className}>{text}</TextBtutonStyle>
    </a>
  );
};

const SwitchButtonStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    background-color: ${ props => props.active ? "#000" : "#FFF" };
    color: ${ props => props.active ? "#FFF" : "#000" };
`;

const SwitchButton = ({ text, active, onClick }) => {
  const style = {
    backgroundColor: active ? "#000" : "#FFF",
    color: active ? "#FFF" : "#000",
  };

  return (
    <SwitchButtonStyle active={active} onClick={() => onClick()}>
      <span>icon</span>
      <p>{text}</p>
    </SwitchButtonStyle>
  );
};

export { TextButton, SwitchButton, SubmitButton };
