import React from "react";
import styles from "./index.module.css";
import NguoiChoi from "@/components/ChiTietTroChoi/ThanhTongDiem/NguoiChoi";

type Props = {
  thoiGian: Date;
  danhSachNguoiChoi: Array<string>;
};

const LichSu = (props: Props) => {
  const gioChoi = `${props.thoiGian
    .getHours()
    .toString()
    .padStart(2, "0")}:${props.thoiGian
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  return (
    <div className={styles.container}>
      <div className={styles.thoiGian}>{gioChoi}</div>
      <div className={styles.danhSachNguoiChoi}>
        {props.danhSachNguoiChoi.map((ten, i) => (
          <NguoiChoi ten={ten} key={i} />
        ))}
      </div>
    </div>
  );
};

export default LichSu;
