import React from "react";
import Icon from "../../assets/icons/lego-head.svg";
import styled from "styled-components";

const MyAccountButtonStyled = styled.button`
  padding-left: 30px;
  font-size: 18px;
  font-weight: 600;
  background: url(${Icon}) no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
`;

const MyAccountButton = () => {
  return <MyAccountButtonStyled>My Account</MyAccountButtonStyled>;
};

export default MyAccountButton;
