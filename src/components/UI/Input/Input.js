import React from 'react';
import classes from './Input.module.scss';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Input = ({error, ...props}) => {
  const classesArr = [
    classes.input,
    classes[`input--${props.type}`],
    error ? classes[`input--error`] : null
  ]

  return (
    <input
      className={classNames(classesArr)}
      {...props}
    />
  )
}

Input.propTypes = {
  error: PropTypes.string,
  props: PropTypes.object
}

export default Input
