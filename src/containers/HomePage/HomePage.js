import React from 'react';
import classes from './HomePage.module.scss';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const HomePage = ({isAuthenticated, username}) => {
  return (
    <div className={classes.content}>
      <h1>Главная</h1>
      <p>Привет, {isAuthenticated ? username : 'Гость'}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.username
  };
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
  username: PropTypes.string,
}

export default connect(
  mapStateToProps,
)(HomePage);


