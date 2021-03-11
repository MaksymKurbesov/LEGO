import React from "react";
import Arrow from "../../../assets/icons/arrow.svg";
import styled from "styled-components";

const LinkedButtonStyled = styled.a`
  padding-left: 40px;
  position: absolute;
  left: 35%;
  bottom: 200px;
  font-weight: 600;
  font-size: 14px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid white;
    background-image: url(${Arrow});
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: 5px 5px;
    transform: rotate(135deg);
  }
`;

const LinkedButton = ({ label, href }) => {
  return <LinkedButtonStyled href={href}>{label}</LinkedButtonStyled>;
};

export default LinkedButton;
