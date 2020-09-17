import React from 'react';
import classes from './Label.module.scss';
import PropTypes from "prop-types";

const Label = ({children, ...props}) => {
  return (
    <label
      className={classes.label}
      {...props}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  props: PropTypes.object
};

export default Label
