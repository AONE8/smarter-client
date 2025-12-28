import { Link } from "react-router-dom";

import styles from "./Anchor.module.scss";

interface AnchorProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  to: string;
}

const Anchor: React.FC<AnchorProps> = ({
  to,
  className,
  children,
  onClick,
}) => {
  return (
    <Link to={to} className={`${styles.link} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Anchor;
