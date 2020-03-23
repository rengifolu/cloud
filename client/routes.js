//client/routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Coronavirus from "./components/Coronavirus";
import SigIn from "./components/SigIn";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/coronavirus" component={Coronavirus} />
    <Route exact path="/sigin" component={SigIn} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/blog" component={Blog} />
  </Switch>
);
export default Routes;
