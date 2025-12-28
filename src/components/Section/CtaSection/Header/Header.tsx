import LinkBtn from "@/components/UI/LinkBtn/LinkBtn";

import { useLanguageContext } from "@/store/langContext";
import { handleScrolling } from "@/libs/handleScrolling";

import { ctaBtn, ctaContent } from "@/contens/home";

import styles from "./Header.module.scss";

export default function Header() {
  const lang = useLanguageContext().language;

  return (
    <header className={styles.header}>
      <h3>{ctaContent.headerTitle[lang]}</h3>
      <div className={styles["action-box"]}>
        <LinkBtn href="/signup" type="main">
          {ctaBtn.signup[lang]}
        </LinkBtn>
        <LinkBtn href="#cta-form" anchor onClick={handleScrolling}>
          {ctaBtn.try[lang]}
        </LinkBtn>
      </div>
    </header>
  );
}
