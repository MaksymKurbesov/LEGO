import React from "react";
import ReactDOM from "react-dom";
import Fonts from "./assets/fonts/";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Themes from "./pages/Themes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/themes">
          <Themes />
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
