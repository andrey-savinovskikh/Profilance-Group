import React from 'react';
import classes from './TextArea.module.scss';
import classNames from 'classnames';
import PropTypes from "prop-types";

const TextArea = ({error, ...props}) => {
  const classesArr = [
    classes.textarea,
    classes[`textarea--${props.type}`],
    error ? classes[`textarea--error`] : null
  ]

  return (
    <textarea
      className={classNames(classesArr)}
      {...props}
    />
  )
}

TextArea.propTypes = {
  error: PropTypes.string,
  props: PropTypes.object
}

export default TextArea
