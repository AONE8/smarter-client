import { Link } from "react-router-dom";

import logoURL from "@/assets/logo.webp";

import ChevronDown from "@/icons/ChevronDown";
import UserNav from "@/components/UI/UserNav/UserNav";

import styles from "./Header.module.scss";

interface HeaderProps {
  username: string;
  menuVisible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAsideVisble: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  username,
  menuVisible,
  setMenuVisible,
  setAsideVisble,
}) => {
  return (
    <header className={styles.header}>
      <button
        className={styles["aside-btn"]}
        onClick={() => setAsideVisble((prev) => !prev)}
      >
        <span>{username.charAt(0).toUpperCase()}</span>{" "}
      </button>
      <Link to="/" className={styles.logo}>
        <img src={logoURL} alt="Smarter Logo" />
      </Link>
      <UserNav className={styles.nav} />
      <button
        onClick={() => setMenuVisible((prev) => !prev)}
        className={`${styles["menu-btn"]} ${menuVisible ? styles.active : ""}`}
      >
        <ChevronDown />
      </button>
    </header>
  );
};

export default Header;
