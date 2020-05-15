//client/routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Coronavirus from "./components/Coronavirus";
import SigIn from "./components/SigIn";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Userloged from "./components/usuario/Userloged";
import withAuth from "./components/withAuth";

import Agenda from "./components/usuario/Agenda";
import Archivo from "./components/usuario/Archivo";
import Imagen from "./components/usuario/imagen/Imagen";
import Nota from "./components/usuario/Nota";
import Video from "./components/usuario/Video";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/coronavirus" component={Coronavirus} />
    <Route exact path="/sigin" component={SigIn} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/blog" component={Blog} />
    {/* ruta protegidas por token */}
    <Route exact path="/userloged" component={withAuth(Userloged)} />

    <Route exact path="/diary" component={Agenda} />
    <Route exact path="/files" component={Archivo} />
    <Route exact path="/images" component={Imagen} />
    <Route exact path="/notes" component={Nota} />
    <Route exact path="/videos" component={Video} />
  </Switch>
);
export default Routes;
