import logo from './Logo.svg'
import styles from './Header.module.css'
console.log(styles); //* vem um objeto com o nome da classe mt estranha rsrsrs!
console.log(logo)
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
}