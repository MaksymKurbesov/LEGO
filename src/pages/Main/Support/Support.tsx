import React, { FC } from "react";
import SupportImg from "../../../assets/img/support.png";
import LinkedButton from "../../../components/LinkedButton";
import styled from "styled-components/macro";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

const SupportStyled = styled.div`
  display: flex;
  @media ${DEVICE.tablet} {
    flex-direction: column;
    align-items: center;
    img {
      width: 75%;
    }
    @media ${DEVICE.tablet} {
      img {
        width: 100%;
      }
    }
  }
`;

const SupportInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  background-color: #f7f7f7;
  h3 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: clamp(1.3rem, 0.2rem + 3.5vw, 3.5rem);
  }
  p {
    max-width: 300px;
    font-size: clamp(0.7rem, 0.6rem + 0.6vw, 1rem);
  }
  @media ${DEVICE.tablet} {
    width: 100%;
    padding: 35px;
  }
`;

const ContactButton = styled(LinkedButton)`
  margin-bottom: 50px;
`;

const Support: FC = () => {
  return (
    <SupportStyled>
      <img src={SupportImg} alt="Тех.поддержка" width="50%" />
      <SupportInfo>
        <h3>Need support?</h3>
        <ContactButton
          className="support-learn-more"
          label="Contact us"
          href="/contact-us"
          fill="lightblue"
        />
        <p>Our dedicated LEGO experts are here to help.</p>
      </SupportInfo>
    </SupportStyled>
  );
};

export default Support;
