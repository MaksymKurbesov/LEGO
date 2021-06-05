import React, { FC } from "react";
import styled from "styled-components/macro";
import { createWordCase } from "../../utils/createWordCase";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const AddMoreButtonStyled = styled.button`
  margin: 0 auto;
  padding: 10px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #d2070b;
  outline: none;
  border: none;
  border-radius: 50%;
  color: white;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  &:disabled {
    background-color: rgba(210, 7, 11, 0.5);
    cursor: not-allowed;
  }
  @media ${DEVICE.tablet} {
    width: 87px;
    height: 87px;
    font-size: 10px;
  }
`;

interface AddMoreButtonProps {
  remainder: number;
  setQuery?: any;
  currentPage: number;
  isLoading: boolean;
}

const AddMoreButton: FC<AddMoreButtonProps> = ({
  remainder,
  currentPage,
  setQuery,
  isLoading,
}) => {
  return remainder ? (
    <AddMoreButtonStyled
      onClick={() => setQuery("page", currentPage + 1)}
      disabled={isLoading}
    >
      Показать еще {createWordCase(remainder)}
    </AddMoreButtonStyled>
  ) : null;
};

export default AddMoreButton;
