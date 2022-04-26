import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.currentUser;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Bookiesh</div>
      <nav className={classes.nav}>
        <ul>
          {isLoggedIn && (
            <li>
              <Link to="/">My Books</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={authCtx.logout}>Logout</button>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
