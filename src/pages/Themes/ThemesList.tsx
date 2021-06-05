import React, { FC } from "react";
import { THEMES_LIST } from "../../utils/const/THEMES_LIST";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const ThemesListStyled = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(4, max-content);
  justify-content: center;
  grid-gap: 2px;
  @media ${DEVICE.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    img {
      width: 135px;
    }
  }
`;

const Theme = styled(NavLink)`
  border: 2px solid gray;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  transition: 0.3s all;
  &:hover {
    border: 2px solid black;
    z-index: 5;

    img {
      transition: 0.3s;
      transform: scale(0.9);
    }
  }
  img {
    display: block;
    margin: 0 auto;
    transition: 0.3s;
  }
`;

const ThemesList: FC = () => {
  return (
    <ThemesListStyled>
      {THEMES_LIST.map((theme, i) => (
        <Theme
          to={{
            pathname: `themes/${theme.link}`,
            state: { themeName: theme.link },
          }}
          key={i}
        >
          <img src={theme.icon} alt={theme.link} width="200" />
        </Theme>
      ))}
    </ThemesListStyled>
  );
};

export default ThemesList;
