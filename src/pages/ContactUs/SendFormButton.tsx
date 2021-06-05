import styled from "styled-components";

const SendFormButton = styled.button`
  width: 35%;
  margin: 0 auto;
  padding: 5px 0;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid black;
  transition: 0.3s;
  text-transform: uppercase;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    transform: translateY(4px);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  }
`;

export default SendFormButton;
