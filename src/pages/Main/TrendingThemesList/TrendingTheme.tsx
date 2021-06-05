import styled from "styled-components/macro";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

interface TrendingThemeProps {
  themeImage: string;
  rotateDeg: number;
}

export const TrendingTheme = styled.li<TrendingThemeProps>`
  position: relative;
  color: #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
  font-size: 35px;
  font-weight: 600;
  transition: 0.5s;
  cursor: pointer;
  &:after {
    content: url(${(props) => props.themeImage});
    position: absolute;
    top: -150px;
    right: 200px;
    opacity: 0;
    transform: rotate(${(props) => props.rotateDeg}deg);
    transition: 0.5s;
    z-index: 1;
  }
  &:hover {
    color: black;
    &:after {
      opacity: 1;
    }
  }
  &:not(:last-child) {
    margin-bottom: 30px;
    @media ${DEVICE.tablet} {
      margin-bottom: 15px;
    }
    @media ${DEVICE.mobileL} {
      margin-bottom: 8px;
    }
  }
`;
