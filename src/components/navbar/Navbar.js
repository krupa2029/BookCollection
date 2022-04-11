import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bookiesh</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/mybooks" activeClassName={classes.active}>
              My Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName={classes.active}>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
