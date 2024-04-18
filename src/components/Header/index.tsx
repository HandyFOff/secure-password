import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="assets/images/logo.png" alt="Secure Password logo" />
      </div>
      <div className={styles.menu}>
        <button className={styles["btn-menu"]}>
          <img src="assets/icons/menu.svg" alt="Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
