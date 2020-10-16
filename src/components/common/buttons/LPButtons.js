import React from "react";
import {
  SubmitButtonStyle,
  TextButtonStyle,
  SwitchButtonStyle,
  FooterButtonStyle,
  ThankYouButtonStyle
} from "./styles";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SubmitButton = ({ text }) => {
  return <SubmitButtonStyle type="submit">{text}</SubmitButtonStyle>;
};

const ThankYouButton = ({ text, to }) => {
  return (
    <Link to={to}>
      <ThankYouButtonStyle>{text}</ThankYouButtonStyle>
    </Link>
  );
};

const TextButton = ({ text, href }) => {
  return (
    <a href={href}>
      <TextButtonStyle>
        {text}
        <FiArrowRight className="ml-2" />
      </TextButtonStyle>
    </a>
  );
};

const SwitchButton = ({ active, onClick, children }) => {
  return (
    <SwitchButtonStyle active={active} onClick={() => onClick()}>
      {children}
    </SwitchButtonStyle>
  );
};

const FooterButton = ({ text, href }) => {
  return (
    <a href={href}>
      <FooterButtonStyle>{text}</FooterButtonStyle>
    </a>
  );
};

export { TextButton, SwitchButton, SubmitButton, FooterButton, ThankYouButton };
