import { ComplexInputProps } from "../complex-input-props.model";
import classes from "./SelectInput.module.scss";

const SelectInput: React.FC<ComplexInputProps> = ({ title, name, options }) => {
  return (
    <div className={classes["select-input-box"]}>
      <input
        list={`${name}-options`}
        id={name}
        name={name}
        className={classes["input"]}
        placeholder=""
      />
      <label htmlFor={name} className={classes["label"]}>
        {title}
      </label>
      <datalist id={`${name}-options`} className={classes["datalist"]}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default SelectInput;
