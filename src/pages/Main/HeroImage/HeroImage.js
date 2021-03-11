import React from "react";
import HeroImg from "../../../assets/img/hero-background.jpg";
import MarvelLogoImg from "../../../assets/icons/marvel-logo.svg";
import LinkedButton from "./LinkedButton";
import styled from "styled-components";

const HeroImageStyled = styled.div`
  color: white;
  position: relative;
  img {
    pointer-events: none;
  }
  p {
    position: absolute;
  }

  p:nth-child(2) {
    max-width: 550px;
    top: 300px;
    font-size: 60px;
    font-weight: 600;
    left: 250px;
  }
  p:nth-child(3) {
    max-width: 300px;
    text-transform: none;
    bottom: 250px;
    left: 35%;
  }
`;

const MarvelLogo = styled.img`
  padding-top: 10px;
`;

const HeroImage = () => {
  return (
    <HeroImageStyled>
      <img src={HeroImg} width="100%" alt="Промо-картинка" />
      <p>
        Epic new sets from the <br />
        <MarvelLogo src={MarvelLogoImg} width="250" alt="Логотип Marvel" />
        <br />
        universe
      </p>

      <p>
        Help your young superheroes save the world with all new LEGO Marvel sets
      </p>
      <LinkedButton href="/#" label="Learn More" />
    </HeroImageStyled>
  );
};

export default HeroImage;
