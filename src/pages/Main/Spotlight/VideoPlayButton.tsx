import styled from "styled-components/macro";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

export const VideoPlayButton = styled.button`
  width: 35%;
  display: flex;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  &:after {
    content: "";
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 5px;
    width: 60px;
    height: 60px;
    background-color: #d2070b;
    background-clip: content-box;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-25%) translateY(-50%);
    display: block;
    padding-left: 2px;
    border: 10px solid;
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white;
    z-index: 5;
  }
  @media ${DEVICE.tablet} {
    &:after {
      width: 40px;
      height: 40px;
      padding: 3px;
    }
    &:before {
      border: 7px solid;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white;
    }
  }
`;
