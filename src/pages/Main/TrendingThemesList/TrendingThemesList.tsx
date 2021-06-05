import React, { FC } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { randomInteger } from "../../../utils/randomInteger";
import { TRENDING_THEMES } from "../../../utils/const/TRENDING_THEMES";
import { TrendingTheme } from "./TrendingTheme";
import MainPageSection from "../../../components/MainPageSection";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

const ROTATE_DEG = {
  min: -10,
  max: 10,
};

const TrendingThemesListStyled = styled.ul`
  max-width: 60%;
  margin-left: 20%;
  @media ${DEVICE.tablet} {
    max-width: 77%;
    margin-left: 10%;
    a {
      font-size: 27px;
    }
  }
  @media ${DEVICE.mobileL} {
    max-width: 95%;
    margin-left: 3%;
    a {
      font-size: 22px;
    }
  }
`;

const TrendingThemesList: FC = () => {
  return (
    <MainPageSection title="Trending Themes">
      <TrendingThemesListStyled>
        {TRENDING_THEMES.map((theme, i) => (
          <TrendingTheme
            themeImage={theme.img}
            rotateDeg={randomInteger(ROTATE_DEG.min, ROTATE_DEG.max)}
            key={i}
          >
            <Link to={theme.url}>{theme.name}</Link>
          </TrendingTheme>
        ))}
      </TrendingThemesListStyled>
    </MainPageSection>
  );
};

export default TrendingThemesList;
