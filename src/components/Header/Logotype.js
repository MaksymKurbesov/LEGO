import React from "react";
import Logo from "../../assets/img/lego-logo.png";
import { Link } from "react-router-dom";

const Logotype = () => {
  return (
    <Link to="/#">
      <img src={Logo} width="75" height="75" alt="Логотип" />
    </Link>
  );
};

export default Logotype;
