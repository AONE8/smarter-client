import classes from "./NavList.module.scss";

export default function NavList() {
  return (
    <ul className={classes["nav-list"]}>
      <li>
        <a href="#about">Про нас</a>
      </li>
      <li>
        <a href="#steps">Як це працює</a>
      </li>
      <li>
        <a href="#stores">Магазини</a>
      </li>
    </ul>
  );
}
