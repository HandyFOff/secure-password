import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.title}>
        Designed by <b>@ome9a</b> with ❤️
      </span>
    </footer>
  );
};

export default Footer;
