import importClasses from "./Input.module.scss";

interface InputProps {
  name: string;
  type: "text" | "password" | "number";
  label: string;
}

const Input: React.FC<InputProps> = ({ name, type, label }) => {
  return (
    <div className={importClasses["input-box"]}>
      <input type={type} id={name} name={name} placeholder="" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Input;
