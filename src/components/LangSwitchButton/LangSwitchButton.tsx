import { useLanguageContext } from "@/store/langContext";
import Lang from "@/icons/Lang";
import { switchLangButton } from "@/contens/home";

import styles from "./LangSwitchButton.module.scss";

const LangSwitchButton = () => {
  const { language: lang, setLanguage } = useLanguageContext();

  return (
    <button
      className={styles["switch-btn"]}
      onClick={() => setLanguage(lang === "en" ? "uk" : "en")}
    >
      <Lang className={styles.icon} /> <span>{switchLangButton[lang]}</span>
    </button>
  );
};

export default LangSwitchButton;
