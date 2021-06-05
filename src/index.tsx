import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Themes from "./pages/Themes";
import Theme from "./pages/Theme";
import Minifigures from "./pages/Minifigures";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import { Provider } from "react-redux";
import { store } from "./store";
import "./assets/fonts/fonts.css";
import LegoApps from "./pages/LegoApps";
import ContactUs from "./pages/ContactUs";
import { DEVICE } from "./utils/const/DEVICE_SIZE";
import MyAccount from "./pages/MyAccount";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
  }
  html {
    height: 100%;
    font-size: 18px;
    font-family: "CeraPro";
    line-height: 1.2;
  }
  
  body {
    padding: 0 50px;
    @media ${DEVICE.tablet} {
      padding: 0 20px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/themes" component={Themes} exact />
            <Route path="/themes/:theme" component={Theme} />
            <Route path="/minifigures" component={Minifigures} />
            <Route path="/lego-apps" component={LegoApps} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/my-account" component={MyAccount} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
