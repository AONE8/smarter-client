import { Link } from "react-router-dom";

import Button from "@/components/UI/Button/Button";
import { useLanguageContext } from "@/store/langContext";

import { formBtn, loginLinkText, signupLinkText } from "@/contens/form";

import styles from "./AppForm.module.scss";

interface AppFormProps {
  title: string;
  linkTo?: "login" | "signup";
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AppForm: React.FC<AppFormProps> = ({
  title,
  linkTo,
  children,
  onSubmit,
  onReset,
}) => {
  const lang = useLanguageContext().language;

  return (
    <form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles["inputs-container"]}>{children}</div>

      <p className={styles.actions}>
        <Button type="reset">{formBtn.reset[lang]}</Button>
        <Button type="submit">{formBtn.submit[lang]}</Button>
      </p>

      {linkTo && (
        <p>
          <Link to={`/${linkTo}`} className={styles.link}>
            {linkTo === "login" ? loginLinkText[lang] : signupLinkText[lang]}
          </Link>
        </p>
      )}
    </form>
  );
};

export default AppForm;
