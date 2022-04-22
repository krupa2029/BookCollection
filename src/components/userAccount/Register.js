import React from "react";
import classes from "./Login.module.css";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";

export const Register = () => {
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
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "Should be 3 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required!"),

    lastname: Yup.string()
      .min(2, "Should be 5 character long")
      .max(15, "should not exceed 15 characters")
      .required("Required!"),

    email: Yup.string().email("Invalid Email Format!").required("Required!"),

    password: Yup.string()
      .required("Please enter your password!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
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
          <h3>Register</h3>
          <Form>
            <MyTextField name="firstname" type="text" label="First Name" />
            <MyTextField name="lastname" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Email" />
            <MyTextField name="password" type="password" label="Password" />
            <MyTextField name="confirmPassword" type="password" label="Confirm Password" />

            <div className={classes.actions}>
              <button type="submit" disabled={!props.isValid}>
                Register
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
