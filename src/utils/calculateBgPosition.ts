import { DEVICE_SIZE } from "./const/DEVICE_SIZE";

export const calculateBgPosition = (bgOffsetTop: number = 90) => {
  const clientWidth = document.documentElement.clientWidth;
  const customSize = 1250;
  let WINDOW_OFFSET_DIVIDER = 3;
  let BG_OFFSET_SUBTRACT = 100;

  if (clientWidth < customSize) {
    BG_OFFSET_SUBTRACT = 170;
  }

  if (clientWidth < parseInt(DEVICE_SIZE.laptop)) {
    BG_OFFSET_SUBTRACT = 100;
  }

  return (
    window.pageYOffset / WINDOW_OFFSET_DIVIDER -
    (bgOffsetTop - BG_OFFSET_SUBTRACT)
  );
};
