import React from "react";
import styled from "styled-components";

const MainTextStyle = styled.div`

  font-family: 'Noto Sans', serif;

  & p {
    font-size: ${(props) => (props.size ? props.size + "px" : "60px")};
    line-height: ${(props) => (props.size ? props.size - 10 + "px" : "50px")};
    font-weight: bold;
    padding-top: 10px;
    text-align: ${props => props.center ? 'center':'left'}
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: ${(props) => (props.size ? props.size - 20 + "px" : "50px")};
    line-height: ${(props) => (props.size ? props.size - 25 + "px" : "30px")};
  }

  @media only screen and (max-width: 600px) {
    font-size: ${(props) => (props.size ? props.size - 15 + "px" : "50px")};
    line-height: ${(props) => (props.size ? props.size - 20 + "px" : "30px")};
  }
`;

function MainText({ text, color = "#000", size, center = false, bg = false }) {
  const splitedText = text.split("\n");

  const bgStyle = {
    backgroundColor: "#FFD600",
    transform: "rotate(-0.64deg)",
    width: "fit-content",
    postion: "absolute",
  };

  const bgTextStyle = {
    transform: "rotate(0.64deg)",
    color: color,
  };

  const textStyle = {
    color: color,
  };

  return (
    <MainTextStyle size={size} center={center}>
      {splitedText.map((text, i) =>
        !bg ? (
          <p key={i} style={textStyle}>
            {text}
          </p>
        ) : (
          <div key={i} style={bgStyle} className={center ? "mx-auto" : ""}>
            <p style={bgTextStyle}>{text}</p>
          </div>
        )
      )}
    </MainTextStyle>
  );
}

export default MainText;
