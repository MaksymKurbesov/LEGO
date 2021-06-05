import React from "react";
import Icon from "../../assets/icons/lego-head.svg";
import styled from "styled-components/macro";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const MyAccountButtonStyled = styled.a`
  margin-left: auto;
  padding-left: 30px;
  font-size: inherit;
  font-weight: 600;
  text-transform: uppercase;
  background: url(${Icon}) no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
  @media ${DEVICE.tablet} {
    margin-left: 25px;
  }
  @media ${DEVICE.mobileL} {
    margin-left: 10px;
    padding-left: 20px;
    font-size: 12px;
  }
`;

const MyAccountButton = ({ label }: { label: string }) => {
  return (
    <MyAccountButtonStyled href="/my-account">{label}</MyAccountButtonStyled>
  );
};

export default MyAccountButton;
