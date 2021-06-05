import styled from "styled-components/macro";
import React, { FC, PropsWithChildren } from "react";
import { DEVICE } from "../utils/const/DEVICE_SIZE";

const SectionMainPageStyled = styled.div`
  padding-left: 150px;
  margin-bottom: 100px;
  text-transform: uppercase;
  h2 {
    margin-bottom: 50px;
    font-size: 18px;
  }
  @media ${DEVICE.laptopL} {
    padding-left: 0;
  }
  @media ${DEVICE.tablet} {
    margin-bottom: 50px;
    h2 {
      margin-bottom: 25px;
      font-size: 12px;
    }
  }
  @media ${DEVICE.mobileL} {
    h2 {
      font-size: 10px;
    }
  }
`;

const SectionMainPage: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <SectionMainPageStyled>
      <h2>{title}</h2>
      {children}
    </SectionMainPageStyled>
  );
};

export default SectionMainPage;
