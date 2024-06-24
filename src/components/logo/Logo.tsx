import React from "react";
import "./Logo.scss";

interface LogoProps {
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ dark }) => {
  return (
    <a className="Logo" href="#">
      <img
        className="Logo-img"
        src={dark ? "./images/logo-dark.svg" : "./images/logo-light.svg"}
        alt="logo"
      />
    </a>
  );
};

export default Logo;
