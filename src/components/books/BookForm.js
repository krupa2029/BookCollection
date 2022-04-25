import React from "react";
import { Formik, Form, useField } from "formik";
import classes from "../userAccount/Login.module.css";
import * as Yup from "yup";


export const BookForm = () => {
  const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
      <div className={classes.control}>
        <label>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={classes.error}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const initialValues = {
    bookTitle: "",
    author: "",
  };

  const validationSchema = Yup.object({
    bookTitle: Yup.string()
      .min(2, "Should be 3 character long")
      .required("Required!"),

      author: Yup.string()
      .min(2, "Should be 5 character long")
      .required("Required!"),


  });

  const onSubmit = (values, actions) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
      isInitialValid={false}
    >
      {(props) => (
        <section className={classes.auth}>
          <h3>Add Book</h3>
          <Form>
            <MyTextField name="bookTitle" type="text" label="Book Title" />
            <MyTextField name="author" type="text" label="Author" />
            {/* <MyTextField name="price" type="number" label="Price" /> */}

            <div className={classes.actions}>
              <button type="submit" disabled={!props.isValid}>
                Add
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
