import { type ComplexInputProps } from "@/types/ComplexInputProps.type";

import styles from "./SelectInput.module.scss";

const SelectInput: React.FC<ComplexInputProps> = ({ title, name, options }) => {
  return (
    <div className={styles["select-input-box"]}>
      <input
        list={`${name}-options`}
        id={name}
        name={name}
        className={styles["input"]}
        placeholder=""
      />
      <label htmlFor={name} className={styles["label"]}>
        {title}
      </label>
      <datalist id={`${name}-options`} className={styles["datalist"]}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default SelectInput;
