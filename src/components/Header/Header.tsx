import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

import styles from "./Header.module.scss";

interface NavBarProps {
  setIsAsideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavBarProps> = ({ setIsAsideMenu }) => {
  return (
    <header className={styles.header}>
      <NavBar setIsAsideMenu={setIsAsideMenu} />
      <HeroSection />
    </header>
  );
};

export default Header;
