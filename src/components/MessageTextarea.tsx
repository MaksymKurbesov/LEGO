import React from "react";

interface MessageTextareaProps {
  name: string;
  id: string;
  register: any;
}

const MessageTextarea = ({ name, id, register }: MessageTextareaProps) => {
  return (
    <textarea
      {...register(name, {
        required: "Message field is required",
        maxLength: {
          value: 200,
          message: "The max length of 200 characters is reached",
        },
      })}
      id={id}
      name={name}
    />
  );
};

export default MessageTextarea;
