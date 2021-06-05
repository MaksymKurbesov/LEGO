import React, { FC } from "react";
import MainPageSection from "../../../components/MainPageSection";
import Stormtrooper from "./Stormtrooper";

const Spotlight: FC = () => {
  return (
    <MainPageSection title="Spotlight on">
      <Stormtrooper />
    </MainPageSection>
  );
};

export default Spotlight;
