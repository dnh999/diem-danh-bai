import React from "react";
import styles from "./index.module.css";

type Props = {
    diem: number;
    ten: string
};

const NguoiChoi = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.TongDiem}>{props.diem}</div>
      <div className={styles.Ten}>{props.ten}</div>
      <div className={styles.DaiDien}>{props.ten.charAt(0)}</div>
    </div>
  );
};

export default NguoiChoi;
