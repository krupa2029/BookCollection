import { Formik, useFormik } from "formik";
import React from "react";
import classes from "./Login.module.css";
import * as Yup from "yup";

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <section className={classes.auth}>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <div className={classes.actions}>
              <button type="submit" disabled={!isValid}>Login</button>
            </div>
          </form>
        </section>
      )}
    </Formik>
  );
};
