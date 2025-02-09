import NavList from "../NavList/NavList";
import { Link } from "react-router-dom";

import logo from "../../assets/logo1.png";
import classes from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={classes.navigation}>
      <Link to="/" className={classes["image-container"]}>
        <img src={logo} alt="A brain with text 'Smarter'" />
      </Link>
      <NavList />
      <Link to="/signup" className={classes["btn"]}>
        Увійти
      </Link>
    </nav>
  );
}
