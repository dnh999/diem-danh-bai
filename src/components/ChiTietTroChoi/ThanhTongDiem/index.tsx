import React from "react";
import styles from "./index.module.css";
import NguoiChoi from "./NguoiChoi";

export type ThongTinNguoiChoi = {
  ten: string;
  diem: number;
};
type Props = {
  BangDiem: Array<ThongTinNguoiChoi>;
};

const ThanhTongDiem = ({ BangDiem }: Props) => {
  return (
    <div className={styles.container}>
      {BangDiem.map((dulieu, i) => (
        <NguoiChoi ten={dulieu.ten} diem={dulieu.diem} key={i} />
      ))}
    </div>
  );
};

export default ThanhTongDiem;
