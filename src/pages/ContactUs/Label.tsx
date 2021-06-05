import React from "react";
import styled from "styled-components";

interface LabelStyledProps {
  isValid: boolean;
}

interface LabelProps {
  isValid: boolean;
  labelText: string;
  children: React.ReactNode;
}

const LabelStyled = styled.label<LabelStyledProps>`
  position: relative;
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) =>
    props.isValid ? "rgba(0,0,0,0.8)" : "rgba(0, 0, 0, 0.5)"};
  transition: 0.3s;
  span {
    display: block;
    min-height: 20px;
    font-size: ${(props) => (props.isValid ? "13px" : "")};
    transform: translateY(${(props) => (props.isValid ? "0" : "22px")});
    z-index: 1;
  }
  &:focus-within {
    color: rgba(0, 0, 0, 0.8);
    span {
      font-size: 13px;
      transform: translateY(0);
    }
    &:before,
    :after {
      transition: 0.3s;
      width: 50%;
    }
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${(props) => (props.isValid ? "50%" : "0")};
    height: 2px;
    background-color: black;
    transition: 0.3s;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 50%;
    width: ${(props) => (props.isValid ? "50%" : "0")};
    height: 2px;
    background-color: black;
    transition: 0.3s;
  }
`;

const LabelText = styled.span`
  position: relative;
  transform: translateY(22px);
  transition: 0.3s;
`;

const Label = ({ isValid, labelText, children }: LabelProps) => {
  return (
    <LabelStyled isValid={isValid}>
      <LabelText>{labelText}</LabelText>
      {children}
    </LabelStyled>
  );
};

export default Label;
