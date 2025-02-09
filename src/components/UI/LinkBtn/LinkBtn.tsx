import { Link } from "react-router-dom";
import btnClasses from "./LinkBtn.module.scss";

interface LinkBtnProps {
  href: string;
  type?: "plain" | "main";
  children?: React.ReactNode;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  children,
  href = "#",
  type = "plain",
}) => {
  return (
    <Link
      to={href}
      className={`${btnClasses.btn} ${
        type === "main" ? btnClasses["main-btn"] : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
