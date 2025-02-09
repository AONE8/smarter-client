import classes from "./CtaSection.module.scss";
import ctaImg from "../../../assets/paolo-resteghini-xRR1ixZ6yLo-unsplash.jpg";
import Header from "./Header/Header";
import FormSection from "./FormSection/FormSection";

export default function CtaSection() {
  return (
    <section className={classes.cta}>
      <div className={classes.imgbox}>
        <img src={ctaImg} alt="Paolo Resteghini by his laptop" />
      </div>
      <article>
        <Header />
        <FormSection />
      </article>
    </section>
  );
}
