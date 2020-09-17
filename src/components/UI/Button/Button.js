import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Button = ({children, color, ...props}) => {
  const classesArr = [
    classes.button,
    color ? classes[`button--${color}`] : null
  ]

  return (
    <button
      className={classNames(classesArr)}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  props: PropTypes.object
}

export default Button
