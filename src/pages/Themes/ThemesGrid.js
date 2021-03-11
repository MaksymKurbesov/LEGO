import React from "react";
import ArchitectureLogo from "../../assets/img/architecture-logo.png";
import Architecture from "../../assets/img/architecture-theme.png";
import BrickHeadzLogo from "../../assets/img/brick-headz-logo.png";
import BrickHeadz from "../../assets/img/brick-headz-theme.png";
import CityLogo from "../../assets/img/city-logo.png";
import City from "../../assets/img/city-theme.png";
import ClassicLogo from "../../assets/img/classic-logo.png";
import Classic from "../../assets/img/classic-theme.png";
import CreatorLogo from "../../assets/img/creator-logo.png";
import Creator from "../../assets/img/creator-theme.png";
import DCSuperHeroesLogo from "../../assets/img/dc-superheroes-logo.png";
import DCSuperHeroes from "../../assets/img/dc-superheroes-theme.png";
import DisneyLogo from "../../assets/img/disney-logo.png";
import Disney from "../../assets/img/disney-theme.png";
import DuploLogo from "../../assets/img/duplo-logo.png";
import Duplo from "../../assets/img/duplo-theme.png";
import FriendsLogo from "../../assets/img/friends-logo.png";
import Friends from "../../assets/img/friends-theme.png";
import HarryPotterLogo from "../../assets/img/harry-potter-logo.png";
import HarryPotter from "../../assets/img/harry-potter-theme.png";
import HiddenSideLogo from "../../assets/img/hidden-side-logo.png";
import HiddenSide from "../../assets/img/hidden-side-theme.png";
import IdeasLogo from "../../assets/img/ideas-logo.png";
import Ideas from "../../assets/img/ideas-theme.png";
import styled from "styled-components";

const ThemesGridStyled = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 50px auto 0;
  grid-template-columns: repeat(6, 200px);
  grid-template-rows: repeat(4, max-content);
  div {
    text-align: center;
  }
`;

const ThemesGrid = () => {
  return (
    <ThemesGridStyled>
      <div>
        <img src={ArchitectureLogo} />
        <img src={Architecture} />
      </div>
      <div>
        <img src={BrickHeadzLogo} />
        <img src={BrickHeadz} />
      </div>
      <div>
        <img src={CityLogo} />
        <img src={City} />
      </div>
      <div>
        <img src={ClassicLogo} />
        <img src={Classic} />
      </div>
      <div>
        <img src={CreatorLogo} />
        <img src={Creator} />
      </div>
      <div>
        <img src={DCSuperHeroesLogo} />
        <img src={DCSuperHeroes} />
      </div>
      <div>
        <img src={DisneyLogo} />
        <img src={Disney} />
      </div>
      <div>
        <img src={DuploLogo} />
        <img src={Duplo} />
      </div>
      <div>
        <img src={FriendsLogo} />
        <img src={Friends} />
      </div>
      <div>
        <img src={HarryPotterLogo} />
        <img src={HarryPotter} />
      </div>
      <div>
        <img src={HiddenSideLogo} />
        <img src={HiddenSide} />
      </div>
      <div>
        <img src={IdeasLogo} />
        <img src={Ideas} />
      </div>
      <div>
        <img src={ArchitectureLogo} />
        <img src={Architecture} />
      </div>
      <div>
        <img src={BrickHeadzLogo} />
        <img src={BrickHeadz} />
      </div>
      <div>
        <img src={CityLogo} />
        <img src={City} />
      </div>
      <div>
        <img src={ClassicLogo} />
        <img src={Classic} />
      </div>
      <div>
        <img src={CreatorLogo} />
        <img src={Creator} />
      </div>
      <div>
        <img src={DCSuperHeroesLogo} />
        <img src={DCSuperHeroes} />
      </div>
      <div>
        <img src={ArchitectureLogo} />
        <img src={Architecture} />
      </div>
      <div>
        <img src={BrickHeadzLogo} />
        <img src={BrickHeadz} />
      </div>
      <div>
        <img src={CityLogo} />
        <img src={City} />
      </div>
      <div>
        <img src={ClassicLogo} />
        <img src={Classic} />
      </div>
      <div>
        <img src={CreatorLogo} />
        <img src={Creator} />
      </div>
      <div>
        <img src={DCSuperHeroesLogo} />
        <img src={DCSuperHeroes} />
      </div>
    </ThemesGridStyled>
  );
};

export default ThemesGrid;
