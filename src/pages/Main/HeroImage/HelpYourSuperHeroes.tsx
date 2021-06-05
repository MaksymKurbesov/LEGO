import styled from "styled-components/macro";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

export const HelpYourSuperHeroes = styled.p`
  max-width: 300px;
  margin-bottom: 30px;
  @media ${DEVICE.laptop} {
    display: none;
  }
`;
