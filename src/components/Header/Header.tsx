import React, { FC } from "react";
import Logotype from "../Logotype";
import MyAccountButton from "./MyAccountButton";
import NavMenu from "./NavMenu";

import styled from "styled-components/macro";
import Bag from "./Bag";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const HeaderStyled = styled.header`
  height: 160px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${DEVICE.laptop} {
    font-size: 14px;
    margin-bottom: 25px;
  }
  @media ${DEVICE.tablet} {
    height: 100px;
  }
`;

const Header: FC = () => {
  return (
    <HeaderStyled>
      <Logotype />
      <NavMenu />
      <MyAccountButton label="My Account" />
      <Bag label="Bag">
        <span>1</span>
      </Bag>
    </HeaderStyled>
  );
};

export default Header;
