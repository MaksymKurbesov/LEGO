import React from "react";

import styled from "styled-components/macro";
import ArrowIcon from "./Icons/ArrowIcon";

interface LinkedButtonProps {
  href: string;
  fill: string;
  label?: string;
  className: string;
}

export const LinkedButtonStyled = styled.a<LinkedButtonProps>`
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.fill};
`;

const LinkedButton = ({ className, href, fill, label }: LinkedButtonProps) => {
  return (
    <LinkedButtonStyled fill={fill} href={href} className={className}>
      <ArrowIcon fill={fill} />
      {label}
    </LinkedButtonStyled>
  );
};

export default LinkedButton;
