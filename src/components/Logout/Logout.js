import React from 'react';
import classes from './Logout.module.scss';
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";

const Logout = ({logout}) => {
  return (
    <div className={classes.logout}>
      <Button
        onClick={() => logout()}
      >
        Выход
      </Button>
    </div>
  )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
}

export default Logout
