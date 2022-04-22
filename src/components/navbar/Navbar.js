import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bookiesh</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">
              My Books
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
