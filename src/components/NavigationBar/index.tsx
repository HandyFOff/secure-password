import styles from './NavigationBar.module.scss'

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.img}
          src="assets/images/logo.png"
          alt="Secure Password logo"
        />
        <h3 className={styles.title}>Password Generator</h3>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src="assets/icons/twitter.svg" alt="Our Twitter!" />
        </li>
        <li className={styles.item}>
          <img src="assets/icons/history.svg" alt="Passwords's history" />
        </li>
        <li className={styles.item}>
          <img src="assets/icons/settings.svg" alt="Settings" />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
