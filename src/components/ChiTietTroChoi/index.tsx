"use client";

import React, { useState } from "react";
import ThanhTongDiem, { ThongTinNguoiChoi } from "./ThanhTongDiem";
import ThanhDiemVanChoi, { ThongTinVanChoi } from "./ThanhDiemVanChoi";
import styles from "./index.module.css";
import ThemVanChoi from "./ThemVanChoi";
import ButtonThemVanChoi from "../ButtonThemVanChoi";

type Props = {
  troChoi: Array<ThongTinNguoiChoi>;
};
export type ThongSoCaiDat = {
  tuDongCong: boolean;
};

const ChiTietTroChoi = (props: Props) => {
  const [_nguoiChoi, setNguoiChoi] = useState<Array<ThongTinNguoiChoi>>(
    props.troChoi
  );

  const [_lichSuTroChoi, setLichSuTroChoi] = useState<Array<ThongTinVanChoi>>(
    []
  );
  const [_hienThemVanChoi, setHienThemVanChoi] = useState<boolean>(false);
  const [_caiDat, setCaiDat] = useState<ThongSoCaiDat>({ tuDongCong: true });

  const handleClick__LUU = (bangDiem: Array<number>) => {
    console.log(bangDiem);
    if (!bangDiem || _nguoiChoi.length != bangDiem.length) {
      return;
    }
    // ******** THÊM LỊCH SỬ ********
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
    // ******** TÍNH TỔNG ĐIỂM ********
    let nguoiChoi_clone = _nguoiChoi.slice(0);
    for (let i = 0; i < bangDiem.length; i++) {
      nguoiChoi_clone[i].diem += bangDiem[i];
    }
    setNguoiChoi(nguoiChoi_clone);
    // ******** TẮT DIALOG ********
    setHienThemVanChoi(false);
  };

  const handleCaiDat_Change = (caiDat: ThongSoCaiDat) => {
    setCaiDat((prev) => ({ ...prev, ...caiDat }));
    // console.log(caiDat);
  };

  return (
    <div className={styles.container}>
      {/* ******* SECTION TỔNG ĐIỂM ******** */}
      <ThanhTongDiem BangDiem={_nguoiChoi} />
      {/* ******* SECTION LỊCH SỬ ******** */}
      <div className={styles.LichSuChoi}>
        {_lichSuTroChoi.map((troChoi) => (
          <ThanhDiemVanChoi
            STT={troChoi.STT}
            ThoiGian={troChoi.ThoiGian}
            Diem={troChoi.Diem}
            key={troChoi.STT}
          />
        ))}
      </div>
      {/* ******* BUTTON + ******** */}
      <ButtonThemVanChoi onClick={() => setHienThemVanChoi(true)} />
      {/* ******* DIALOG THÊM ĐIỂM VÁN CHƠI ******** */}
      {_hienThemVanChoi && (
        <ThemVanChoi
          nguoiChoi={_nguoiChoi}
          onClick__LUU={handleClick__LUU}
          onClick__DONG={() => setHienThemVanChoi(false)}
          onChange__CAIDAT={handleCaiDat_Change}
          tuDongCong_Value={_caiDat.tuDongCong}
        />
      )}
    </div>
  );
};

export default ChiTietTroChoi;
