import { Link } from "react-router-dom";

import { useLanguageContext } from "@/store/langContext";
import NavList from "@/components/NavList/NavList";
import Squares from "@/icons/Squares";

import logo from "@/assets/logo.webp";

import { homeNavContent } from "@/contens/home";

import styles from "./NavBar.module.scss";

import NavLink from "../UI/NavLink/NavLink";

interface NavBarProps {
  setIsAsideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ setIsAsideMenu }) => {
  const lang = useLanguageContext().language;

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles["image-container"]}>
        <img src={logo} alt="A brain with text 'Smarter'" />
      </Link>
      <NavList />
      <NavLink actionLink href="/login" className={styles.btn}>
        {homeNavContent.login[lang]}
      </NavLink>
      <button
        className={styles["menu-btn"]}
        onClick={() => setIsAsideMenu(true)}
      >
        <Squares className={styles.icon} />
      </button>
    </nav>
  );
};

export default NavBar;
