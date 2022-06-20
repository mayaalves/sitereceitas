import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Main1 from "./Components/Main1";
import Main2 from "./Components/Main2";
import Main3 from "./Components/Main3";
import Footer from "./Components/Footer";
import Creditos from "./Components/Creditos";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Main1 />
        <Main2 />
        <Main3 />
        <Footer />
        <Creditos />
      </>
    );
  }
}
