import logotipo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logotipo} alt="Logotipo" />
    </div>
  )
}
