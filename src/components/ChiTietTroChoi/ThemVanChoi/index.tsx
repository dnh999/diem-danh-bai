import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { ThongTinNguoiChoi } from "../ThanhTongDiem";

type Props = {
  onClick__LUU: Function;
  onClick__DONG: Function;
  nguoiChoi: Array<ThongTinNguoiChoi>;
};

const ThemVanChoi = (props: Props) => {
  const [bangDiem, setBangDiem] = useState<Array<number>>(
    Array(props.nguoiChoi.length).fill(Number.MIN_SAFE_INTEGER)
  );
  const [vitriTrongCuoi, setViTriTrongCuoi] = useState<number>(-1);
  const handleChange = (event: any) => {
    const index = Number(event.target.getAttribute("data-stt"));
    const value =
      event.target.value === ""
        ? Number.MIN_SAFE_INTEGER
        : Number(event.target.value);
    const prev = bangDiem.slice(0);
    prev[index] = value;
    // console.log(index, value, prev);
    let countTrong = 0;
    let lastTrong = -1;
    let sum = 0;
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] === Number.MIN_SAFE_INTEGER) {
        countTrong++;
        lastTrong = i;
      } else {
        sum += prev[i];
      }
    }
    if (
      countTrong === 1 &&
      lastTrong > -1 &&
      lastTrong !== index &&
      vitriTrongCuoi === -1
    ) {
      prev[lastTrong] = -sum;
      setViTriTrongCuoi(lastTrong);
    }
    if (
      vitriTrongCuoi !== -1 &&
      countTrong > 0 &&
      lastTrong !== vitriTrongCuoi
    ) {
      prev[vitriTrongCuoi] = Number.MIN_SAFE_INTEGER;
    } else if (countTrong === 1 && lastTrong === vitriTrongCuoi) {
      prev[vitriTrongCuoi] = -sum;
    } else if (countTrong === 0 && vitriTrongCuoi !== -1) {
      prev[vitriTrongCuoi] = prev[vitriTrongCuoi] - sum;
    }
    setBangDiem(prev);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.TieuDe}>Cho điểm</div>
        {/* ************ TINH DIEM ******** */}
        <div className={styles.BangChoDiem}>
          {props.nguoiChoi.map((nguoi, i) => (
            <div className={styles.ThanhChoDiem} key={i}>
              <div className={styles.DaiDien}>{nguoi.ten.charAt(0)}</div>
              <div className={styles.Ten}>{nguoi.ten}</div>
              <input
                type="number"
                className={`${styles.Diem} ${
                  i === vitriTrongCuoi ? styles.winner : ""
                }`}
                title="Điểm"
                onChange={handleChange}
                value={
                  bangDiem[i] === Number.MIN_SAFE_INTEGER ? "" : bangDiem[i]
                }
                data-stt={i}
              />
            </div>
          ))}
        </div>
        {/* ************ BINH LUAN ******** */}
        <input
          type="text"
          placeholder="Thêm bình luận của bạn ở đây"
          className={styles.BinhLuan}
        />
        <div className={styles.ButtonWrapper}>
          {/* ************ DONG ******** */}
          <div
            className={styles.Button__Dong}
            onClick={() => props.onClick__DONG()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <span>ĐÓNG</span>
          </div>
          {/* ************ LUU ******** */}
          <div
            className={styles.Button__Luu}
            onClick={() => {
              for (let i = 0; i < bangDiem.length; i++) {
                if (bangDiem[i] === Number.MIN_SAFE_INTEGER) {
                  return;
                }
              }
              props.onClick__LUU(bangDiem);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            <span>LƯU</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemVanChoi;
