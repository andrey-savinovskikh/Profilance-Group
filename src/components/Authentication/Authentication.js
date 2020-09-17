import React from 'react';
import Button from "../UI/Button/Button";
import classes from './Authentication.module.scss';
import SignInModal from "../../containers/SignInModal/SignInModal";
import PropTypes from 'prop-types';

const Authentication = ({show, auth, authError}) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.button}>
        <Button
          onClick={() => show('SignInModal')}
        >
          Войти
        </Button>

        <SignInModal
          auth={auth}
          authError={authError}
        />
      </div>
    </div>
  )
}

Authentication.propTypes = {
  show: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
  authError: PropTypes.string
}

export default Authentication


