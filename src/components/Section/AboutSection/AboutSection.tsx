import Section from "../Section";
import brainDecitionsImg from "../../../assets/brain_decitions.png";
import busyBrainImg from "../../../assets/brain_is_busy.png";
import brainWithGoodsImg from "../../../assets/brain_with_goods.png";

import classes from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <Section id="about" headling="ПРО НАС" className={classes["about-section"]}>
      <img
        src={brainWithGoodsImg}
        alt="Brain with goods"
        id="brain_with_goods"
      />
      <p>
        <span>smarter</span> — це вебзастосунок, завдяки якому користувач може
        знайти необхідний девайс за низькою ціною. До підтримуваних для пошуку
        девайсів є моноблоки, ноутбуки, смартгодинники та смартфони.
      </p>
      <p>
        <span>smarter</span> шукає девайси з найбільш низькою ціною з-поміж
        п’яти популярних магазинів. Такими є Rozetka, Comfy, Фокстрот, Stylus та
        MOYO.
      </p>
      <img src={brainDecitionsImg} alt="Brain is deciting" />
      <img src={busyBrainImg} alt="Busy brain" />
      <p>
        Зареєструвавшись, Ви отримаєте можливість вести історію пошуку, перелік
        бажаних товарів, слідкувати за зміною цін у магазинах. Завдяки зручному
        інтерфейсу <span>smarter</span> здатен покращити користувацький досвід у
        пошуку потрібних девайсів.
      </p>
    </Section>
  );
};

export default AboutSection;
