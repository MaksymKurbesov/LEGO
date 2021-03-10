import SearchIcon from "../../assets/icons/search.svg";
import styled from "styled-components";

export const Search = styled.input`
  margin-left: auto;
  padding-left: 25px;
  font-size: 17px;
  background: url(${SearchIcon}) no-repeat center left;
  background-size: 18px 18px;
  font-weight: 600;
  font-family: CeraPro;
  text-transform: uppercase;
  border: none;
  outline: none;
  &::placeholder {
    font: inherit;
    color: black;
  }
`;
