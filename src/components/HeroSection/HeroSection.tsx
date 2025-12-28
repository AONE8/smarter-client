import * as motion from "motion/react-client";

import LinkBtn from "@/components/UI/LinkBtn/LinkBtn";
import { useLanguageContext } from "@/store/langContext";
import { handleScrolling } from "@/libs/handleScrolling";

import { ctaBtn, headerTitle } from "@/contens/home";

import laptopLogo from "@/assets/header-icons/laptop.svg";
import monitorLogo from "@/assets/header-icons/monitor.svg";
import mobilePhoneLogo from "@/assets/header-icons/mobile-phone.svg";
import watchLogo from "@/assets/header-icons/watch.svg";

import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const lang = useLanguageContext().language;

  return (
    <section className={styles["hero-section"]}>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {headerTitle[lang]}
      </motion.h1>

      <div className={styles["actions"]}>
        <LinkBtn href="/signup" type="main">
          {ctaBtn.signup[lang]}
        </LinkBtn>
        <LinkBtn href="#cta" anchor onClick={handleScrolling}>
          {ctaBtn.try[lang]}
        </LinkBtn>
      </div>

      <article className={styles["images"]}>
        <img src={monitorLogo} alt="Monitor" />
        <img src={laptopLogo} alt="Laptop" />
        <img src={mobilePhoneLogo} alt="Mobile Phone" />
        <img src={watchLogo} alt="Watch" />
      </article>
    </section>
  );
}
