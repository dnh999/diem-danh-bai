import React from "react";
import styles from "./index.module.css";

type Props = {
  onClick?: any;
};

const ButtonThemVanChoi = ({ onClick }: Props) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default ButtonThemVanChoi;
