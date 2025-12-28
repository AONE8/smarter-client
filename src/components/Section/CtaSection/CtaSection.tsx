import Header from "./Header/Header";
import FormSection from "./FormSection/FormSection";

import ctaImg from "@/assets/man-by-laptop.webp";
import ctaImg455w from "@/assets/man-by-laptop-455w.webp";
import ctaImg794w from "@/assets/man-by-laptop-794w.webp";

import styles from "./CtaSection.module.scss";

export default function CtaSection() {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.imgbox}>
        <img
          src={ctaImg}
          srcSet={`${ctaImg455w} 455w, ${ctaImg794w} 794w, ${ctaImg} 1200w`}
          sizes="(width <= 455px) 455px,
                 (width <=794px) 794px,
                 1200px"
          alt="Man by laptop"
        />
      </div>
      <article>
        <Header />
        <FormSection />
      </article>
    </section>
  );
}
