import React, { useEffect, useRef, useState, FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { DEVICE, DEVICE_SIZE } from "../../utils/const/DEVICE_SIZE";
import { MenuToggleIcon } from "./MenuToggleIcon";
import { CSSTransition } from "react-transition-group";

const Nav = styled.nav`
  position: relative;
  margin-left: auto;
  .menu-toggle-enter-done span:nth-last-child(3) {
    transform: rotate(-45deg) translate(-5px, 5px);
  }
  .menu-toggle-enter-done span:nth-last-child(2) {
    opacity: 0;
  }
  .menu-toggle-enter-done span:nth-last-child(1) {
    transform: rotate(45deg) translate(-5px, -5px);
  }
  @media ${DEVICE.laptop} {
    ul {
      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
  @media ${DEVICE.tablet} {
    a {
      display: block;
      padding: 10px;
    }
    .navigation-enter,
    .navigation-appear {
      opacity: 0;
    }
    .navigation-enter-active,
    .navigation-appear-active {
      opacity: 1;
    }
    .navigation-exit {
      opacity: 1;
    }
    .navigation-exit-active,
    .navigation-exit-done {
      opacity: 0;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;

  text-transform: uppercase;
  z-index: 5;
  li:not(:last-child) {
    margin-right: 40px;
  }
  @media ${DEVICE.tablet} {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.15);
    color: white;
    font-size: 20px;
    transition: 0.5s all;
    backdrop-filter: blur(5px);
    li:not(:last-child) {
      margin-bottom: 5px;
    }
  }
  @media ${DEVICE.mobileL} {
    padding: 5px;
    font-size: 17px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  transition: 0.2s all;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  &.active {
    color: rgba(0, 0, 0, 1);
  }
  @media ${DEVICE.tablet} {
    color: white;
    &.active {
      color: #d2070b;
    }
  }
`;

const NavMenu: FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const MenuIconRef = useRef<HTMLLabelElement>(null);
  const isLessThanTablet =
    document.documentElement.clientWidth < parseInt(DEVICE_SIZE.tablet);

  useEffect(() => {
    const closeNavMenuHandler = (e: Event) => {
      const MenuIconNode = MenuIconRef.current;
      if (MenuIconNode && !MenuIconNode.contains(e.target as Node)) {
        setIsOpenMobileMenu(false);
      }
    };
    document.addEventListener("click", closeNavMenuHandler);
    return () => {
      document.removeEventListener("click", closeNavMenuHandler);
    };
  });

  return (
    <Nav>
      <CSSTransition
        in={isOpenMobileMenu}
        timeout={100}
        classNames="menu-toggle"
      >
        <MenuToggleIcon ref={MenuIconRef} isOpenMobileMenu={isOpenMobileMenu}>
          <input
            type="checkbox"
            hidden
            checked={isOpenMobileMenu}
            onChange={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          />
          <span></span>
          <span></span>
          <span></span>
        </MenuToggleIcon>
      </CSSTransition>
      <CSSTransition
        in={isOpenMobileMenu}
        timeout={300}
        appear
        unmountOnExit={isLessThanTablet}
        classNames="navigation"
      >
        <NavList>
          <li>
            <NavLinkStyled activeClassName="active" to="/themes">
              Themes
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled activeClassName="active" to="/minifigures">
              Minifigures
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled activeClassName="active" to="/lego-apps">
              Lego apps
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled activeClassName="active" to="/contact-us">
              Contact us
            </NavLinkStyled>
          </li>
        </NavList>
      </CSSTransition>
    </Nav>
  );
};

export default NavMenu;
