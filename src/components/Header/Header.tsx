import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <NavBar />
      <HeroSection />
    </header>
  );
}
