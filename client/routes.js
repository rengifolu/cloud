//client/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Pricing from './components/Pricing';
export const Routes = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/pricing' component={Pricing} />
    </Switch>
);
export default Routes;