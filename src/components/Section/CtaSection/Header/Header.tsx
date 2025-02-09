import LinkBtn from "../../../UI/LinkBtn/LinkBtn";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <h3>Заощаджуй час на пошуки свого улюбленого девайсу</h3>
      <div className={classes["action-box"]}>
        <LinkBtn href="/signup" type="main">
          Зареєструватись
        </LinkBtn>
        <LinkBtn href="/search">Спробувати</LinkBtn>
      </div>
    </header>
  );
}
