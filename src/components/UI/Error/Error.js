import React from 'react';
import classes from './Error.module.scss';
import PropTypes from "prop-types";

const Error = ({children, ...props}) => {
  return (
    <span
      className={classes.error}
      {...props}
    >
      {children}
    </span>
  )
}

Error.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  props: PropTypes.object
}

export default Error
