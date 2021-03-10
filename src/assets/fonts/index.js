import { createGlobalStyle } from "styled-components";
import CeraProBold from "./CeraPro-Bold.woff2";
import CeraProMedium from "./CeraPro-Medium.woff2";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: "CeraPro";
    font-weight: 400;
    src: url(${CeraProMedium}) format('woff2');
  }
  @font-face {
    font-family: "CeraPro";
    font-weight: 600;
    src: url(${CeraProBold}) format('woff2');
  }
`;

export default Fonts;
