import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/about">Camisas</Link>
          </li>
          <li>
            <Link href="/about">Estamparia</Link>
          </li>
          <li>
            <Link href="/about">Gráfica</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

// <!-- <hr></hr> -->
