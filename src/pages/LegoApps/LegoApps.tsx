import React, { FC } from "react";
import styled from "styled-components/macro";
import Rating from "./Rating";
import LinkedButton from "../../components/LinkedButton";
import { LEGO_APPS_MOCK } from "../../utils/const/LEGO_APPS_MOCK";
import { LegoAppsItem } from "./LegoAppsItem";
import { PageTitle } from "../../components/StyledUI/PageTitle";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

const LearnMoreButton = styled(LinkedButton)`
  display: block;
  margin-top: 30px;
  @media ${DEVICE.laptop} {
    margin-top: 0;
  }
`;

const LegoApps: FC = () => {
  return (
    <>
      <PageTitle>Lego Apps</PageTitle>
      <ul>
        {LEGO_APPS_MOCK.map((app, i) => (
          <LegoAppsItem key={i}>
            <div>
              <h2>{app.title}</h2>
              <LearnMoreButton
                className="legoapp-learn-more"
                href="/#"
                fill="lightblue"
                label="learn more"
              />
            </div>
            <img src={app.logo} alt="Логотип приложения" width={200} />
            <Rating rating={app.rating} />
          </LegoAppsItem>
        ))}
      </ul>
    </>
  );
};

export default LegoApps;
