import React from "react";
import { InputField } from "./StyledUI/InputField";

interface NameInputProps {
  name: string;
  id: string;
  register: any;
}

const NameInput = ({ name, id, register }: NameInputProps) => {
  return (
    <InputField
      id={id}
      autoComplete={"new-password"}
      {...register(name, {
        required: `Name field is required`,
        maxLength: {
          value: 20,
          message: "Maximum length of this field must be less than 20 symbols",
        },
      })}
    />
  );
};

export default NameInput;
