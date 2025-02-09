import Section from "../Section";
import classes from "./StepsSection.module.scss";

import copmuterImg from "../../../assets/computer_DARKBLUE.png";
import markImg from "../../../assets/mark_MIDDLEBLUE.png";
import webImg from "../../../assets/website_LIGHTBLUE.png";

interface StepItem {
  text: string;
  imgSrc: string;
  altText: string;
}

const steps: StepItem[] = [
  {
    text: "Зареєструйтесь або натисніть кнопку «Спробувати», аби спробувати використання форми для заповнення без реєстрації.",
    imgSrc: copmuterImg,
    altText: "A Computer",
  },
  {
    text: "Заповніть форму. Введіть дані про бажаний товар та натисніть кнопку «Надіслати».",
    imgSrc: markImg,
    altText: "A Checkbox",
  },
  {
    text: "Отримайте гаджет з потрібними характеристиками та найнижчою ціною на ринку.",
    imgSrc: webImg,
    altText: "A Web Page",
  },
];

export default function StepsSection() {
  return (
    <Section id="steps" headling="ЯК ЦЕ ПРАЦЮЄ" className={classes["steps"]}>
      {steps.map((step, index) => (
        <article className={classes["step"]} key={step.altText}>
          <p className={classes["step-number"]}>{index + 1}</p>
          <p className={classes["step-description"]}>{step.text}</p>
          <p className={classes["step-icon-container"]}>
            <img src={step.imgSrc} alt={step.altText} />
          </p>
        </article>
      ))}
    </Section>
  );
}
