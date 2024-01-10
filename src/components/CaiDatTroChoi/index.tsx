import React, { useState } from "react";
import styles from "./index.module.css";

type Props = {
  onClick_batDau: Function;
};

const CaiDatTroChoi = (props: Props) => {
  const [danhsach, setDanhSach] = useState<Array<string>>(Array(5).fill(""));
  const handleChange = (event: any) => {
    const index = event.target.getAttribute("data-stt");
    const value = event.target.value;
    const prev = danhsach.slice(0);
    prev[index] = value;
    setDanhSach(prev);
  };
  const handleBatDau = () => {
    const danhSachMoi = danhsach.filter((value) => value);
    // console.log(danhsach, danhSachMoi);
    props.onClick_batDau(danhSachMoi);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.TieuDe}>Tạo trò chơi</div>
        <div className={styles.DanhSachNguoiChoi}>
          {danhsach.map((value, i) => (
            <input
              type="text"
              placeholder={`Người chơi ${i + 1}`}
              key={i}
              data-stt={i}
              onChange={handleChange}
              value={value}
            />
          ))}
        </div>
        <div className={styles.ButtonWrapper} onClick={handleBatDau}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Bắt đầu</span>
        </div>
      </div>
    </div>
  );
};

export default CaiDatTroChoi;
