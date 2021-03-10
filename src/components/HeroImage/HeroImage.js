import React from "react";
import HeroImg from "../../assets/img/hero-background.jpg";
import MarvelLogo from "../../assets/icons/marvel-logo.svg";
import styled from "styled-components";

const HeroImageStyled = styled.div`
  color: white;
  font-size: 60px;
  font-weight: 600;
  position: relative;
  p {
    position: absolute;
  }

  p:nth-child(2) {
    max-width: 550px;
    top: 300px;
    left: 150px;
  }
`;

const HeroImage = () => {
  return (
    <HeroImageStyled>
      <img src={HeroImg} width="100%" alt="Промо-картинка" />
      <p>
        Epic new sets from the <br />
        <img
          src={MarvelLogo}
          width="250"
          alt="Логотип Marvel"
          style={{ paddingTop: 10 }}
        />
        <br />
        universe
      </p>

      <p>
        Help your young superheroes save the world with all new LEGO Marvel sets
      </p>
      <a href="/#">Learn More</a>
    </HeroImageStyled>
  );
};

export default HeroImage;
