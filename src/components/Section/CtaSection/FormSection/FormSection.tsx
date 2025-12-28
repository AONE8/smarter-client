import { useLanguageContext } from "@/store/langContext";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";

import { ctaContent } from "@/contens/home";

import styles from "./FormSection.module.scss";

export default function FormSection() {
  const lang = useLanguageContext().language;

  return (
    <section id="cta-form" className={styles["form-section"]}>
      <p> {ctaContent.formTitile[lang]} </p>
      <form action="/signup" method="POST">
        <div className={styles["inputs-container"]}>
          <Input
            name="email"
            type="email"
            label={ctaContent.formLabels.email[lang]}
          />
          <Input
            name="password"
            type="password"
            label={ctaContent.formLabels.password[lang]}
          />
        </div>

        <div className={styles["action-box"]}>
          <Button type="reset" className={styles.btn}>
            {ctaContent.clearBtn[lang]}
          </Button>
          <Button type="submit" className={styles.btn}>
            {ctaContent.loginBtn[lang]}
          </Button>
        </div>
      </form>
    </section>
  );
}
