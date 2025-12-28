import * as motion from "motion/react-client";

import styles from "./Section.module.scss";

interface SectionProps {
  children: React.JSX.Element[] | React.JSX.Element;
  id: string;
  className?: string;
  headling?: string;
  flex?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  headling,
  flex,
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id={id}
      className={`${styles.section} ${className}`}
    >
      {headling && (
        <motion.h2
          initial={{ opacity: 0, y: "-20px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {headling}
        </motion.h2>
      )}
      <div className={`${styles.container} ${flex ? styles.flex : ""}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
