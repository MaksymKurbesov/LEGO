import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  padding: 5px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  font: inherit;
  font-weight: 400;
  transition: 0.3s;
  z-index: -1;
  &:invalid {
    button {
      background-color: black;
    }
  }
`;
