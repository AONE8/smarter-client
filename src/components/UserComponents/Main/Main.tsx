import classes from "./Main.module.scss";

import monitorIcon from "../../../assets/input-icons/monitor.png";
import laptopIcon from "../../../assets/input-icons/laptop.png";
import mobilePhoneIcon from "../../../assets/input-icons/mobile-phone.png";
import watchIcon from "../../../assets/input-icons/watch.png";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Main: React.FC<MainProps> = ({ onChangeInput }) => {
  return (
    <main className={classes.main}>
      <article>
        <h2>Який пристрій ви шукаєте?</h2>
        <form
          // onChange={onChangeForm}
          className={classes["device-form"]}
          autoComplete="off"
        >
          <fieldset className={classes["fieldset"]}>
            <label htmlFor="monoblock">
              <img src={monitorIcon} alt="Monoblock Icon" />
              <span>Моноблок</span>
            </label>
            <input
              type="radio"
              name="device"
              id="monoblock"
              value="monoblock"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={classes["fieldset"]}>
            <label htmlFor="laptop">
              <img src={laptopIcon} alt="Laptop Icon" />
              <span>Ноутбук</span>
            </label>
            <input
              type="radio"
              name="device"
              id="laptop"
              value="laptop"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={classes["fieldset"]}>
            <label htmlFor="smartphone">
              <img src={mobilePhoneIcon} alt="Smartphone Icon" />
              <span>Смартфон</span>
            </label>
            <input
              type="radio"
              name="device"
              id="smartphone"
              value="smartphone"
              onChange={onChangeInput}
            />
          </fieldset>
          <fieldset className={classes["fieldset"]}>
            <label htmlFor="smartwatch">
              <img src={watchIcon} alt="Smartwatch Icon" />
              <span>Смартгодинник</span>
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
      <article>
        <p>Поки жоден девайс не вістежується</p>
      </article>
    </main>
  );
};

export default Main;
