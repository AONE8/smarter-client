import Section from "../Section";

import { useLanguageContext } from "@/store/langContext";
import { sectionTitles } from "@/contens/home";

import acerLogo from "@/assets/manufactures/acer-logo.png";
import asusLogo from "@/assets/manufactures/asus-logo.png";
import appleLogo from "@/assets/manufactures/apple-logo.png";
import samsungLogo from "@/assets/manufactures/samsung-logo.png";
import hpLogo from "@/assets/manufactures/hp-logo.png";

import styles from "./ManufacturesSection.module.scss";

const logosOfStores = [
  {
    src: acerLogo,
    alt: "Acer logo",
  },
  {
    src: asusLogo,
    alt: "Asus logo",
  },
  {
    src: appleLogo,
    alt: "Apple logo",
  },
  {
    src: samsungLogo,
    alt: "Samsung logo",
  },
  {
    src: hpLogo,
    alt: "HP logo",
  },
];

export default function StoresSection() {
  const lang = useLanguageContext().language;

  return (
    <Section
      id="manufactures"
      headling={sectionTitles.manufactures[lang]}
      className={styles["manufactures"]}
      flex
    >
      {logosOfStores.map((logo) => (
        <img className={styles.logo} key={logo.src} {...logo} />
      ))}
    </Section>
  );
}
