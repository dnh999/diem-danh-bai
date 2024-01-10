"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Layouts/Sidebar";
import Navbar from "@/components/Layouts/Navbar";

type Props = {
  playing?: boolean;
  setPlaying?: Function;
};

const Layouts = (props: Props) => {
  const [hienSidebar, setHienSidebar] = useState(false);
  const MenuButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      onClick={() => setHienSidebar((p) => !p)}
    >
      <path
        fillRule="evenodd"
        d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const BackButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      onClick={() => (props.setPlaying ? props.setPlaying() : () => {})}
    >
      <path
        fillRule="evenodd"
        d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div>
      <Navbar
        TieuDeText={!props.playing ? "Tạo trò chơi" : "Chi tiết trò chơi"}
        DieuHuongIcon={!props.playing ? MenuButton : BackButton}
      />
      {hienSidebar && <Sidebar />}
    </div>
  );
};

export default Layouts;
