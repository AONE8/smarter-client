import { ComplexInputProps } from "../complex-input-props.model";
import classes from "./CheckboxInput.module.scss";

const CheckboxInput: React.FC<ComplexInputProps> = ({
  title,
  name,
  options,
}) => {
  return (
    <div className={classes["checkbox-input-box"]}>
      <h6 className={classes["title"]}>{title}</h6>
      <ul className={classes["list"]}>
        {options.map((option, index) => (
          <li key={name + option + index}>
            <input
              type="checkbox"
              className={classes["input"]}
              name={name}
              id={`${name}-${index}`}
              value={option}
            />
            <label htmlFor={`${name}-${index}`} className={classes["label"]}>
              <span className={classes["square"]}></span> <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxInput;
