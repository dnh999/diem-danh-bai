"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sidebar";
import { menuIcon } from "../assets";
import TheTroChoi from "./TheTroChoi";

type Props = {};

const ChonLoaiTroChoi = (props: Props) => {
  const [hienSidebar, setHienSidebar] = useState(false);
  return (
    <>
      <Navbar
        TieuDeText="Chọn loại trò chơi"
        DieuHuongIcon={menuIcon}
        onClick_DieuHuongButton={() => setHienSidebar((p) => !p)}
      />
      {hienSidebar && <Sidebar />}
      <div className={styles.container}>
        <TheTroChoi anhDaiDien="/assets/images/tienlen.png" tenTroChoi="Tiến lên"/>
        <TheTroChoi anhDaiDien="/assets/images/phom.png" tenTroChoi="Phỏm"/>
        <TheTroChoi anhDaiDien="/assets/images/samloc.png" tenTroChoi="Sâm"/>
        <TheTroChoi anhDaiDien="/assets/images/bacaythuong.png" tenTroChoi="Ba cây"/>
      </div>
    </>
  );
};

export default ChonLoaiTroChoi;
