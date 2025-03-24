import { ComplexInputProps } from "../complex-input-props.model";
import classes from "./RadioInput.module.scss";

const RadioInput: React.FC<ComplexInputProps> = ({ title, name, options }) => {
  return (
    <div className={classes["radio-input-box"]}>
      <h6 className={classes["title"]}>{title}</h6>
      <ul className={classes["list"]}>
        {options.map((option, index) => (
          <li key={option}>
            <input
              className={classes["input"]}
              type="radio"
              name={name}
              id={`${name}-${index}`}
              value={option}
            />
            <label htmlFor={`${name}-${index}`} className={classes["label"]}>
              <span className={classes["radio"]}></span> <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioInput;
