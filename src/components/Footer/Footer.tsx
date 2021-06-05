import React, { useState } from "react";
import Logotype from "../Logotype";
import styled from "styled-components/macro";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldErrorMessage } from "../StyledUI/FieldErrorMessage";
import EmailInput from "../EmailInput";
import Modal from "../Modal";
import Label from "../../pages/ContactUs/Label";
import LegoSubscribeIcon from "../../assets/img/legohead-subscribe.jpeg";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

interface Inputs {
  emailFooter: string;
}

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 75px 210px max-content max-content;
  justify-content: space-between;
  padding: 75px 0;
  p {
    max-width: 150px;
    font-size: 14px;
  }
  h3 {
    margin-bottom: 35px;
  }
  li {
    text-transform: none;
    font-size: 16px;
    font-weight: 500;
    color: gray;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media ${DEVICE.tablet} {
    grid-template-columns: max-content 180px;
    justify-content: space-around;
    gap: 30px;
    padding: 75px 0 50px;
  }
  @media ${DEVICE.mobileL} {
    grid-template-columns: 250px;
    h3 {
      margin-bottom: 15px;
    }
  }
`;

const OkButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  color: white;
  font-size: 11px;
  border-radius: 50%;
  background-color: #d2070b;
  text-transform: uppercase;
  &:disabled {
    background-color: rgba(210, 7, 11, 0.5);
    cursor: not-allowed;
  }
  @media ${DEVICE.tablet} {
    width: 45px;
    height: 45px;
  }
`;

export const ModalMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vw;
  gap: 25px;
  padding: 50px;
  margin: 0 auto;
  background-color: white;
  color: black;
  text-align: center;
  h3 {
    font-size: 35px;
    font-weight: 500;
  }
  p {
    max-width: 70%;
    margin: 0 auto;
    font-size: 16px;
    color: gray;
    line-height: 1.4;
  }
`;

export const BackToSiteButton = styled.button`
  width: 65%;
  padding: 13px 0;
  border: none;
  outline: none;
  border-radius: 7px;
  background-color: #4fabc9;
  font-size: 15px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:active {
    transform: translateY(4px);
  }
`;

const SubmitDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
  } = useForm<Inputs>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setEmail(data.emailFooter);
    reset();
    setEmail("");
  };

  const validateField = (field: "emailFooter") => {
    return (
      Boolean(watch(field)) ||
      (!errors[field]?.message?.length && Boolean(watch(field)))
    );
  };

  const closeModalHandler = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (e instanceof KeyboardEvent && e.key !== "Escape") {
      return;
    }
    setModalIsOpen(false);
  };

  return (
    <FooterStyled>
      <Logotype />
      <div>
        <h3>Subscribe to lego shop emails</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label isValid={validateField("emailFooter")} labelText={"Email"}>
            <EmailInput
              name="emailFooter"
              id="emailFooter"
              register={register}
              autoComplete="off"
            />
          </Label>
          <FieldErrorMessage>{errors.emailFooter?.message}</FieldErrorMessage>
          <SubmitDescription>
            <p>For special offers and news weekly</p>
            <OkButton
              type="submit"
              id="okSubmit"
              onClick={() => setModalIsOpen(true)}
              disabled={!isValid}
            >
              Ok
            </OkButton>
          </SubmitDescription>
        </form>
        <Modal isOpen={modalIsOpen} close={closeModalHandler}>
          <ModalMessageWrapper>
            <img
              src={LegoSubscribeIcon}
              alt="Lego Minifigure Icon"
              width={250}
              height={188}
            />
            <h3>Thank You For Subscribing!</h3>
            <p>I've got your email address on the list!</p>
            <BackToSiteButton onClick={closeModalHandler}>
              Back to site
            </BackToSiteButton>
          </ModalMessageWrapper>
        </Modal>
      </div>
      <div>
        <h3>About us</h3>
        <ul>
          <li>About the LEGO Group</li>
          <li>News</li>
          <li>Our Responsibility</li>
          <li>Certifications</li>
          <li>LEGO Jobs</li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>Shipping and Returns</li>
          <li>Find Instructions</li>
          <li>Replacement Pants</li>
          <li>Products Recalls</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
