import styled from "styled-components/macro";
import React, { FC, PropsWithChildren } from "react";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const BagStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin-left: 50px;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  background-color: #f8f8f8;
  cursor: not-allowed;
  span {
    font-size: 20px;
  }
  .tooltip {
    position: absolute;
    left: -100px;
    top: 100px;
    display: none;
  }
  @media ${DEVICE.laptop} {
    margin-left: 20px;
  }
  @media ${DEVICE.tablet} {
    display: none;
  }
  &:hover {
    .tooltip {
      display: block;
    }
  }
`;

const Bag: FC<PropsWithChildren<{ label: string }>> = ({ label, children }) => {
  return (
    <BagStyled>
      {label}
      {children}
      <span className="tooltip">Work in progress...</span>
    </BagStyled>
  );
};

export default Bag;
