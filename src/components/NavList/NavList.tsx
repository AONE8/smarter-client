import { FC } from "react";

import { useLanguageContext } from "@/store/langContext";
import { handleScrolling } from "@/libs/handleScrolling";

import { homeNavContent } from "@/contens/home";

import styles from "./NavList.module.scss";
import NavLink from "../UI/NavLink/NavLink";

interface NavListProps {
  column?: boolean;
  visible?: boolean;
}

const NavList: FC<NavListProps> = ({ column = false, visible = false }) => {
  const lang = useLanguageContext().language;

  return (
    <ul
      className={`${styles["nav-list"]} ${
        column ? styles["nav-list--column"] : ""
      } ${visible ? styles["nav-list--visible"] : ""}`}
    >
      <li>
        <NavLink fragment="about" onClick={handleScrolling}>
          {homeNavContent.about[lang]}
        </NavLink>
      </li>
      <li>
        <NavLink fragment="steps" onClick={handleScrolling}>
          {homeNavContent.howItWorks[lang]}
        </NavLink>
      </li>
      <li>
        <NavLink fragment="manufactures" onClick={handleScrolling}>
          {homeNavContent.manufactures[lang]}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
