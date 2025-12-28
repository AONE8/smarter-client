import LinkBtn from "@/components/UI/LinkBtn/LinkBtn";
import { useLanguageContext } from "@/store/langContext";

import styles from "./Error.module.scss";
import { errorContent } from "@/contens/error";

const Error = () => {
  const lang = useLanguageContext().language;

  return (
    <div className={styles["error-body"]}>
      <h1>{errorContent.heading[lang]}</h1>
      <p>{errorContent.paragraph[lang]}</p>
      <p>
        <LinkBtn href="/" className={styles["main-link"]}>
          {errorContent.button[lang]}
        </LinkBtn>
      </p>
    </div>
  );
};

export default Error;
