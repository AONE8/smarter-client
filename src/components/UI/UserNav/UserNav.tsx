import { useFetcher } from "react-router-dom";

import Button from "@/components/UI/Button/Button";
import { useLanguageContext } from "@/store/langContext";

import { navElem } from "@/contens/userLayout";

import styles from "./UserNav.module.scss";
import NavLink from "../NavLink/NavLink";

const UserNav = ({ className }: { className?: string }) => {
  const logoutFetcher = useFetcher();
  const lang = useLanguageContext().language;

  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul>
        <li>
          <NavLink href="/user">{navElem.main[lang]}</NavLink>
        </li>
        <li>
          <logoutFetcher.Form action="/user/logout" method="post">
            <Button className={styles["logout-btn"]} type="submit">
              {navElem.logout[lang]}
            </Button>
          </logoutFetcher.Form>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
