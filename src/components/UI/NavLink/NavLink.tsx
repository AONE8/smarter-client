import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./NavLink.module.scss";

interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  actionLink?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  fragment?: string;
}

const NavLink: FC<NavLinkProps> = ({
  children,
  actionLink,
  href = "",
  className,
  onClick,
  fragment,
}) => {
  return actionLink ? (
    <Link className={`${styles["action-link"]} ${className}`} to={href}>
      {children}
    </Link>
  ) : fragment ? (
    <a
      className={`${styles.link} ${className}`}
      href={`${href}#${fragment}`}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link className={`${styles.link} ${className}`} to={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
