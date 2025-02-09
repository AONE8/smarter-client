import { Link } from "react-router-dom";

import laptopLogo from "../../assets/laptop.png";
import monitorLogo from "../../assets/monitor.png";
import mobilePhoneLogo from "../../assets/mobile-phone.png";
import watchLogo from "../../assets/watch.png";
import classes from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={classes["hero-section"]}>
      <h1>ШУКАЙ ШВИДКО ЯКІСНО</h1>
      <div className={classes["images"]}>
        <img src={monitorLogo} alt="" />
        <img src={laptopLogo} alt="" />
        <img src={mobilePhoneLogo} alt="" />
        <img src={watchLogo} alt="" />
      </div>
      <div className={classes["actions"]}>
        <Link to="/signup" className={classes["main-btn"]}>
          Зареєструватись
        </Link>
        <Link to="/search">Спробувати</Link>
      </div>
    </section>
  );
}
