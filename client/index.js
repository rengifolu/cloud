//client/index.js
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Routes from "./routes";
import Barra from "../client/components/Barra";

import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Barra></Barra>
      <Routes />
    </HashRouter>
  </Provider>,

  document.getElementById("root")
);

if (module.hot) {
  console.log("Hot reloaded");
  module.hot.accept("./components/App", () => {
    // Do something with the updated library module...
    const NextApp = require("./components/App").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}
