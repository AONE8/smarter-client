import { type ComplexInputProps } from "@/types/ComplexInputProps.type";

import styles from "./CheckboxInput.module.scss";

const CheckboxInput: React.FC<ComplexInputProps> = ({
  title,
  name,
  options,
}) => {
  return (
    <div className={styles["checkbox-input-box"]}>
      <h6 className={styles["title"]}>{title}</h6>
      <ul className={styles["list"]}>
        {options.map((option, index) => (
          <li key={name + option + index}>
            <input
              type="checkbox"
              className={styles["input"]}
              name={name}
              id={`${name}-${index}`}
              value={option}
            />
            <label htmlFor={`${name}-${index}`} className={styles["label"]}>
              <span className={styles["square"]}></span> <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxInput;
