import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
