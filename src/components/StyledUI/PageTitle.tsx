import styled from "styled-components/macro";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

export const PageTitle = styled.h2`
  margin: 50px 0;
  font-size: 100px;
  text-transform: uppercase;
  @media ${DEVICE.tablet} {
    font-size: 60px;
  }
  @media ${DEVICE.mobileL} {
    font-size: 35px;
  }
`;
