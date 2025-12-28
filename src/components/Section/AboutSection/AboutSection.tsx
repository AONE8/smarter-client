import Section from "@/components/Section/Section";

import { useLanguageContext } from "@/store/langContext";

import brainDecitionsImg from "@/assets/about-section/brain_decitions.svg";
import busyBrainImg from "@/assets/about-section/brain_is_busy.svg";
import brainWithGoodsImg from "@/assets/about-section/brain_with_goods.svg";

import { aboutSectionContent, sectionTitles } from "@/contens/home.tsx";

import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  const lang = useLanguageContext().language;

  const brandName = <span className={styles["brand-name"]}>smarter</span>;

  return (
    <Section
      id="about"
      headling={sectionTitles.about[lang]}
      className={styles["about-section"]}
    >
      <div className={styles["img-box"]}>
        <img
          src={brainWithGoodsImg}
          alt="Brain with goods"
          id="brain_with_goods"
        />
      </div>
      <p>{aboutSectionContent.goods[lang](brandName)}</p>
      <div className={styles["img-box"]}>
        <img
          src={brainDecitionsImg}
          alt="Brain is deciting"
          id="brain_decitions"
        />
      </div>
      <p>{aboutSectionContent.marketpalace[lang](brandName)}</p>
      <div className={styles["img-box"]}>
        <img src={busyBrainImg} alt="Busy brain" id="busy_brain" />
      </div>

      <p>{aboutSectionContent.history[lang](brandName)}</p>
    </Section>
  );
};

export default AboutSection;
