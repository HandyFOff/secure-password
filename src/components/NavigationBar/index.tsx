import styles from "./NavigationBar.module.scss";

interface Props {
  setSelectedTab: (prev: string) => void;
}

const NavigationBar: React.FC<Props> = ({ setSelectedTab }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => setSelectedTab("generator")}>
        <img
          className={styles.img}
          src="assets/images/logo.png"
          alt="Secure Password logo"
        />
        <h3 className={styles.title}>Password Generator</h3>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href="https://twitter.com/HandyF8"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/icons/twitter.svg" alt="Our Twitter!" />
          </a>
        </li>
        <li className={styles.item} onClick={() => setSelectedTab("history")}>
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
