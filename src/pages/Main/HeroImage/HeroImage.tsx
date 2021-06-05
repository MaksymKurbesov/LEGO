import React, { FC, useEffect, useRef, useState } from "react";
import HeroImg from "../../../assets/img/hero-background.jpg";
import MarvelLogoImg from "../../../assets/icons/marvel-logo.svg";
import LinkedButton from "../../../components/LinkedButton";
import styled from "styled-components/macro";
import { EpicNewSets } from "./EpicNewSets";
import { HelpYourSuperHeroes } from "./HelpYourSuperHeroes";
import { calculateBgPosition } from "../../../utils/calculateBgPosition";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

interface HeroImageStyledProps {
  bgPosition: number;
}

const HeroImageStyled = styled.div.attrs<HeroImageStyledProps>((props) => {
  return {
    style: {
      backgroundPositionY: `${props.bgPosition}px`,
    },
  };
})<HeroImageStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  height: 60vw;
  margin-bottom: 75px;
  color: white;
  white-space: pre-wrap;
  background-image: url(${HeroImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  @media ${DEVICE.tablet} {
    align-items: flex-start;
    padding: 7%;
    margin-bottom: 40px;
  }
`;

const LearnMoreButton = styled(LinkedButton)`
  @media ${DEVICE.tablet} {
    font-size: 12px;
    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

const HeroImage: FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [bgPosition, setBgPosition] = useState<number>(0);

  useEffect(() => {
    if (!backgroundRef.current) {
      return;
    }

    const backgroundNode = backgroundRef.current;
    const offsetTopBackground = backgroundNode.offsetTop;
    const doParallax = () => {
      setBgPosition(calculateBgPosition(offsetTopBackground));
    };
    doParallax();

    const callbackObserver = (entries: any) => {
      const [entry] = entries;
      entry.isIntersecting
        ? window.addEventListener("scroll", doParallax)
        : window.removeEventListener("scroll", doParallax);
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(callbackObserver, options);
    observer.observe(backgroundNode);

    return () => {
      observer.unobserve(backgroundNode);
      window.removeEventListener("scroll", doParallax);
    };
  }, [backgroundRef]);

  return (
    <>
      <HeroImageStyled ref={backgroundRef} bgPosition={bgPosition}>
        <EpicNewSets>
          {`Epic new sets\nfrom the`}
          <img src={MarvelLogoImg} width="40%" alt="Логотип Marvel" />
          universe
        </EpicNewSets>
        <HelpYourSuperHeroes>
          Help your young superheroes save the world with all new LEGO Marvel
          sets
        </HelpYourSuperHeroes>
        <LearnMoreButton
          className="hero-learn-more"
          label="Learn More"
          href="/#"
          fill="white"
        />
      </HeroImageStyled>
    </>
  );
};

export default HeroImage;
