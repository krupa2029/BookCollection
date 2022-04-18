import React from "react";
import classes from "./Login.module.css";

export const Login = () => {
  return (
    <section className={classes.auth}>
      <h3>Login</h3>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};
