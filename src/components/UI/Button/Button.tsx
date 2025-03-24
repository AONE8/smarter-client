import buttonClasses from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      className={`${buttonClasses.btn} ${className ?? ""}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
