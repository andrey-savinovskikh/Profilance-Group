import React from 'react';
import Input from "../UI/Input/Input";
import { useFormik} from "formik";
import Label from "../UI/Label/Label";
import classes from './EventsSearch.module.scss';
import PropTypes from "prop-types";

const EventsSearch = ({onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      onSubmit(values.search)
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classes.form}
    >
      <Label htmlFor="search">Поиск по новостям</Label>
      <Input
        id="search"
        name="search"
        type="text"
        onChange={(e) => {
          formik.handleChange(e)
          formik.submitForm()
        }}
        value={formik.values.title}
      />
    </form>
  )
}

EventsSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default EventsSearch
