import React, { FC } from "react";
import * as motion from "motion/react-client";

import NavList from "@/components/NavList/NavList";
import NavLink from "../UI/NavLink/NavLink";
import { useLanguageContext } from "@/store/langContext";

import { homeNavContent } from "@/contens/home";

import styles from "./AsideMenu.module.scss";

interface AsideMenuProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideMenu: FC<AsideMenuProps> = ({ setVisible }) => {
  const lang = useLanguageContext().language;

  function handleAsideMenuLinksClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const isAnchorElement = e.target instanceof HTMLAnchorElement;

    if (isAnchorElement) setVisible(false);
  }

  return (
    <>
      <motion.aside
        className={styles["aside-menu"]}
        initial={{ x: "10%" }}
        animate={{ x: 0 }}
        onClick={handleAsideMenuLinksClick}
      >
        <NavList column visible />
        <NavLink href="/login" className={styles["btn"]} actionLink>
          {homeNavContent.login[lang]}
        </NavLink>
      </motion.aside>
      <motion.div
        className={styles["overlay"]}
        onClick={() => setVisible(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </>
  );
};

export default AsideMenu;
