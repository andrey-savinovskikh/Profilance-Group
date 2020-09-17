import React from 'react';
import CustomModal from "../../components/UI/CustomModal/CustomModal";
import {connectModal} from "redux-modal";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Form from "../../components/UI/Form/Form";
import Label from "../../components/UI/Label/Label";
import Error from "../../components/UI/Error/Error";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from './SignInModal.module.scss';
import PropTypes from "prop-types";

const SignInSchema = Yup.object().shape({
   username: Yup.string()
     .min(5, 'Минимальная длина имени пользователя - 5 символов')
     .max(25, 'Максимальная длина имени пользователя - 25 символов')
     .required('Заполните поле Имя пользователя'),
   password: Yup.string()
     .min(5, 'Минимальная длина пароля - 5 символов')
     .required('Заполните поле Пароль'),
 })

const SignInModal = ({auth, authError, show, handleHide}) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: values => {
      auth(values.username, values.password);
    },
  })

  return (
    <CustomModal
      isOpen={show}
      onRequestClose={handleHide}
    >
      <Form
        onSubmit={formik.handleSubmit}
        error={authError}
        title='Войти'
      >
        <div className={classes.row}>
          <Label htmlFor="username">Имя пользователя</Label>
          <Input
            id="username"
            name="username"
            type="text"
            error={formik.errors.username}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {
            formik.errors.username &&
            <Error>{formik.errors.username}</Error>
          }
        </div>

        <div className={classes.row}>
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            name="password"
            type="text"
            error={formik.errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {
            formik.errors.password &&
              <Error>{formik.errors.password}</Error>
          }
        </div>

        <div className={classes.buttons}>
          <Button type="submit">Войти</Button>
        </div>
      </Form>
    </CustomModal>
  );
};

SignInModal.propTypes = {
  auth: PropTypes.func.isRequired,
  authError: PropTypes.string,
  show: PropTypes.bool,
  handleHide: PropTypes.func,
}

export default connectModal({ name: 'SignInModal', getModalState: (state) => state.modal })(SignInModal)
