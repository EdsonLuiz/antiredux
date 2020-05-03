import React from "react";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import AppPresenter from "./AppPresenter";

const Global = createGlobalStyle`
${reset};
body{
    background-color:#ecf0f1;
}
`;

const AppContainer = () => {
  return (
    <>
      <Global />
      <h1>AppContainer</h1>
      <AppPresenter />
    </>
  );
};

export default AppContainer;
