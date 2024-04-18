import styles from './HistoryItem.module.scss';

const HistoryItem: React.FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <span className={styles.password}>AF92;fse</span>
        <span className={styles.strength}>
          Password strength - <span>Very Strong</span>
        </span>
        <span className={styles.time}>Time - 4:27:17 pm</span>
      </div>
      <div className={styles.itemControl}>
        <img src="assets/icons/copy.svg" alt="Copy password" />
        <div className={styles["separate-vertical"]}></div>
        <div className={styles.checkbox}>
          <input type="checkbox" placeholder="+" />
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
