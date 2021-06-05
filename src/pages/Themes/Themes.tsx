import React, { FC } from "react";
import ThemesList from "./ThemesList";
import { PageTitle } from "../../components/StyledUI/PageTitle";

const Themes: FC = () => {
  return (
    <>
      <PageTitle>THEMES</PageTitle>
      <ThemesList />
    </>
  );
};

export default Themes;
