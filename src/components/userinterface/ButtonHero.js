import React from "react";
import { Link } from "react-router-dom";

const ButtonHero = ({ to, text, buttoncolor, buttondiv, onClick,target}) => {
  return (
    <div className={`button ${buttondiv}`}>
      <Link to={to} target={target} onClick={onClick} className={`button-color ${buttoncolor}`}>
        {text}
      </Link>
    </div>
  );
};

export default ButtonHero;
