import { FC } from "react";

import ArrowRightCircle from "@/icons/ArrowRightCircle";

import styles from "./GoLink.module.scss";

interface GoLinkProps {
  url: string;
  className?: string;
  children?: React.ReactNode;
}

const GoLink: FC<GoLinkProps> = ({ url, className, children }) => {
  return (
    <a href={url} target="_blank" className={`${styles.btn} ${className}`}>
      <span>{children ?? "Перейти"}</span>
      <span>
        <ArrowRightCircle />
      </span>
    </a>
  );
};

export default GoLink;
