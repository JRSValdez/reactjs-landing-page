import React from "react";
import {Link} from 'react-router-dom';
import MainText from "./MainText";

const BrandText = ({ text, href, className }) => {
  return (
    <Link className={className} to={href}>
      <MainText className='' text={text} />
    </Link>
  );
};

export default BrandText;
