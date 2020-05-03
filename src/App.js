import React from "react";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const Global = createGlobalStyle`
${reset};
body{
    background-color:#ecf0f1;
}
`;

function App() {
  return (
    <>
      <Global />
      <h1>Hello</h1>
    </>
  );
}

export default App;
