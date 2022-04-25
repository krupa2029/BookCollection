import { Formik, Form, useField } from "formik";
import React from "react";
import classes from "./Login.module.css";
import * as Yup from "yup";

export const Login = () => {
  
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
          <h3>Login</h3>
          <Form>
            <MyTextField name="email" type="email" label="Email" />
            <MyTextField name="password" type="password" label="Password" />

            <div className={classes.actions}>
              <button type="submit" disabled={!props.isValid}>
                Login
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
