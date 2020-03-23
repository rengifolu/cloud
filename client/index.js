//client/index.js
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Routes from "./routes";
import Barra from "../client/components/Barra";

ReactDOM.render(
  <HashRouter>
    <Barra></Barra>
    <Routes />
  </HashRouter>,
  document.getElementById("root")
);

if (module.hot) {
  console.log("Hot reloaded");
  module.hot.accept();
}
