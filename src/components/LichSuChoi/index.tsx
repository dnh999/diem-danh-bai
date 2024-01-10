"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Navbar from "../Layouts/Navbar";
import { menuIcon } from "../assets";
import Sidebar from "../Layouts/Sidebar";
import LichSuBar from "./LichSuBar";
import ButtonThemVanChoi from "../ButtonThemVanChoi";

export type ThongTinVanChoi = {
  ngayBatDau: Date;
  danhSachNguoiChoi: Array<string>;
  id?: number;
};
type Props = {};

const LichSuChoi = (props: Props) => {
  const [hienSidebar, setHienSidebar] = useState(false);
  return (
    <>
      <Navbar
        TieuDeText="Lịch sử chơi"
        DieuHuongIcon={menuIcon}
        onClick_DieuHuongButton={() => setHienSidebar((p) => !p)}
      />
      {hienSidebar && <Sidebar />}
      <div className={styles.container}>
        <LichSuBar
          ngayChoi={new Date("09/10/2024")}
          LichSu_Data={[
            {
              ngayBatDau: new Date(),
              danhSachNguoiChoi: ["Đức", "Đức", "Đức", "Đức"],
            },
          ]}
        />
      </div>
      <ButtonThemVanChoi />
    </>
  );
};

export default LichSuChoi;
