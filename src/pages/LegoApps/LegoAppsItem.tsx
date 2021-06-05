import styled from "styled-components/macro";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

export const LegoAppsItem = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  padding-bottom: 30px;
  margin: 0 0 30px auto;
  border-bottom: 3px solid lightgray;
  font-size: 20px;
  h2 {
    text-transform: uppercase;
  }
  div {
    width: 30%;
  }
  img {
    border-radius: 10%;
  }
  @media ${DEVICE.laptop} {
    flex-direction: column-reverse;
    div {
      width: auto;
    }
    img {
      margin-bottom: 15px;
      order: 1;
    }
  }
  @media ${DEVICE.tablet} {
    margin: 0 auto 30px;
    font-size: 17px;
  }
`;
