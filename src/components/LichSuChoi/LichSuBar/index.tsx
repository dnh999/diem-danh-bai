"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import LichSu from "./LichSu";
import { ThongTinVanChoi } from "..";

type Props = {
  ngayChoi: Date;
  LichSu_Data: Array<ThongTinVanChoi>;
};
const formatDateString = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
const LichSuBar = (props: Props) => {
  const header =
    formatDateString(props.ngayChoi) === formatDateString(new Date())
      ? "Hôm nay"
      : formatDateString(props.ngayChoi);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Header}>{header}</div>
        <div className={styles.DanhSachLichSu}>
          {props.LichSu_Data.map((data, i) => (
            <LichSu
              thoiGian={data.ngayBatDau}
              danhSachNguoiChoi={data.danhSachNguoiChoi}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LichSuBar;
