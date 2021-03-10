import React from "react";
import Logotype from "./Logotype";
import MyAccountButton from "./MyAccountButton";
import NavMenu from "./NavMenu";
import { Search } from "./Search";
import styled from "styled-components";

const HeaderStyled = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Bag = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 50px;
  padding-right: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  span {
    font-size: 20px;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -25px;
    right: 0;
    width: 50px;
    height: 150px;
    background-color: #f8f8f8;
    z-index: -1;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logotype />
      <Search placeholder="search & selection" />
      <NavMenu />
      <MyAccountButton />
      <Bag>
        Bag <br />
        <span>1</span>
      </Bag>
    </HeaderStyled>
  );
};

export default Header;
