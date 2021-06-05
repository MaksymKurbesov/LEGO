import React from "react";
import UnderConstruction from "../../assets/img/under-construction.png";
import styled from "styled-components";

const MyAccountStyled = styled.div`
  display: flex;
  img {
    margin: auto;
  }
`;

const MyAccount = () => {
  return (
    <MyAccountStyled>
      <img
        src={UnderConstruction}
        alt={"page under construction"}
        width="55%"
      />
    </MyAccountStyled>
  );
};

export default MyAccount;
