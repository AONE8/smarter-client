import footerLogo from "@/assets/footer-logo.webp";

import LangSwitchButton from "../LangSwitchButton/LangSwitchButton";

import styles from "./Footer.module.scss";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <a href="#" onClick={scrollToTop}>
        <img
          src={footerLogo}
          alt="Blue Brain"
          className={styles["footer-logo"]}
        />
      </a>
      <p>
        <LangSwitchButton />
      </p>
      <p>© Copyright Andrii Malyshko, {new Date().getFullYear()}</p>
    </footer>
  );
}
