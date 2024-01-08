"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ChiTietTroChoi from "@/components/ChiTietTroChoi";
import CaiDatTroChoi from "@/components/CaiDatTroChoi";
import { useState } from "react";
import { ThongTinNguoiChoi } from "@/components/ChiTietTroChoi/ThanhTongDiem";

export default function Home() {
  const [thongTinTroChoi, setThongTinTroChoi] = useState<
    Array<ThongTinNguoiChoi>
  >([]);
  const [playing, setPlaying] = useState(false);
  const handleBatDau = (danhsach: Array<string>) => {
    if (danhsach.length < 2) return;
    let trochoi = Array<ThongTinNguoiChoi>(0);
    danhsach.map((tenNC) => {
      trochoi = [...trochoi, { ten: tenNC, diem: 0 }];
    });
    setThongTinTroChoi(trochoi);
    // console.log(trochoi);
    setPlaying(true);
  };
  
  return (
    <main className={styles.main}>
      {!playing ? (
        <CaiDatTroChoi batDau={handleBatDau} />
      ) : (
        <ChiTietTroChoi troChoi={thongTinTroChoi} />
      )}
    </main>
  );
}
