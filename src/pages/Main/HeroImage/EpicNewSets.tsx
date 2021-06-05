import styled from "styled-components/macro";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

export const EpicNewSets = styled.p`
  margin-bottom: 55px;
  position: relative;
  text-transform: uppercase;
  font-size: clamp(1rem, 0.2rem + 4.2vw, 3.3rem);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.laptop} {
    left: 0;
    margin-bottom: 40px;
  }
  @media ${DEVICE.tablet} {
    margin-bottom: 10px;
  }
`;
