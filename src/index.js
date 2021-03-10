import React from "react";
import ReactDOM from "react-dom";
import Fonts from "./assets/fonts/";
import Header from "./components/Header/Header";
import HeroImg from "./components/HeroImage/HeroImage";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-transform: uppercase;
  }

  body {
    font: 18px "CeraPro";
    line-height: 1.2;
    padding: 0 50px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <Fonts />
      <GlobalStyle />
      <Header />
      <HeroImg />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
