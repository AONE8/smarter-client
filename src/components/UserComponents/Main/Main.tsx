import monitorIcon from "@/assets/input-icons/monitor.svg";
import laptopIcon from "@/assets/input-icons/laptop.svg";
import mobilePhoneIcon from "@/assets/input-icons/mobile-phone.svg";
import watchIcon from "@/assets/input-icons/watch.svg";

import { mainContent } from "@/contens/userLayout";
import { useLanguageContext } from "@/store/langContext";

import styles from "./Main.module.scss";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Main: React.FC<MainProps> = ({ onChangeInput }) => {
  const lang = useLanguageContext().language;

  return (
    <main className={styles.main}>
      <article>
        <h2>{mainContent.formTitle[lang]}</h2>
        <form className={styles["device-form"]} autoComplete="off">
          <fieldset className={styles["fieldset"]}>
            <label htmlFor="monoblock">
              <img src={monitorIcon} alt="Monoblock Icon" />
              <span>{mainContent.monoblock[lang]}</span>
            </label>
            <input
              type="radio"
              name="device"
              id="monoblock"
              value="monoblock"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={styles["fieldset"]}>
            <label htmlFor="laptop">
              <img src={laptopIcon} alt="Laptop Icon" />
              <span>{mainContent.laptop[lang]}</span>
            </label>
            <input
              type="radio"
              name="device"
              id="laptop"
              value="laptop"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={styles["fieldset"]}>
            <label htmlFor="smartphone">
              <img src={mobilePhoneIcon} alt="Smartphone Icon" />
              <span>{mainContent.smartphone[lang]}</span>
            </label>
            <input
              type="radio"
              name="device"
              id="smartphone"
              value="smartphone"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={styles["fieldset"]}>
            <label htmlFor="smartwatch">
              <img src={watchIcon} alt="Smartwatch Icon" />
              <span>{mainContent.smartwatch[lang]}</span>
            </label>
            <input
              type="radio"
              name="device"
              id="smartwatch"
              value="smartwatch"
              onChange={onChangeInput}
            />
          </fieldset>
        </form>
      </article>
    </main>
  );
};

export default Main;
