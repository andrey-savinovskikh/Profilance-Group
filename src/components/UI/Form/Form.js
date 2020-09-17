import React from 'react';
import classes from './Form.module.scss';
import PropTypes from "prop-types";

const Form = ({title, error, children, ...props}) => {
  return (
    <form
      className={classes.form}
      {...props}
    >
      {
        title &&
          <div className={classes.title}>{title}</div>
      }

      <div className={classes.body}>
        {children}
      </div>

      {
        error &&
          <div className={classes.error}>{error}</div>
      }
    </form>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  props: PropTypes.object
};

export default Form;
