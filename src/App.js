import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./containers/HomePage/HomePage";
import Events from "./containers/Events/Events";
import Menu from "./components/Menu/Menu";
import Logout from "./components/Logout/Logout";
import Authentication from "./components/Authentication/Authentication";
import {auth, logout} from "./actions/auth";
import {show} from "redux-modal";
import classes from './App.module.scss';
import PropTypes from "prop-types";

const App = ({isAuthenticated, show, logout, auth, authError}) => {
  const routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/events" exact component={Events} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <div className={classes.menu}>
          <Menu/>
        </div>

        <div className={classes.auth}>
          {
            isAuthenticated
              ? <Logout
                  logout={logout}
                />
              : <Authentication
                  show={show}
                  auth={auth}
                  authError={authError}
                />
          }
        </div>
      </header>

      <div className={classes.content}>
        <main className={classes.main}>
          {routes}
        </main>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    authError: state.auth.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    show: (name, props) => dispatch(show(name, props)),
    auth: (email, password) => dispatch(auth(email, password)),
    logout: () => dispatch(logout())
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  authError: PropTypes.string,
  logout: PropTypes.func,
  show: PropTypes.func,
  auth: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
