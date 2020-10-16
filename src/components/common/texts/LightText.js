import React from "react";

const LightText = ({ text, size, className, color }) => {
  const fontSize = size ? size : "18px";

  const textStyle = {
    marginTop:'25px',
    color: color !== '' ? color : "rgba(0, 0, 0, 0.4)",
    fontSize: fontSize + ' !important',
    lineHeight:'18px'
  };

  return (
    <div className={className} style={textStyle}>
        <p >
          {text}
        </p>
    </div>
  );
}

export default LightText;
