import React from "react";
import styles from "./index.module.css";

export type ThongTinVanChoi = {
  STT: number;
  ThoiGian: string;
  Diem: Array<number>;
};

const ThanhDiemVanChoi = (props: ThongTinVanChoi) => {
  return (
    <div className={styles.container}>
      <div className={styles.STT}>{props.STT}</div>
      <div className={styles.ThoiGian}>{props.ThoiGian}</div>
      <div className={styles.wrapper}>
        {props.Diem.map((diem, i) => (
          <div key={i}>{diem}</div>
        ))}
      </div>
    </div>
  );
};

export default ThanhDiemVanChoi;
