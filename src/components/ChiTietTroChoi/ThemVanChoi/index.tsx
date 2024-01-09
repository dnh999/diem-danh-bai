import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { ThongTinNguoiChoi } from "../ThanhTongDiem";
import { ThongSoCaiDat } from "..";

type Props = {
  onClick__LUU: Function;
  onClick__DONG: Function;
  onChange__CAIDAT: (caiDat: ThongSoCaiDat) => void;
  tuDongCong_Value: boolean;
  nguoiChoi: Array<ThongTinNguoiChoi>;
};

const ThemVanChoi = (props: Props) => {
  const [_bangDiem, setBangDiem] = useState<Array<number>>(
    Array(props.nguoiChoi.length).fill(Number.MIN_SAFE_INTEGER)
  );
  const vitriTrongCuoi_ref = useRef<number>(-1);

  const handleChange = (event: any) => {
    const index = Number(event.target.getAttribute("data-stt"));
    const value =
      event.target.value === ""
        ? Number.MIN_SAFE_INTEGER
        : Number(event.target.value);
    const bangDiem = _bangDiem.slice(0);
    bangDiem[index] = value;
    // console.log(index, value, prev);

    // ******** TỰ ĐỘNG CỘNG Ô CUỐI ********
    if (props.tuDongCong_Value) {
      let countTrong = 0;
      let lastTrong = -1;
      let sum = 0;
      const vitriTrongCuoi = vitriTrongCuoi_ref.current;
      for (let i = 0; i < bangDiem.length; i++) {
        if (bangDiem[i] === Number.MIN_SAFE_INTEGER) {
          countTrong++;
          lastTrong = i;
        } else {
          sum += bangDiem[i];
        }
      }
      if (
        countTrong === 1 &&
        lastTrong > -1 &&
        lastTrong !== index &&
        vitriTrongCuoi === -1
      ) {
        bangDiem[lastTrong] = -sum;
        vitriTrongCuoi_ref.current = lastTrong;
      }
      if (
        vitriTrongCuoi !== -1 &&
        countTrong > 0 &&
        lastTrong !== vitriTrongCuoi
      ) {
        bangDiem[vitriTrongCuoi] = Number.MIN_SAFE_INTEGER;
      } else if (countTrong === 1 && lastTrong === vitriTrongCuoi) {
        bangDiem[vitriTrongCuoi] = -sum;
      } else if (countTrong === 0 && vitriTrongCuoi !== -1) {
        bangDiem[vitriTrongCuoi] = bangDiem[vitriTrongCuoi] - sum;
      }
    }
    setBangDiem(bangDiem);
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
                  i === vitriTrongCuoi_ref.current ? styles.winner : ""
                }`}
                title={`Ghi điểm cho ${nguoi.ten}`}
                onChange={handleChange}
                value={
                  _bangDiem[i] === Number.MIN_SAFE_INTEGER ? "" : _bangDiem[i]
                }
                data-stt={i}
                autoFocus={i === 0}
              />
            </div>
          ))}
        </div>
        {/* ************ CÀI ĐẶT ******** */}
        <div className={styles.CaiDat}>
          <input
            type="checkbox"
            id="TuDongCong_CheckBox"
            title="Tự động cộng"
            checked={props.tuDongCong_Value}
            onChange={(e) => {
              props.onChange__CAIDAT({
                tuDongCong: e.target.checked,
              } as ThongSoCaiDat);
            }}
          />
          <label htmlFor="TuDongCong_CheckBox">Tự động cộng</label>
        </div>
        <div className={styles.ButtonWrapper}>
          {/* ************ BUTTON ĐÓNG ******** */}
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
          {/* ************ BUTTON LƯU ******** */}
          <div
            className={styles.Button__Luu}
            onClick={() => {
              for (let i = 0; i < _bangDiem.length; i++) {
                if (_bangDiem[i] === Number.MIN_SAFE_INTEGER) {
                  return;
                }
              }
              props.onClick__LUU(_bangDiem);
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
