import classes from "./NavList.module.scss";

export default function NavList() {
  const handleScrolling = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className={classes["nav-list"]}>
      <li>
        <a href="#about" onClick={handleScrolling}>
          Про нас
        </a>
      </li>
      <li>
        <a href="#steps" onClick={handleScrolling}>
          Як це працює
        </a>
      </li>
      <li>
        <a href="#stores" onClick={handleScrolling}>
          Магазини
        </a>
      </li>
    </ul>
  );
}
