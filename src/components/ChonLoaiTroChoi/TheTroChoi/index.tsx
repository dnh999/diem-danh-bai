import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  anhDaiDien: string;
  tenTroChoi: string;
  onClick?: (event?: any) => void;
};

const TheTroChoi = (props: Props) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.wrapper}>
        <Image
          width={100}
          height={100}
          src={props.anhDaiDien}
          alt="logo"
          className={styles.anhDaiDien}
        />
        {/* <div className={styles.TieuDe}>{props.tenTroChoi}</div> */}
      </div>
    </div>
  );
};

export default TheTroChoi;
