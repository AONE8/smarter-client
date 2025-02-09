import classes from "./Section.module.scss";

interface SectionProps {
  children: React.JSX.Element[] | React.JSX.Element;
  id: string;
  className?: string;
  headling?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  headling,
  children,
}) => {
  return (
    <section id={id} className={`${classes.section} ${className}`}>
      {headling && <h2>{headling}</h2>}
      <div className={classes.container}>{children}</div>
    </section>
  );
};

export default Section;
