"use client";

import React, { useState } from "react";
import ThanhTongDiem, { ThongTinNguoiChoi } from "./ThanhTongDiem";
import ThanhDiemVanChoi, { ThongTinVanChoi } from "./ThanhDiemVanChoi";
import styles from "./index.module.css";
import ButtonThemVanChoi from "./ButtonThemVanChoi";
import ThemVanChoi from "./ThemVanChoi";

type Props = {
  troChoi: Array<ThongTinNguoiChoi>;
};

const ChiTietTroChoi = (props: Props) => {
  const [nguoiChoi, setNguoiChoi] = useState<Array<ThongTinNguoiChoi>>(
    props.troChoi
  );

  const [lichSuTroChoi, setLichSuTroChoi] = useState<Array<ThongTinVanChoi>>(
    []
  );
  const [hienThemVanChoi, setHienThemVanChoi] = useState<boolean>(true);

  const handleClick__LUU = (bangDiem: Array<number>) => {
    console.log(bangDiem);
    if (!bangDiem || nguoiChoi.length != bangDiem.length) {
      return;
    }
    const now = new Date();
    setLichSuTroChoi((prev) => [
      {
        STT: prev.length + 1,
        ThoiGian: `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}`,
        Diem: bangDiem,
      },
      ...prev,
    ]);
    let nguoichoi = nguoiChoi.slice(0);
    for (let i = 0; i < bangDiem.length; i++) {
      nguoichoi[i].diem += bangDiem[i];
    }
    setNguoiChoi(nguoiChoi);
    setHienThemVanChoi(false);
  };
  
  return (
    <div className={styles.container}>
      <ThanhTongDiem BangDiem={nguoiChoi} />
      <div className={styles.LichSuChoi}>
        {lichSuTroChoi.map((troChoi) => (
          <ThanhDiemVanChoi
            STT={troChoi.STT}
            ThoiGian={troChoi.ThoiGian}
            Diem={troChoi.Diem}
            key={troChoi.STT}
          />
        ))}
      </div>
      <ButtonThemVanChoi onClick={() => setHienThemVanChoi(true)} />
      {hienThemVanChoi && (
        <ThemVanChoi
          nguoiChoi={nguoiChoi}
          onClick__LUU={handleClick__LUU}
          onClick__DONG={() => setHienThemVanChoi(false)}
        />
      )}
    </div>
  );
};

export default ChiTietTroChoi;
