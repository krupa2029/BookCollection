import React from "react";
import classes from './Login.module.css';

export const Register = () => {
  return (
    <section className={classes.auth}>
      <h3>Register</h3>
      <form >
        <div className={classes.control}>
          <label htmlFor="email">First Name</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Last Name</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};
