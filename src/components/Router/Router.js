import React, { Component } from "react";

import PropTypes from "prop-types";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import HomePage from "../HomePage";
import AdminPage from "../AdminPage";
import UserPage from "../UserPage";
import NotFoundPage from "../NotFoundPage";
import Downloads from "../../pages/downloads";
import About from "../../pages/about";
import Restricted from "../../pages/restricted";
import Multiplayer from "../../pages/multiplayer";
import Gallery from "../../pages/gallery";

class Router extends Component {
  render() {
    // Properties
    const { user, roles, bar } = this.props;

    // Functions
    const { openSnackbar } = this.props;

    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        {bar}
        <Switch>
          <Route path="/" exact>
            <HomePage user={user} openSnackbar={openSnackbar} />
          </Route>

          <Route path="/admin">
            {user && roles.includes("admin") ? (
              <AdminPage />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/user/:userId">
            {user ? <UserPage /> : <Redirect to="/" />}
          </Route>
          <Route path='/about' component={About} />
          <Route path='/restricted' component={Restricted} />
          <Route path='/multiplayer' component={Multiplayer} />
          <Route path='/ailexgram' component = {Gallery} />
          <Route path='/downloads'>
            {user ? <Downloads/> : < Redirect to='/restricted' /> }
            </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  // Properties
  user: PropTypes.object,
  roles: PropTypes.array.isRequired,
  bar: PropTypes.element,

  // Functions
  openSnackbar: PropTypes.func.isRequired,
};

export default Router;
