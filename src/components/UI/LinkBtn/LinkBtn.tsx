import { Link } from "react-router-dom";

import styles from "./LinkBtn.module.scss";

interface LinkBtnProps {
  href: string;
  type?: "plain" | "main";
  children?: React.ReactNode;
  anchor?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  className?: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  children,
  href = "#",
  type = "plain",
  anchor,
  onClick,
  className,
}) => {
  return anchor ? (
    <a
      href={href}
      className={`${styles.btn} ${
        type === "main" ? styles["main-btn"] : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link
      to={href}
      className={`${styles.btn} ${
        type === "main" ? styles["main-btn"] : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
