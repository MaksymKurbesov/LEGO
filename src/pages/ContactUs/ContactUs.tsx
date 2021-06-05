import React, { useState } from "react";
import { PageTitle } from "../../components/StyledUI/PageTitle";
import SupportMinifigImg from "../../assets/img/contact-us.png";
import { CenteredContainer } from "../../components/StyledUI/CenteredContainer";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { FieldErrorMessage } from "../../components/StyledUI/FieldErrorMessage";
import EmailInput from "../../components/EmailInput";
import NameInput from "../../components/NameInput";
import Label from "./Label";
import MessageTextarea from "../../components/MessageTextarea";
import Modal from "../../components/Modal";
import LegoSuccessIcon from "../../assets/img/legohead-succesfully.png";
import {
  BackToSiteButton,
  ModalMessageWrapper,
} from "../../components/Footer/Footer";
import SendFormButton from "./SendFormButton";
import { DEVICE } from "../../utils/const/DEVICE_SIZE";

interface Inputs {
  name: string;
  email: string;
  textMessage: string;
}

enum Fields {
  name = "name",
  email = "email",
  textMessage = "textMessage",
}

type FieldType = Fields.name | Fields.email | Fields.textMessage;

const ContactUsContainer = styled(CenteredContainer)`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  textarea {
    display: block;
    width: 100%;
    height: 150px;
    resize: none;
    padding: 5px 0;
    outline: none;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font: inherit;
    font-weight: 400;
    transition: 0.3s;
  }
  img {
    height: 100%;
  }
  @media ${DEVICE.laptop} {
    gap: 0;
    justify-content: space-between;
  }
  @media ${DEVICE.tablet} {
    padding: 40px 0;
    flex-direction: column;
    img {
      width: 200px;
      margin-bottom: 30px;
    }
  }
`;

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media ${DEVICE.laptop} {
    width: 50%;
  }
  @media ${DEVICE.mobileL} {
    width: 75%;
  }
`;

const ContactUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
  } = useForm<Inputs>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    setFormData(data);
    reset();
  };

  const validateField = (field: FieldType) => {
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
    <>
      <PageTitle>Contact Us</PageTitle>
      <ContactUsContainer>
        <img src={SupportMinifigImg} alt="Lego Minifigure" width="300" />
        <ContactUsForm onSubmit={handleSubmit(onSubmit)}>
          <input autoComplete="false" hidden />

          <Label isValid={validateField(Fields.name)} labelText={"Name"}>
            <NameInput name={"name"} id={"name"} register={register} />
          </Label>
          <FieldErrorMessage>{errors.name?.message}</FieldErrorMessage>

          <Label isValid={validateField(Fields.email)} labelText={"Email"}>
            <EmailInput id="email" name="email" register={register} required />
          </Label>
          <FieldErrorMessage>{errors.email?.message}</FieldErrorMessage>

          <Label
            isValid={validateField(Fields.textMessage)}
            labelText={"Message"}
          >
            <MessageTextarea
              name={"textMessage"}
              id={"textMessage"}
              register={register}
            />
          </Label>
          <FieldErrorMessage>{errors.textMessage?.message}</FieldErrorMessage>

          <SendFormButton
            type="submit"
            onClick={() => setModalIsOpen(true)}
            disabled={!isValid}
          >
            Send
          </SendFormButton>

          <Modal isOpen={modalIsOpen} close={closeModalHandler}>
            <ModalMessageWrapper>
              <img
                src={LegoSuccessIcon}
                alt="Lego Minifigure Icon"
                width={125}
                height={125}
              />
              <h3>{`Thank you, ${formData.name}`}</h3>
              <span>{`Your email: ${formData.email}`}</span>
              <p>
                Your submission has been received. We will be in touch and
                contact you soon.
              </p>
              <BackToSiteButton onClick={closeModalHandler}>
                Back to site
              </BackToSiteButton>
            </ModalMessageWrapper>
          </Modal>
        </ContactUsForm>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
