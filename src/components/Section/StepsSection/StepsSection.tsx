import { useLanguageContext } from "@/store/langContext";
import Section from "@/components/Section/Section";

import copmuterImg from "@/assets/computer_DARKBLUE.svg";
import markImg from "@/assets/mark_MIDDLEBLUE.svg";
import webImg from "@/assets/website_LIGHTBLUE.svg";

import { sectionTitles, stepsContent } from "@/contens/home";

import styles from "./StepsSection.module.scss";

const steps = [
  {
    text: stepsContent.first,
    imgSrc: copmuterImg,
    altText: "A Computer",
  },
  {
    text: stepsContent.second,
    imgSrc: markImg,
    altText: "A Checkbox",
  },
  {
    text: stepsContent.third,
    imgSrc: webImg,
    altText: "A Web Page",
  },
];

export default function StepsSection() {
  const lang = useLanguageContext().language;

  return (
    <Section
      id="steps"
      headling={sectionTitles.howItWorks[lang]}
      className={styles["steps"]}
    >
      {steps.map((step, index) => (
        <article className={styles["step"]} key={step.altText}>
          <p className={styles["step-number"]}>{index + 1}</p>
          <p className={styles["step-description"]}>{step.text[lang]}</p>
          <p className={styles["step-icon-container"]}>
            <img src={step.imgSrc} alt={step.altText} />
          </p>
        </article>
      ))}
    </Section>
  );
}
