import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

//componests imports
import SignIn from "./pages/SignIn"
import HomeSystem from "./pages/HomeSystem"
import Cars from './pages/Cars'
import Maps from './pages/Maps'
import LogOut from './pages/LogOut'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/login" component={SignIn} />
      <Route path="/logout" component={LogOut} />
      <PrivateRoute exact path="/app" component={HomeSystem} />
      <PrivateRoute exact path="/app/cars" component={Cars} />
      <PrivateRoute exact path="/app/location" component={Maps} />
      <PrivateRoute exact path="/app/consumption" component={HomeSystem} />
      <PrivateRoute exact path="/app/detran-service" component={HomeSystem} />
      <PrivateRoute exact path="/app/report" component={HomeSystem} />
     
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;