//client/routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Coronavirus from "./components/Coronavirus";
import SigIn from "./components/SigIn";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Userloged from "./components/Userloged";
import withAuth from "./components/withAuth";

import { Provider } from 'react-redux'
import store from './store'

export const Routes = () => (
  <Switch>
    <Provider  store={store}>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/coronavirus" component={Coronavirus} />
    <Route exact path="/sigin" component={SigIn} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/blog" component={Blog} />
    {/* ruta protegidas por token */}
    <Route exact path="/userloged" component={withAuth(Userloged)} />
    </Provider>
  </Switch>
);
export default Routes;
