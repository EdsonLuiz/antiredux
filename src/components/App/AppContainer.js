import React from "react";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

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
    </>
  );
};

export default AppContainer;
