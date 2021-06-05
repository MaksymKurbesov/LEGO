import React from "react";
import { InputField } from "./StyledUI/InputField";

interface EmailInputProps {
  name: string;
  id: string;
  register: any;
  required?: boolean;
  autoComplete?: string;
}

const EmailInput = ({
  name,
  id,
  register,
  required,
  autoComplete,
}: EmailInputProps) => {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return (
    <InputField
      {...register(name, {
        required: {
          value: true,
          message: required ? "Email field is required" : "",
        },
        pattern: {
          value: emailRegExp,
          message:
            "You have entered an invalid e-mail address. Example: email@gmail.com",
        },
      })}
      id={id}
      autoComplete={autoComplete || "new-password"}
      type="email"
    />
  );
};

export default EmailInput;
