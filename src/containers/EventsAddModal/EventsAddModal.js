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
import classes from './EventsAddModal.module.scss';
import TextArea from "../../components/UI/TextArea/TextArea";
import PropTypes from "prop-types";

const EventsAddSchema = Yup.object().shape({
  title: Yup.string()
    .required('Введите заголовок новости'),
  text: Yup.string()
    .required('Введите текст новости'),
});

const EventsAddModal = ({onSubmit, error, show, handleHide}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    validationSchema: EventsAddSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: values => {
      onSubmit(values.title, values.text);
    },
  });

  return (
    <CustomModal
      isOpen={show}
      onRequestClose={handleHide}
    >
      <Form
        onSubmit={formik.handleSubmit}
        error={error}
        title='Добавить новость'
      >
        <div className={classes.row}>
          <Label htmlFor="username">Заголовок новости</Label>
          <Input
            id="title"
            name="title"
            type="text"
            error={formik.errors.title}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {
            formik.errors.title &&
            <Error>{formik.errors.title}</Error>
          }
        </div>

        <div className={classes.row}>
          <Label htmlFor="text">Текст новости</Label>
          <TextArea
            id="text"
            name="text"
            error={formik.errors.text}
            onChange={formik.handleChange}
            value={formik.values.text}
          />
          {
            formik.errors.text &&
            <Error>{formik.errors.text}</Error>
          }
        </div>

        <div className={classes.buttons}>
          <Button type="submit">Добавить новость</Button>
        </div>
      </Form>
    </CustomModal>
  );
};

EventsAddModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  show: PropTypes.bool,
  handleHide: PropTypes.func,
}

export default connectModal({ name: 'EventsAddModal', getModalState: (state) => state.modal })(EventsAddModal)