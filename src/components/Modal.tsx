/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react";
import styled from "styled-components";
import useScrollbarSize from "../hooks/useScrollBarSize";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  close: any;
  isEmbededFrame?: boolean;
}

interface IframeOverlayProps {
  isEmbededFrame: boolean;
}

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  color: white;
`;

const IframeOverlay = styled.div<IframeOverlayProps>`
  flex-basis: ${(props) => (props.isEmbededFrame ? "100%" : "")};
`;

const Modal: FC<ModalProps> = ({
  isOpen,
  close,
  isEmbededFrame = false,
  children,
}): any => {
  const { width } = useScrollbarSize();
  const rootElement =
    document.querySelector("#root") || document.createElement("div");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${width}px`;
      window.addEventListener("keydown", close);
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.paddingRight = ``;
      window.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClick={close}>
      <IframeOverlay
        isEmbededFrame={isEmbededFrame}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </IframeOverlay>
    </ModalOverlay>,
    rootElement
  );
};

export default Modal;
