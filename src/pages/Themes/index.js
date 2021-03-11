import React from "react";
import ThemesGrid from "./ThemesGrid";
import styled from "styled-components";

const ThemesTitle = styled.h1`
  margin-top: 50px;
  font-size: 100px;
`;

const Themes = () => {
  return (
    <>
      <ThemesTitle>THEMES</ThemesTitle>
      <ThemesGrid />
    </>
  );
};

export default Themes;
