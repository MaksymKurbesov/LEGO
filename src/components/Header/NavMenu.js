import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin-right: auto;
  ul {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    li:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const NavMenu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/themes">Themes</NavLink>
        </li>
        <li>
          <NavLink to="/">Minifigures</NavLink>
        </li>
        <li>
          <NavLink to="/">Lego apps</NavLink>
        </li>
        <li>
          <NavLink to="/">Support</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default NavMenu;
