import { type ComplexInputProps } from "@/types/ComplexInputProps.type";

import styles from "./RadioInput.module.scss";

const RadioInput: React.FC<ComplexInputProps> = ({ title, name, options }) => {
  return (
    <div className={styles["radio-input-box"]}>
      <h6 className={styles["title"]}>{title}</h6>
      <ul className={styles["list"]}>
        {options.map((option, index) => (
          <li key={option}>
            <input
              className={styles["input"]}
              type="radio"
              name={name}
              id={`${name}-${index}`}
              value={option}
            />
            <label htmlFor={`${name}-${index}`} className={styles["label"]}>
              <span className={styles["radio"]}></span> <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioInput;
