import Image from 'next/image'
import styles from './page.module.css'
import ChiTietTroChoi from '@/components/ChiTietTroChoi'

export default function Home() {
  return (
    <main className={styles.main}>
      <ChiTietTroChoi/>
    </main>
  )
}
