import { Link } from "react-router-dom";

import logoURL from "../../../assets/logo1.png";
import Button from "../../UI/Button/Button";

import classes from "../Header/Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src={logoURL} alt="Smarter Logo" />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Button className={classes["logout-btn"]}>Вийти</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
