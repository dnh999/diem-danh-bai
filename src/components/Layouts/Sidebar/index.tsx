import React from 'react'
import styles from "./index.module.css";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className={styles.container}>
      <img src="/assets/Spades.svg" alt="Spades" />
      <div>Chúc may mắn ^_^</div>
    </div>
  )
}

export default Sidebar