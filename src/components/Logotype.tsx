import React from "react";
import Logo from "../assets/img/lego-logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE } from "../utils/const/DEVICE_SIZE";

const LogotypeStyled = styled(Link)`
  @media ${DEVICE.tablet} {
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const Logotype = () => {
  return (
    <LogotypeStyled to="/#">
      <img src={Logo} width="75" height="75" alt="Логотип" />
    </LogotypeStyled>
  );
};

export default Logotype;
