import buttonClasses from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return (
    <button className={buttonClasses["btn"]} type={type}>
      {children}
    </button>
  );
};

export default Button;
