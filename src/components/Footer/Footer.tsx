import { Link } from "react-router-dom";

import footerLogo from "../../assets/footer-logo.png";
import footerClassses from "./Footer.module.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={footerClassses.footer}>
      <Link to="/" onClick={scrollToTop}>
        <img
          src={footerLogo}
          alt="Blue Brain"
          className={footerClassses["footer-logo"]}
        />
      </Link>
      <p>© Copyright Andrii Malyshko, {new Date().getFullYear()}</p>
    </footer>
  );
}
