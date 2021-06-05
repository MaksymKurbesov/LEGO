import styled from "styled-components/macro";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

interface MenuToggleIconProps {
  isOpenMobileMenu: boolean;
}

export const MenuToggleIcon = styled.label<MenuToggleIconProps>`
  display: none;
  width: 20px;
  margin-left: auto;
  cursor: pointer;
  span {
    display: block;
    width: 20px;
    height: 2px;
    position: relative;
    background: ${(props) => (props.isOpenMobileMenu ? `#cdcdcd` : `#232323`)};

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    z-index: 1;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  input {
    opacity: 0;
    z-index: 2;
  }
  @media ${DEVICE.tablet} {
    display: block;
  }
`;
