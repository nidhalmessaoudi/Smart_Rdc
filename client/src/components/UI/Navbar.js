import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  const authState = useSelector((state) => state.auth);
  console.log("hello");
  function renderAuthMarkup() {
    if (authState.isLoggedIn) {
      return <li>{authState.user.name}</li>;
    }
    return (
      <>
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
        <Link to="/login">
          <li>Log In</li>
        </Link>
      </>
    );
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-brand"]}>
        <Link to="/">
          <h2>Smart Rdc</h2>
        </Link>
      </div>
      <ul className={classes["navbar-items"]}>
        <Link to="/">
          <li>Home</li>
        </Link>
        {renderAuthMarkup()}
      </ul>
    </nav>
  );
}

export default Navbar;
