export const DEVICE_SIZE = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const DEVICE = {
  mobileS: `(max-width: ${DEVICE_SIZE.mobileS})`,
  mobileM: `(max-width: ${DEVICE_SIZE.mobileM})`,
  mobileL: `(max-width: ${DEVICE_SIZE.mobileL})`,
  tablet: `(max-width: ${DEVICE_SIZE.tablet})`,
  laptop: `(max-width: ${DEVICE_SIZE.laptop})`,
  laptopL: `(max-width: ${DEVICE_SIZE.laptopL})`,
  desktop: `(max-width: ${DEVICE_SIZE.desktop})`,
};
