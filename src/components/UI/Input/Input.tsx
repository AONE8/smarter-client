import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  type: "text" | "password" | "number" | "email";
  label: string;
  error?: string;
  formId?: string;
}

const Input: React.FC<InputProps> = ({ name, type, label, error, formId }) => {
  const id = `${name}${formId ? `-${formId}` : ""}`;

  return (
    <div
      className={`${styles["input-box"]} ${
        error ? styles["input-box--invalid"] : ""
      }`}
    >
      <input type={type} id={id} name={name} placeholder="" />
      <label htmlFor={id}>{label}</label>
      {error && <p className={styles["error"]}>{error}</p>}
    </div>
  );
};

export default Input;
